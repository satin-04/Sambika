import { useState } from "react";
import "./Cart.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useRazorpay, RazorpayOrderOptions } from "react-razorpay";
import emailjs from 'emailjs-com';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Loader from './Loader';

function Cart()
{
    const location = useLocation();
    const navigate = useNavigate();

    const product = location.state?.product;
    const [jointCount, setJointCount] = useState(0);
    const [feetCount, setFeetCount] = useState(0);
    const [hairCount, setHairCount] = useState(0);

    const { Razorpay } = useRazorpay();
    const [isProcessingPayment, setIsProcessingPayment] = useState(false);
    const [shouldSendEmail, setShouldSendEmail] = useState(false);
    const [displayToast, setDisplayToast] = useState(false);

    const formRef = useRef<HTMLFormElement>(null);

    const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        console.log("form submit clicked");
        const serviceID = 'service_lg6qo5i';
        const templateID = 'template_0237p7r';
        const userID = 'Rw9K12h_Iz_TPh1ve';

        if (!formRef.current) {
            toast.error("Please verify all Address Details are correct.");
            return;
        }

        const formData = formRef.current;
        var total = (formData.elements.namedItem('total') as HTMLInputElement | null)?.value ?? "";
        const name = (formData.elements.namedItem('fullName') as HTMLInputElement | null)?.value ?? "";
        const email = (formData.elements.namedItem('email') as HTMLInputElement | null)?.value ?? "";
        const phone = (formData.elements.namedItem('phone') as HTMLInputElement | null)?.value ?? "";
        // const address1 = (formData.elements.namedItem('address1') as HTMLInputElement | null)?.value ?? "";
        const paymentMode = (formData.elements.namedItem('mode-of-payment') as HTMLInputElement | null)?.value ?? "";
        const currency = "INR";
        const receiptId = "qwsap1";
        const amount = Number(total)*100;

        if(paymentMode === "Online Payment")
        {
            setIsProcessingPayment(true);
    
            try 
            {
                const response = await fetch("https://sambika-backend.onrender.com/order", {
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
                    "key": "rzp_test_RVYOyk7mioCs68", // Enter the Key ID generated from the Dashboard
                    "amount": amount, // Amount is in currency subunits.
                    "currency": "INR",
                    "name": "Sambika Healthcare", //your business name
                    "description": "Sambika Healthcare",
                    "image": "",
                    "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                    "handler": function (){
                        // alert(response.razorpay_payment_id);
                        // alert(response.razorpay_order_id);
                        // alert(response.razorpay_signature)

                        SendConfirmationEmail();
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
            }
        }
        else
        {
            setShouldSendEmail(true);
            setDisplayToast(true);
            emailjs.sendForm(serviceID, templateID, formRef.current, userID)
                .then(() => {
                    const form = formRef.current;
                    if(form) 
                    {
                        const elements = form.elements as HTMLFormControlsCollection & {
                            [name: string]: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                        };
                        const modeOfPayment = elements["mode-of-payment"].value;
                        // var modeOfPayment = formRef.current?.elements["mode-of-payment"].value;
                        if(modeOfPayment === "Online Payment")
                        {
                            toast.success(<>Your order has been placed!<br/><br/>You will receive the confirmation within the next 24 hours on your WhatsApp/SMS.</>);
                        }
                        else
                        {
                            toast.success("The order was placed!");
                        }
                        // navigate('/');
                        setTimeout(() => {
                            navigate('/', { replace: true });
                        }, 10000);
                    }
                })
                .catch(err => {
                    toast.error("Failed to submit order.");
                    console.error('Email error:', err);
                });
            setShouldSendEmail(false);
        }

    };

    const SendConfirmationEmail = () => {
        const serviceID = 'service_lg6qo5i';
        const templateID = 'template_0237p7r';
        const userID = 'Rw9K12h_Iz_TPh1ve';

        if (!formRef.current) {
            toast.error("Please verify all Address Details are correct.");
            return;
        }
        setShouldSendEmail(true);
        setDisplayToast(true);
        emailjs.sendForm(serviceID, templateID, formRef.current, userID)
        .then(() => {
            const form = formRef.current;
            if(form) 
            {
                const elements = form.elements as HTMLFormControlsCollection & {
                    [name: string]: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
                };
                const modeOfPayment = elements["mode-of-payment"].value;
                // var modeOfPayment = formRef.current?.elements["mode-of-payment"].value;
                if(modeOfPayment === "Online Payment")
                {
                    toast.success(<>Thank you for your order!<br/><br/>Your order has been placed and you will receive confirmation and tracking on your WhatsApp / SMS in the next 24 hours!</>);
                }
                else
                {
                    toast.success("The order was placed!");
                }
                // navigate('/');
                setShouldSendEmail(false);
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 10000);
            }
        })
        .catch(err => {
            toast.error("Failed to submit order.");
            console.error('Email error:', err);
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
        
    }, [product, navigate]);

    return (
        <div>
            {isProcessingPayment && <Loader />}
        
            <div className="container mt-3">
                <div className="border rounded-lg p-4 shadow-md">
                    <div className="cart-title">
                        <span>Cart</span>
                    </div>

                    <div className="bg-white p-4 rounded-lg cart-product-grid">
                        <img
                            src="/assets/joints.png"
                            alt="Sambika Joints Kare Oil"
                            className="cart_product_img"
                        />
                        <div>
                            <h3 className="text-lg font-bold cart-product-header">SAMBIKA Joints Kare Oil</h3>
                            <span className="product_cart_cost"><span>Rs.</span> 400</span>
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

                    <div className="bg-white p-4 rounded-lg cart-product-grid">
                        <img
                            src="/assets/feet.png"
                            alt="SAMBIKA Feet Kare Oil"
                            className="cart_product_img"
                        />
                        <div>
                            <h3 className="text-lg font-bold cart-product-header">SAMBIKA Feet Kare Oil</h3>
                            <span className="product_cart_cost"><span>Rs.</span> 400</span>
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

                    <div className="bg-white p-4 rounded-lg cart-product-grid">
                        <img
                            src="/assets/hair.png"
                            alt="SAMBIKA Hair Roots Kare Oil"
                            className="cart_product_img"
                        />
                        <div>
                            <h3 className="text-lg font-bold cart-product-header">SAMBIKA Hair Roots Kare Oil</h3>
                            <span className="product_cart_cost"><span>Rs.</span> 400</span>
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
                    <div className="cart-product-grid">
                        <div className="font-bold cart-product-amount text-center">Amount</div>
                        <span className="product_cart_amount"><span>Rs.</span> {(jointCount+feetCount+hairCount)*400}</span>
                        {/* <div className="text-center delivery-charge-label">Delivery Charge</div>
                        <span className="product_cart_delivery"><span>Rs. </span> {(jointCount+feetCount+hairCount) >= 3 ? 0 : (jointCount+feetCount+hairCount) > 0 ? 0 : 0}</span> */}
                    </div>
                    <div className="ms-2 mb-2">
                        <i>*Delivery charges applicable based on location</i>
                    </div>
                    <div className="cart-title"></div>

                    <div className="cart-product-grid">
                        <div className="text-lg font-bold cart-product-total text-center">Total</div>
                        <span className="product_cart_cost"><span>Rs.</span> {((jointCount+feetCount+hairCount) >= 3 ? (jointCount+feetCount+hairCount)*400 : (jointCount+feetCount+hairCount) > 0 ? (jointCount+feetCount+hairCount)*400 + 0 : 0)}</span>
                    </div>

                </div>

                <div className="border rounded-lg p-4 shadow-md mb-4">
                    <div className="cart-title">
                        <span>Place Order</span>
                    </div>

                    <form className="mt-3" ref={formRef} onSubmit={handleFormSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <input name="fullName" className="form-input" placeholder="Full Name" required />
                            </div>
                            <div className="col-12">
                                <input name="address1" className="form-input" placeholder="Address Line 1" required />
                            </div>
                            <div className="col-12">
                                <input name="address2" className="form-input" placeholder="Address Line 2" />
                            </div>
                            <div className="col-4">
                                <input name="city" className="form-input" placeholder="City" required />
                            </div>
                            <div className="col-4">
                                <input name="state" className="form-input" placeholder="State" required />
                            </div>
                            <div className="col-4">
                                <input name="zipcode" className="form-input" placeholder="Zip Code" required />
                            </div>
                            <div className="col-6">
                                <input name="phone" className="form-input" placeholder="Phone Number" required />
                            </div>
                            <div className="col-6">
                                <input name="email" className="form-input" placeholder="Email (optional)" type="email" />
                            </div>
                            <div className="col-12 form-payment-alignment">
                                <span className="mode-of-payment-label">Mode of Payment</span> &nbsp; &nbsp; &nbsp;
                                <label className="slategray-color">
                                    <input name="mode-of-payment" type="radio" value="Cash On Delivery" required />
                                    &nbsp;Cash On Delivery &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                </label>
                                <label className="slategray-color">
                                    <input name="mode-of-payment" type="radio" value="Online Payment" />
                                    &nbsp;Online Payment
                                </label>
                            </div>
                            <div hidden>
                                <input name="jointCount" className="form-input" value={jointCount} readOnly />
                                <input name="feetCount" className="form-input" value={feetCount} readOnly />
                                <input name="hairCount" className="form-input" value={hairCount} readOnly />
                                <input name="total" className="form-input" value={((jointCount+feetCount+hairCount) >= 3 ? (jointCount+feetCount+hairCount)*400 : (jointCount+feetCount+hairCount) > 0 ? (jointCount+feetCount+hairCount)*400 + 0 : 0)} readOnly />

                            </div>
                        </div>
                        <div className="submit-order-btn">
                            <button type="submit" className="submit-btn">SUBMIT ORDER</button>
                            {displayToast ? (
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
                            ) : <></>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cart;