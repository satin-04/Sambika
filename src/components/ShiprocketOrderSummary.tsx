import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import "./OrderSummary.css";
import { fbPurchase } from '../utils/fbPixel';
import { ga4Purchase } from '../utils/ga4Events';
import Loader from './Loader';
import OrderSummaryDetails, { OrderSummaryOrder } from './OrderSummaryDetails';

const ORDER_DETAILS_API_URL = import.meta.env.VITE_KOYEB_API_URL.replace(/\/order$/, "/shiprocket-order-details");

// ---------------------------------------------------------------------------
// Redirect target for the Shiprocket Checkout flow (see Cart.tsx).
// Shiprocket appends ?oid=<order_id>&ost=<status> to the redirect_url that
// was passed when creating the checkout access token. This page reads those
// query params, then asks our backend to fetch the full Order/Details from
// Shiprocket, persist it to Firestore, and send the confirmation email —
// the same side effects the old manual checkout form used to trigger.
// ---------------------------------------------------------------------------
const ShiprocketOrderSummary = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const orderId = searchParams.get('oid');
  const status = searchParams.get('ost');
  const isSuccess = status === 'SUCCESS';

  const [isLoading, setIsLoading] = useState(isSuccess && !!orderId);
  const [order, setOrder] = useState<OrderSummaryOrder | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!isSuccess || !orderId) return;

    let cancelled = false;

    (async () => {
      try {
        const response = await fetch(ORDER_DETAILS_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ order_id: orderId }),
        });

        const data = await response.json();

        if (cancelled) return;

        if (!response.ok || !data.success) {
          console.error("shiprocket-order-details error:", data);
          setError(true);
          return;
        }

        setOrder(data.order);
        fbPurchase(Number(data.order?.Amount) || 0);
        ga4Purchase(Number(data.order?.Amount) || 0, `shiprocket-${orderId}`);
      } catch (err) {
        if (cancelled) return;
        console.error("Error fetching Shiprocket order details:", err);
        setError(true);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    })();

    return () => { cancelled = true; };
  }, [isSuccess, orderId]);

  if (!orderId) {
    return (
      <div className="summary-container">
        <div className="container mt-3">
          <div className="border rounded-lg p-4 shadow-md">
            <div className="cart-title"><span>Order Not Found</span></div>
            <p>We couldn't find any order details. If you completed a payment, please check your email/SMS for confirmation.</p>
            <button className="submit-btn mt-3" onClick={() => navigate('/')}>Go to Homepage</button>
          </div>
        </div>
      </div>
    );
  }

  if (!isSuccess) {
    return (
      <div className="summary-container">
        <div className="container mt-3">
          <div className="border rounded-lg p-4 shadow-md">
            <div className="cart-title"><span>Payment Not Completed</span></div>
            <p>Order ID: {orderId}</p>
            <p>Your payment could not be completed. Please try again or contact us if the amount was deducted.</p>
            <button className="submit-btn mt-3" onClick={() => navigate('/')}>Go to Homepage</button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="summary-container">
        <Loader />
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="summary-container">
        <div className="container mt-3">
          <div className="border rounded-lg p-4 shadow-md">
            <div className="cart-title"><span>Order Placed!</span></div>
            <p>Order ID: {orderId}</p>
            <p>Thank you for your order! We couldn't load the full order summary right now, but you will receive a confirmation shortly.</p>
            <button className="submit-btn mt-3" onClick={() => navigate('/')}>Go to Homepage</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="summary-container">
      <div className="container mt-3">
        <OrderSummaryDetails order={order} />
        <div className="home-btn" onClick={() => navigate('/')}><b>Back to Home</b></div>
      </div>
    </div>
  );
};

export default ShiprocketOrderSummary;
