import { useState } from "react";
import "./Cart.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Loader from './Loader';
import { collection, addDoc } from "firebase/firestore";
import {db} from '../firebase';
import { getUtmData } from '../utils/utmTracker';
import { fbInitiateCheckout, fbPurchase } from '../utils/fbPixel';
import { ga4BeginCheckout, ga4Purchase } from '../utils/ga4Events';

const EMAIL_API_URL = import.meta.env.VITE_KOYEB_API_URL.replace(/\/order$/, "/send-email");

function Cart()
{
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state?.product;
    const [jointCount, setJointCount] = useState(0);
    const [feetCount, setFeetCount] = useState(0);
    const [hairCount, setHairCount] = useState(0);
    const [massageCount, setMassageCount] = useState(0);

    const [paymentMode, setPaymentMode] = useState<string>("");

    // ₹450 products cost ₹400 when paying online (Feet & Hair Kare Oil)
    const unitPrice450 = paymentMode === "Online Payment" ? 400 : 450;

    // Joints Kare Oil: ₹450 online, ₹500 COD
    const jointUnitPrice = paymentMode === "Online Payment" ? 450 : 500;

    // Massage Oil: ₹200 online, ₹220 COD
    const massageUnitPrice = paymentMode === "Cash On Delivery" ? 220 : 200;

    // Bundle discount: 5% off when buying 3 or more items
    const subtotal = jointCount * jointUnitPrice + (feetCount + hairCount) * unitPrice450 + massageCount * massageUnitPrice;
    const totalItems = jointCount + feetCount + hairCount + massageCount;
    const bundleDiscount = totalItems >= 3 ? Math.floor(subtotal * 0.05) : 0;

    const cartTotal = totalItems > 0 ? subtotal - bundleDiscount : 0;

    // COD is not available when only Massage Oil is in the cart
    const isMassageOnly = massageCount > 0 && (jointCount + feetCount + hairCount) === 0;

    const { Razorpay } = useRazorpay();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [shouldSendEmail, setShouldSendEmail] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log("form submit clicked");

        if (!formRef.current) {
            toast.error("Please verify all Address Details are correct.");
            return;
        }

        setIsSubmitting(true);

        const indiaTime = new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "full",
            timeStyle: "medium",
            hour12: true,
        });

        const formData = formRef.current;
        var total = (formData.elements.namedItem('total') as HTMLInputElement | null)?.value ?? "";
        const name = (formData.elements.namedItem('fullName') as HTMLInputElement | null)?.value ?? "";
        const email = (formData.elements.namedItem('email') as HTMLInputElement | null)?.value ?? "";
        const phone = (formData.elements.namedItem('phone') as HTMLInputElement | null)?.value ?? "";
        const address1 = (formData.elements.namedItem('address1') as HTMLInputElement | null)?.value ?? "";
        const address2 = (formData.elements.namedItem('address2') as HTMLInputElement | null)?.value ?? "";
        const city = (formData.elements.namedItem('city') as HTMLInputElement | null)?.value ?? "";
        const state = (formData.elements.namedItem('state') as HTMLInputElement | null)?.value ?? "";
        const zipcode = (formData.elements.namedItem('zipcode') as HTMLInputElement | null)?.value ?? "";
        const paymentMode = (formData.elements.namedItem('mode-of-payment') as HTMLInputElement | null)?.value ?? "";
        const currency = "INR";
        const receiptId = "qwsap1";
        const amount = Number(total)*100;

        if(amount == 0)
        {
            setIsSubmitting(false);
            toast.error("Please select at least 1 product to order.");
            return;
        }

        if(!/^[0-9]{6}$/.test(zipcode))
        {
            setIsSubmitting(false);
            toast.error("Zip Code must be exactly 6 digits.");
            return;
        }

        if(!/^[0-9]{10}$/.test(phone))
        {
            setIsSubmitting(false);
            toast.error("Phone number must be exactly 10 digits.");
            return;
        }

        const utmData = getUtmData();

        try
        {
            await addDoc(collection(db, "order-draft"), {
                Customer: name,
                Address1: address1,
                Address2: address2,
                City: city,
                State: state,
                ZipCode: zipcode,
                Phone: phone,
                Email: email,
                ModeOfPayment: paymentMode,
                JointsKareOil: jointCount,
                FeetKareOil: feetCount,
                HairKareOil: hairCount,
                MassageOil: massageCount,
                Amount: total,
                CreatedAt: indiaTime,
                TimestampMs: Date.now(),
                ...utmData
            });
        }
        catch (err) {
            console.error("Error sending data to db:", err);
        }

        if(paymentMode === "Online Payment")
        {
            setIsProcessingPayment(true);
    
            try 
            {
                const response = await fetch("https://exciting-aggie-sambika-8d12e213.koyeb.app/order", {
                    method: "POST",
                    body: JSON.stringify({
                        "amount": amount,
                        "currency": currency,
                        "receipt": receiptId
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
    
                const order = await response.json();
    
                
                var options: RazorpayOrderOptions = {
                    "key": import.meta.env.VITE_RAZORPAY_KEY,
                    "amount": amount, // Amount is in currency subunits.
                    "currency": "INR",
                    "name": "Sambika Healthcare", //your business name
                    "description": "Sambika Healthcare",
                    "image": "",
                    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "handler": function (){
                        fbPurchase(amount / 100);
                        ga4Purchase(amount / 100, `rzp-${Date.now()}`);
                        SendConfirmationEmail();
                        setIsSubmitting(false);
                    },
                    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
                        "name": name, //your customer's name
                        "email": email, 
                        "contact": phone  //Provide the customer's phone number for better conversion rates 
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                };
    
                const razorpayInstance = new Razorpay(options);
    
                razorpayInstance.open();
                e.preventDefault();
                setIsProcessingPayment(false);
                setIsSubmitting(false);
                
                if(shouldSendEmail)
                {
                    console.log("inside should send email?");
                    // emailjs.sendForm(serviceID, templateID, formRef.current, userID)
                    // .then(() => {
                    //     const form = formRef.current;
                    //     if(form) 
                    //     {
                    //         const elements = form.elements as HTMLFormControlsCollection & {
                    //             [name: string]: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                    //         };
                    //         const modeOfPayment = elements["mode-of-payment"].value;
                    //         // var modeOfPayment = formRef.current?.elements["mode-of-payment"].value;
                    //         if(modeOfPayment === "Online Payment")
                    //         {
                    //             toast.success(<>Thank you for your order!<br/><br/>You will receive our QR code within the next 24 hours on your WhatsApp.</>);
                    //         }
                    //         else
                    //         {
                    //             toast.success("The order was placed!");
                    //         }
                    //         // navigate('/');
                    //         setShouldSendEmail(false);
                    //         setTimeout(() => {
                    //             navigate('/', { replace: true });
                    //         }, 10000);
                    //     }
                    // })
                    // .catch(err => {
                    //     toast.error("Failed to submit order.");
                    //     console.error('Email error:', err);
                    // });
                }
            } catch (err) {
                console.error("Error opening Razorpay:", err);
                setIsProcessingPayment(false); // Hide the spinner if an error occurs
                setIsSubmitting(false);
            }
        }
        else
        {
            setShouldSendEmail(true);
            try
            {
                await addDoc(collection(db, "order"), {
                    Customer: name,
                    Address1: address1,
                    Address2: address2,
                    City: city,
                    State: state,
                    ZipCode: zipcode,
                    Phone: phone,
                    Email: email,
                    ModeOfPayment: paymentMode,
                    JointsKareOil: jointCount,
                    FeetKareOil: feetCount,
                    HairKareOil: hairCount,
                    MassageOil: massageCount,
                    Amount: total,
                    CreatedAt: indiaTime,
                    ...utmData
                });
            }
            catch (err) {
                console.error("Error sending data to db:", err);
            }

            const orderData = {
                Customer: name,
                Address1: address1,
                Address2: address2,
                City: city,
                State: state,
                ZipCode: zipcode,
                Phone: phone,
                Email: email,
                ModeOfPayment: paymentMode,
                JointsKareOil: jointCount,
                FeetKareOil: feetCount,
                HairKareOil: hairCount,
                MassageOil: massageCount,
                Amount: total,
                CreatedAt: indiaTime
            };

            fetch(EMAIL_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    fullName: name,
                    address1, address2, city, state, zipcode,
                    phone, email, modeOfPayment: paymentMode,
                    jointCount, feetCount, hairCount, massageCount,
                    total
                })
            })
                .then(async (response) => {
                    if (!response.ok) throw new Error("Email API error");
                    const form = formRef.current;
                    if(form) 
                    {
                        fbPurchase(Number(total));
                        ga4Purchase(Number(total), `cod-${Date.now()}`);
                        setIsSubmitting(false);
                        navigate('/order-summary', { 
                            state: { 
                                order: orderData,
                                authorized: true
                            }
                        });
                        // var modeOfPayment = formRef.current?.elements["mode-of-payment"].value;
                        // if(modeOfPayment === "Online Payment")
                        // {
                        //     navigate('/', { 
                        //         state: { 
                        //             showToast: true, 
                        //             message: "<>Your order has been placed!<br/><br/>You will receive the confirmation within the next 24 hours on your WhatsApp/SMS.</>" 
                        //         } 
                        //     });
                        // }
                        // else
                        // {
                        //     navigate('/', { 
                        //         state: { 
                        //             showToast: true, 
                        //             message: "The order was placed!" 
                        //         }
                        //     });
                        // }
                        // navigate('/');
                        // setTimeout(() => {
                        //     navigate('/', { replace: true });
                        // }, 10000);
                    }
                })
                .catch(err => {
                    toast.error("Failed to submit order.");
                    console.error('Email error:', err);
                });
            setShouldSendEmail(false);
            setIsSubmitting(false);
        }

    };

    const SendConfirmationEmail = async () => {
        if (!formRef.current) {
            toast.error("Please verify all Address Details are correct.");
            return;
        }
        setShouldSendEmail(true);

        const indiaTime = new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "full",
            timeStyle: "medium",
            hour12: true,
        });

        const formData = formRef.current;
        var total = (formData.elements.namedItem('total') as HTMLInputElement | null)?.value ?? "";
        const name = (formData.elements.namedItem('fullName') as HTMLInputElement | null)?.value ?? "";
        const email = (formData.elements.namedItem('email') as HTMLInputElement | null)?.value ?? "";
        const phone = (formData.elements.namedItem('phone') as HTMLInputElement | null)?.value ?? "";
        const address1 = (formData.elements.namedItem('address1') as HTMLInputElement | null)?.value ?? "";
        const address2 = (formData.elements.namedItem('address2') as HTMLInputElement | null)?.value ?? "";
        const city = (formData.elements.namedItem('city') as HTMLInputElement | null)?.value ?? "";
        const state = (formData.elements.namedItem('state') as HTMLInputElement | null)?.value ?? "";
        const zipcode = (formData.elements.namedItem('zipcode') as HTMLInputElement | null)?.value ?? "";
        const paymentMode = (formData.elements.namedItem('mode-of-payment') as HTMLInputElement | null)?.value ?? "";

        const utmData = getUtmData();
        try
        {
            await addDoc(collection(db, "order"), {
                Customer: name,
                Address1: address1,
                Address2: address2,
                City: city,
                State: state,
                ZipCode: zipcode,
                Phone: phone,
                Email: email,
                ModeOfPayment: paymentMode,
                JointsKareOil: jointCount,
                FeetKareOil: feetCount,
                HairKareOil: hairCount,
                MassageOil: massageCount,
                Amount: total,
                CreatedAt: indiaTime,
                ...utmData
            });
        }
        catch (err) {
            console.error("Error sending data to db:", err);
        }

        const orderData = {
            Customer: name,
            Address1: address1,
            Address2: address2,
            City: city,
            State: state,
            ZipCode: zipcode,
            Phone: phone,
            Email: email,
            ModeOfPayment: paymentMode,
            JointsKareOil: jointCount,
            FeetKareOil: feetCount,
            HairKareOil: hairCount,
            MassageOil: massageCount,
            Amount: total,
            CreatedAt: indiaTime
        };

        fetch(EMAIL_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                fullName: name,
                address1, address2, city, state, zipcode,
                phone, email, modeOfPayment: paymentMode,
                jointCount, feetCount, hairCount, massageCount,
                total
            })
        })
        .then(async (response) => {
            if (!response.ok) throw new Error("Email API error");
            const form = formRef.current;
            if(form) 
            {
                setIsSubmitting(false);
                navigate('/order-summary', { 
                    state: { 
                        order: orderData,
                        authorized: true
                    }
                });
            }
        })
        .catch(err => {
            toast.error("Failed to submit order.");
            console.error('Email error:', err);
            setIsSubmitting(false);
        });
    }

    const incrementJointCount = () => {
        setJointCount(jointCount => jointCount + 1);
    };

    const decrementJointCount = () => {
        setJointCount(jointCount => jointCount == 0 ? 0 : jointCount - 1);
    };

    const incrementFeetCount = () => {
        setFeetCount(feetCount => feetCount + 1);
    };

    const decrementFeetCount = () => {
        setFeetCount(feetCount => feetCount == 0 ? 0 : feetCount - 1);
    };

    const incrementHairCount = () => {
        setHairCount(hairCount => hairCount + 1);
    };

    const decrementHairCount = () => {
        setHairCount(hairCount => hairCount == 0 ? 0 : hairCount - 1);
    };

    const incrementMassageCount = () => {
        setMassageCount(massageCount => massageCount + 1);
    };

    const decrementMassageCount = () => {
        setMassageCount(massageCount => massageCount == 0 ? 0 : massageCount - 1);
    };


    useEffect(() => {
        if(product === 1)
        {
            setJointCount(jointCount => jointCount + 1);
        }
        if(product === 2)
        {
            setFeetCount(feetCount => feetCount + 1);
        }
        if(product === 3)
        {
            setHairCount(hairCount => hairCount + 1);
        }
        if(product === 4)
        {
            setMassageCount(massageCount => massageCount + 1);
            setPaymentMode("Online Payment");
        }
        // Fire InitiateCheckout — value uses base price of the selected product
        const initialValue = product === 4 ? 200 : product === 1 ? 500 : 450;
        fbInitiateCheckout(initialValue, 1);
        ga4BeginCheckout(initialValue);
    }, [product, navigate]);

    // Reset to Online Payment if COD is selected while only Massage Oil is in cart
    useEffect(() => {
        if (isMassageOnly && paymentMode === "Cash On Delivery") {
            setPaymentMode("Online Payment");
        }
    }, [isMassageOnly, paymentMode]);

    return (
        <div>
            {isProcessingPayment && <Loader />}
        
            <div className="container mt-3">
                <div className="border rounded-lg p-4 shadow-md">
                    <div className="cart-title">
                        <span>Cart</span>
                    </div>

                    {jointCount > 0 && (
                        <>
                        <div className="bg-white p-4 rounded-lg cart-product-grid">
                            <img
                                src="/assets/joints.webp"
                                alt="Sambika Joints Kare Oil"
                                className="cart_product_img"
                                loading="lazy"
                            />
                            <div>
                                <h3 className="text-lg font-bold cart-product-header">SAMBIKA Joints Kare Oil</h3>
                                <span className="product_cart_cost"><span>Rs.</span> {jointUnitPrice}</span>
                                <div className="flex items-center gap-4 mt-1 py-3">
                                    <button
                                        className="bg-gray-200 btn-decrement-count"
                                        onClick={decrementJointCount}
                                    >
                                        −
                                    </button>
                                    <span className="text-md font-medium p-2">{jointCount}</span>
                                    <button
                                        className="bg-gray-200 btn-decrement-count"
                                        onClick={incrementJointCount}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-title"></div>
                        </>
                    )}

                    {feetCount > 0 && (
                        <>
                        <div className="bg-white p-4 rounded-lg cart-product-grid">
                            <img
                                src="/assets/feet.webp"
                                alt="SAMBIKA Feet Kare Oil"
                                className="cart_product_img"
                                loading="lazy"
                            />
                            <div>
                                <h3 className="text-lg font-bold cart-product-header">SAMBIKA Feet Kare Oil</h3>
                                <span className="product_cart_cost"><span>Rs.</span> {unitPrice450}</span>
                                <div className="flex items-center gap-4 mt-1 py-3">
                                    <button
                                        className="bg-gray-200 btn-decrement-count"
                                        onClick={decrementFeetCount}
                                    >
                                        −
                                    </button>
                                    <span className="text-md font-medium p-2">{feetCount}</span>
                                    <button
                                        className="bg-gray-200 btn-decrement-count"
                                        onClick={incrementFeetCount}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-title"></div>
                        </>
                    )}

                    {hairCount > 0 && (
                        <>
                        <div className="bg-white p-4 rounded-lg cart-product-grid">
                            <img
                                src="/assets/hair.webp"
                                alt="SAMBIKA Hair Roots Kare Oil"
                                className="cart_product_img"
                                loading="lazy"
                            />
                            <div>
                                <h3 className="text-lg font-bold cart-product-header">SAMBIKA Hair Roots Kare Oil</h3>
                                <span className="product_cart_cost"><span>Rs.</span> {unitPrice450}</span>
                                <div className="flex items-center gap-4 mt-1 py-3">
                                    <button
                                        className="bg-gray-200 btn-decrement-count"
                                        onClick={decrementHairCount}
                                    >
                                        −
                                    </button>
                                    <span className="text-md font-medium p-2">{hairCount}</span>
                                    <button
                                        className="bg-gray-200 btn-decrement-count"
                                        onClick={incrementHairCount}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-title"></div>
                        </>
                    )}

                    {massageCount > 0 && (
                        <>
                        <div className="bg-white p-4 rounded-lg cart-product-grid">
                            <img
                                src="/assets/massage.webp"
                                alt="SAMBIKA Massage Oil"
                                className="cart_product_img"
                                loading="lazy"
                            />
                            <div>
                                <h3 className="text-lg font-bold cart-product-header">SAMBIKA Massage Oil</h3>
                                <span className="product_cart_cost"><span>Rs.</span> 200</span>
                                <div className="flex items-center gap-4 mt-1 py-3">
                                    <button
                                        className="bg-gray-200 btn-decrement-count"
                                        onClick={decrementMassageCount}
                                    >
                                        −
                                    </button>
                                    <span className="text-md font-medium p-2">{massageCount}</span>
                                    <button
                                        className="bg-gray-200 btn-decrement-count"
                                        onClick={incrementMassageCount}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="cart-title"></div>
                        </>
                    )}

                    {/* Bundle offer banner */}
                    {totalItems > 0 && totalItems < 3 && (
                        <div className="bundle-offer-banner">
                            🎁 <strong>Buy {3 - totalItems} more bottle{3 - totalItems > 1 ? 's' : ''}</strong> and save 5% on your order!
                        </div>
                    )}
                    {totalItems >= 3 && (
                        <div className="bundle-offer-banner bundle-applied">
                            ✅ <strong>Bundle Discount Applied!</strong> You saved ₹{bundleDiscount} (5% off)
                        </div>
                    )}

                    {/* COD pricing notice for single Massage Oil */}
                    {/* {massageCount === 1 && (jointCount + feetCount + hairCount) === 0 && (
                        <div className="payment-savings-banner" style={{background: '#fff3e0', borderColor: '#e65100', color: '#e65100'}}>
                            💡 COD price: <strong>₹220</strong>. <strong>Pay online</strong> for just ₹200 and save ₹20!
                        </div>
                    )} */}

                    <div className="cart-product-grid">
                        <div className="font-bold cart-product-amount text-center">Subtotal</div>
                        <span className="product_cart_amount"><span>Rs.</span> {subtotal}</span>
                    </div>
                    {bundleDiscount > 0 && (
                        <div className="cart-product-grid">
                            <div className="font-bold cart-product-amount text-center" style={{color: '#2e7d32'}}>Bundle Savings</div>
                            <span className="product_cart_amount" style={{color: '#2e7d32'}}>- Rs. {bundleDiscount}</span>
                        </div>
                    )}
                    <div className="cart-product-grid">
                        <div className="font-bold cart-product-amount text-center">Shipping</div>
                        <span className="product_cart_amount" style={{color: '#2e7d32'}}>🚚 FREE</span>
                    </div>
                    <div className="cart-title"></div>

                    <div className="cart-product-grid">
                        <div className="text-lg font-bold cart-product-total text-center">Total</div>
                        <span className="product_cart_cost"><span>Rs.</span> {cartTotal}</span>
                    </div>

                </div>

                <div className="border rounded-lg p-4 shadow-md mb-4">
                    <div className="cart-title">
                        <span>Place Order</span>
                    </div>

                    <form className="mt-3" ref={formRef} onSubmit={handleFormSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <input name="fullName" className="form-input" placeholder="Full Name / पूरा नाम" required />
                            </div>
                            <div className="col-12">
                                <input name="address1" className="form-input" placeholder="Address Line 1 / पता पंक्ति 1" required />
                            </div>
                            <div className="col-12">
                                <input name="address2" className="form-input" placeholder="Address Line 2 / पता पंक्ति 2" />
                            </div>
                            <div className="col-4">
                                <input name="city" className="form-input" placeholder="City / शहर" required />
                            </div>
                            <div className="col-4">
                                <input name="state" className="form-input" placeholder="State / राज्य" required />
                            </div>
                            <div className="col-4">
                                <input name="zipcode" className="form-input" placeholder="Zip Code / पिन कोड" required inputMode="numeric" pattern="[0-9]{6}" maxLength={6} />
                            </div>
                            <div className="col-6">
                                <input name="phone" className="form-input" placeholder="Phone Number / फ़ोन नंबर" required inputMode="numeric" pattern="[0-9]{10}" maxLength={10} />
                            </div>
                            <div className="col-6">
                                <input name="email" className="form-input" placeholder="Email / ईमेल (optional / वैकल्पिक)" type="email" />
                            </div>
                            <div className="col-12" style={{padding: '0 10px'}}>
                                <span className="payment-mode-label">Mode of Payment</span>
                                {(jointCount + feetCount + hairCount) > 0 && (
                                    <div className="payment-savings-banner">
                                        {jointCount > 0 && (feetCount + hairCount) === 0
                                            ? <>💡 Pay online and <strong>save ₹50 per bottle</strong> — only ₹450 instead of ₹500!</>
                                            : jointCount === 0 && (feetCount + hairCount) > 0
                                            ? <>💡 Pay online and <strong>save ₹50 per Oil bottle</strong> — only ₹400 instead of ₹450!</>
                                            : <>💡 Pay online and <strong>save ₹50 per bottle!</strong></>
                                        }
                                    </div>
                                )}
                                <div className="payment-option-cards">
                                    {/* Online Payment Card */}
                                    <div
                                        className={`payment-card${paymentMode === "Online Payment" ? " selected" : ""}`}
                                        onClick={() => setPaymentMode("Online Payment")}
                                    >
                                        <input
                                            name="mode-of-payment"
                                            type="radio"
                                            value="Online Payment"
                                            checked={paymentMode === "Online Payment"}
                                            onChange={(e) => setPaymentMode(e.target.value)}
                                            required={paymentMode === ""}
                                        />
                                        <div><span className="payment-card-badge-rec">⭐ Recommended</span></div>
                                        <div className="payment-card-icon">💳 <span className="upi-badge">UPI</span></div>
                                        <div className="payment-card-title">Online Payment</div>
                                        {(jointCount + feetCount + hairCount) > 0 ? (
                                            <>
                                                <div className="payment-card-price">
                                                    {jointCount > 0 && (feetCount + hairCount) === 0
                                                        ? <>₹450 / Oil<span className="payment-card-strikethrough">₹500</span></>
                                                        : jointCount === 0
                                                        ? <>₹400 / Oil<span className="payment-card-strikethrough">₹450</span></>
                                                        : <>Save ₹50 / Oil</>
                                                    }
                                                </div>
                                                <div><span className="payment-card-badge">Save ₹50!</span></div>
                                            </>
                                        ) : massageCount === 1 ? (
                                            <div className="payment-card-price" style={{fontSize: '0.9rem', color: '#2e7d32'}}>🚚 Free Delivery</div>
                                        ) : (
                                            <div className="payment-card-price" style={{fontSize: '0.95rem', color: '#555'}}>No extra charge</div>
                                        )}
                                    </div>

                                    {/* Cash on Delivery Card — hidden when only Massage Oil is in cart */}
                                    {!isMassageOnly && (
                                    <div
                                        className={`payment-card${paymentMode === "Cash On Delivery" ? " selected-cod" : ""}`}
                                        onClick={() => setPaymentMode("Cash On Delivery")}
                                    >
                                        <input
                                            name="mode-of-payment"
                                            type="radio"
                                            value="Cash On Delivery"
                                            checked={paymentMode === "Cash On Delivery"}
                                            onChange={(e) => setPaymentMode(e.target.value)}
                                        />
                                        <div style={{marginBottom: '28px'}}></div>
                                        <div className="payment-card-icon">📦</div>
                                        <div className="payment-card-title">Cash on Delivery</div>
                                        {(jointCount + feetCount + hairCount) > 0 ? (
                                            <div className="payment-card-price-cod">
                                                {jointCount > 0 && (feetCount + hairCount) === 0
                                                    ? '₹500 / Oil'
                                                    : jointCount === 0
                                                    ? '₹450 / Oil'
                                                    : 'COD Available'
                                                }
                                            </div>
                                        ) : massageCount === 1 ? (
                                            <div className="payment-card-price-cod" style={{fontSize: '0.9rem'}}>₹220 (COD)</div>
                                        ) : (
                                            <div className="payment-card-price-cod" style={{fontSize: '0.95rem'}}>No extra charge</div>
                                        )}
                                    </div>
                                    )}
                                </div>
                                {isMassageOnly && (
                                    <div className="payment-savings-banner" style={{background: '#fff8e1', borderColor: '#f9a825', color: '#795548', marginTop: '10px'}}>
                                        ⚠️ <strong>COD is not available for Massage Oil.</strong> Please use Online Payment to complete your order.
                                    </div>
                                )}
                            </div>
                            <div hidden>
                                <input name="jointCount" className="form-input" value={jointCount} readOnly />
                                <input name="feetCount" className="form-input" value={feetCount} readOnly />
                                <input name="hairCount" className="form-input" value={hairCount} readOnly />
                                <input name="massageCount" className="form-input" value={massageCount} readOnly />
                                <input name="total" className="form-input" value={cartTotal} readOnly />
                            </div>
                        </div>
                        <div className="submit-order-btn">
                            <button type="submit" disabled={isSubmitting} className="submit-btn">{isSubmitting ? 'Processing...' : 'SUBMIT ORDER'}</button>
                            
                            <ToastContainer
                                position="bottom-right"
                                autoClose={10000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick={false}
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                pauseOnHover
                                theme="light"
                                transition={Bounce}
                            />
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cart;