import { useState } from "react";
import "./Cart.css"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import Loader from './Loader';
import { fbInitiateCheckout } from '../utils/fbPixel';
import { ga4BeginCheckout } from '../utils/ga4Events';

const SHIPROCKET_CHECKOUT_API_URL = import.meta.env.VITE_KOYEB_API_URL.replace(/\/order$/, "/shiprocket-checkout");

// Shiprocket variant IDs (must match server/products.js onlineVariantId).
// Shiprocket's own hosted checkout handles both Online Payment and Cash On
// Delivery pricing/selection for whichever variant is sent here.
const SHIPROCKET_VARIANT_IDS = {
    joints: "2000000000001",
    feet: "2000000000003",
    hair: "2000000000005",
    massage: "2000000000007",
};

function Cart()
{
    const location = useLocation();

    const product = location.state?.product;
    const [jointCount, setJointCount] = useState(0);
    const [feetCount, setFeetCount] = useState(0);
    const [hairCount, setHairCount] = useState(0);
    const [massageCount, setMassageCount] = useState(0);

    // Reference prices shown on this page — Cash on Delivery (COD) prices,
    // matching the advertised price shown on the product pages. Matches the
    // variant IDs sent to Shiprocket below. The authoritative charged amount
    // is whatever Shiprocket's checkout/Order Details ultimately returns.
    const otherCodPrice = 450;
    const jointCodPrice = 500;

    // Bundle discount: 5% off when buying 3 or more items
    const subtotal = jointCount * jointCodPrice + (feetCount + hairCount + massageCount) * otherCodPrice;
    const totalItems = jointCount + feetCount + hairCount + massageCount;
    const bundleDiscount = totalItems >= 3 ? Math.floor(subtotal * 0.05) : 0;

    const cartTotal = totalItems > 0 ? subtotal - bundleDiscount : 0;

    const [isProcessingShiprocket, setIsProcessingShiprocket] = useState(false);

    // ---------------------------------------------------------------------
    // Shiprocket Checkout — the sole checkout path. Generates a Shiprocket
    // checkout access token via the backend, then hands off to Shiprocket's
    // HeadlessCheckout SDK (loaded in index.html), which collects the
    // address and lets the customer choose Online Payment or Cash On
    // Delivery on Shiprocket's own hosted UI.
    // ---------------------------------------------------------------------
    const handlePlaceOrder = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const items = [
            jointCount > 0 && { variantId: SHIPROCKET_VARIANT_IDS.joints, quantity: jointCount },
            feetCount > 0 && { variantId: SHIPROCKET_VARIANT_IDS.feet, quantity: feetCount },
            hairCount > 0 && { variantId: SHIPROCKET_VARIANT_IDS.hair, quantity: hairCount },
            massageCount > 0 && { variantId: SHIPROCKET_VARIANT_IDS.massage, quantity: massageCount },
        ].filter(Boolean) as { variantId: string; quantity: number }[];

        if (items.length === 0) {
            toast.error("Please select at least 1 product to order.");
            return;
        }

        setIsProcessingShiprocket(true);

        try {
            const response = await fetch(SHIPROCKET_CHECKOUT_API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    items,
                    productName: "Sambika Healthcare Order",
                    paymentMode: "Online Payment",
                    redirectUrl: `${window.location.origin}/shiprocket-order-summary`,
                }),
            });

            const data = await response.json();

            if (!response.ok || !data.success || !data.result?.token) {
                console.error("Shiprocket checkout error:", data);
                toast.error("Unable to start Shiprocket checkout. Please try again.");
                return;
            }

            if (!window.HeadlessCheckout) {
                toast.error("Checkout is still loading. Please try again in a moment.");
                return;
            }

            window.HeadlessCheckout.addToCart(e.nativeEvent, data.result.token, {
                fallbackUrl: `${window.location.origin}/cart`,
            });
        } catch (err) {
            console.error("Error starting Shiprocket checkout:", err);
            toast.error("Unable to start Shiprocket checkout. Please try again.");
        } finally {
            setIsProcessingShiprocket(false);
        }
    };

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
        }
        // Fire InitiateCheckout — value uses base price of the selected product
        const initialValue = product === 1 ? 500 : 450;
        fbInitiateCheckout(initialValue, 1);
        ga4BeginCheckout(initialValue);
    }, [product]);

    return (
        <div>
            {isProcessingShiprocket && <Loader />}
        
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
                                <span className="product_cart_cost"><span>Rs.</span> {jointCodPrice}</span>
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
                                <span className="product_cart_cost"><span>Rs.</span> {otherCodPrice}</span>
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
                                <span className="product_cart_cost"><span>Rs.</span> {otherCodPrice}</span>
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
                                <span className="product_cart_cost"><span>Rs.</span> {otherCodPrice}</span>
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

                    <div className="mt-3">
                        <div className="submit-order-btn">
                            <button
                                type="button"
                                disabled={isProcessingShiprocket || totalItems === 0}
                                className="submit-btn"
                                onClick={handlePlaceOrder}
                            >
                                {isProcessingShiprocket ? 'Processing...' : 'PLACE ORDER'}
                            </button>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
