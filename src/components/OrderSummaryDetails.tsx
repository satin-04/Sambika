import "./OrderSummary.css"

// Shape of the mapped order returned by the backend's
// POST /shiprocket-order-details endpoint (see server/index.js).
export interface OrderSummaryOrder {
  Customer?: string;
  Address1?: string;
  Address2?: string;
  City?: string;
  State?: string;
  ZipCode?: string;
  Phone?: string;
  Email?: string;
  ModeOfPayment?: string;
  JointsKareOil?: number;
  FeetKareOil?: number;
  HairKareOil?: number;
  MassageOil?: number;
  Amount?: string | number;
}

// Presentational product/address/amount breakdown, shared by the
// order-confirmation page rendered after a Shiprocket checkout.
const OrderSummaryDetails = ({ order }: { order: OrderSummaryOrder }) => {
  const hasAddress = order.Address1 || order.City || order.Phone;

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <div className="cart-title">
        <span>Order Placed!</span>
      </div>

      {(order.JointsKareOil ?? 0) > 0 && (
        <div className="bg-white p-4 rounded-lg cart-product-grid">
          <img src="/assets/joints.webp" alt="Sambika Joints Kare Oil" className="cart_product_img" loading="lazy" />
          <div>
            <h3 className="text-lg font-bold cart-product-header">SAMBIKA Joints Kare Oil</h3>
            <div className="flex items-center gap-4 mt-1 py-3">
              <span className="order-summary-quantity">Quantity: {order.JointsKareOil}</span>
            </div>
          </div>
        </div>
      )}

      <div className="cart-title"></div>

      {(order.FeetKareOil ?? 0) > 0 && (
        <div className="bg-white p-4 rounded-lg cart-product-grid">
          <img src="/assets/feet.webp" alt="SAMBIKA Feet Kare Oil" className="cart_product_img" loading="lazy" />
          <div>
            <h3 className="text-lg font-bold cart-product-header">SAMBIKA Feet Kare Oil</h3>
            <div className="flex items-center gap-4 mt-1 py-3">
              <span className="order-summary-quantity">Quantity: {order.FeetKareOil}</span>
            </div>
          </div>
        </div>
      )}

      <div className="cart-title"></div>

      {(order.HairKareOil ?? 0) > 0 && (
        <div className="bg-white p-4 rounded-lg cart-product-grid">
          <img src="/assets/hair.webp" alt="SAMBIKA Hair Roots Kare Oil" className="cart_product_img" loading="lazy" />
          <div>
            <h3 className="text-lg font-bold cart-product-header">SAMBIKA Hair Roots Kare Oil</h3>
            <div className="flex items-center gap-4 mt-1 py-3">
              <span className="order-summary-quantity">Quantity: {order.HairKareOil}</span>
            </div>
          </div>
        </div>
      )}

      <div className="cart-title"></div>

      {(order.MassageOil ?? 0) > 0 && (
        <div className="bg-white p-4 rounded-lg cart-product-grid">
          <img src="/assets/massage.webp" alt="SAMBIKA Massage Oil" className="cart_product_img" loading="lazy" />
          <div>
            <h3 className="text-lg font-bold cart-product-header">SAMBIKA Massage Oil</h3>
            <div className="flex items-center gap-4 mt-1 py-3">
              <span className="order-summary-quantity">Quantity: {order.MassageOil}</span>
            </div>
          </div>
        </div>
      )}

      <div className="cart-title"></div>

      {hasAddress && (
        <>
          <div className="cart-product-grid">
            <div className="font-bold cart-product-amount text-center">Delivery Address</div>
            <span className="product_cart_amount">
              {order.Customer}<br />
              {order.Address1}{order.Address2 ? `, ${order.Address2}` : ""}<br />
              {order.City}, {order.State} {order.ZipCode}<br />
              {order.Phone}
            </span>
          </div>
          <div className="cart-title"></div>
        </>
      )}

      <div className="cart-product-grid">
        <div className="font-bold cart-product-amount text-center">Mode of Payment</div>
        <span className="product_cart_amount">{order.ModeOfPayment}</span>
      </div>
      <div className="cart-product-grid">
        <div className="font-bold cart-product-amount text-center">Amount</div>
        <span className="product_cart_amount"><span>Rs.</span> {order.Amount}</span>
      </div>
    </div>
  );
};

export default OrderSummaryDetails;
