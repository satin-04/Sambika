import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "./OrderSummary.css"

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;
  const isAuthorized = location.state?.authorized ?? false;

  // Security Check: If no state or not authorized, redirect to home
  useEffect(() => {
    if (!order || !isAuthorized) {
        console.log("reached");
        navigate('/', { replace: true });
    }
  }, [order, navigate]);

  if (!order) return null;

  const handleHomePageNavigation = () => {
    navigate("/");
  }

  return (
    <div className="summary-container">

        <div className="container mt-3">
            <div className="border rounded-lg p-4 shadow-md">
                <div className="cart-title">
                    <span>Order Placed!</span>
                </div>

                {order.JointsKareOil > 0  && (<div className="bg-white p-4 rounded-lg cart-product-grid">
                    <img
                        src="/assets/joints.png"
                        alt="Sambika Joints Kare Oil"
                        className="cart_product_img"
                    />
                    <div>
                        <h3 className="text-lg font-bold cart-product-header">SAMBIKA Joints Kare Oil</h3>
                        <span className="product_cart_cost"><span>Rs.</span> {order.JointsKareOil*450}</span>
                        <div className="flex items-center gap-4 mt-1 py-3">
                            <span className="order-summary-quantity">Quantity: {order.JointsKareOil}</span>
                        </div>
                    </div>
                </div>
                )}

                <div className="cart-title"></div>

                {order.FeetKareOil > 0  && (<div className="bg-white p-4 rounded-lg cart-product-grid">
                    <img
                        src="/assets/feet.png"
                        alt="SAMBIKA Feet Kare Oil"
                        className="cart_product_img"
                    />
                    <div>
                        <h3 className="text-lg font-bold cart-product-header">SAMBIKA Feet Kare Oil</h3>
                        <span className="product_cart_cost"><span>Rs.</span> {order.FeetKareOil*450}</span>
                        <div className="flex items-center gap-4 mt-1 py-3">
                            <span className="order-summary-quantity">Quantity: {order.FeetKareOil}</span>
                        </div>
                    </div>
                </div>
                )}

                <div className="cart-title"></div>

                {order.HairKareOil > 0 && (<div className="bg-white p-4 rounded-lg cart-product-grid">
                    <img
                        src="/assets/hair.png"
                        alt="SAMBIKA Hair Roots Kare Oil"
                        className="cart_product_img"
                    />
                    <div>
                        <h3 className="text-lg font-bold cart-product-header">SAMBIKA Hair Roots Kare Oil</h3>
                        <span className="product_cart_cost"><span>Rs.</span> {order.HairKareOil*450}</span>
                        <div className="flex items-center gap-4 mt-1 py-3">
                            <span className="order-summary-quantity">Quantity: {order.HairKareOil}</span>
                        </div>
                    </div>
                </div>
                )}

                <div className="cart-title"></div>
                <div className="cart-product-grid">
                    <div className="font-bold cart-product-amount text-center">Amount</div>
                    <span className="product_cart_amount"><span>Rs.</span> {order.Amount}</span>
                    {/* <div className="text-center delivery-charge-label">Delivery Charge</div>
                    <span className="product_cart_delivery"><span>Rs. </span> {(jointCount+feetCount+hairCount) >= 3 ? 0 : (jointCount+feetCount+hairCount) > 0 ? 25 : 0}</span> */}
                </div>
            </div>
            <div className="home-btn" onClick={() => handleHomePageNavigation()}><b>Back to Home</b></div>
        </div>
    </div>
  );
};

export default OrderSummary;