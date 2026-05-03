import './Policy.css';

function Policy() {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Shipping Policy</h1>
        <p className="policy-updated">Last updated: May 2026</p>

        <section>
          <h2>Shipping Policy</h2>
          <ul>
            <li><strong>Free Shipping</strong> on all orders across India. No minimum order value required.</li>
            <li>Orders are dispatched within <strong>1–2 business days</strong> of order confirmation.</li>
            <li>Estimated delivery: <strong>5–7 business days</strong> depending on your location.</li>
            <li>Cash on Delivery (COD) and Online Payment are both available.</li>
            <li>You will receive a WhatsApp/SMS confirmation once your order is dispatched.</li>
          </ul>
        </section>

        {/* <section>
          <h2>Return Policy</h2>
          <ul>
            <li>We accept returns within <strong>7 days</strong> of delivery if the product is damaged, defective, or incorrectly shipped.</li>
            <li>To initiate a return, please contact us on WhatsApp at <strong>+91 8097-931-971</strong> or email <strong>sambikahealthcare@gmail.com</strong> with your order details and a photo of the product.</li>
            <li>Products must be unused and in their original packaging to be eligible for return.</li>
            <li>Opened or partially used products are not eligible for return unless damaged or defective.</li>
          </ul>
        </section> */}

        {/* <section>
          <h2>Refund Policy</h2>
          <ul>
            <li>Once your return is received and inspected, we will notify you of the approval or rejection of your refund.</li>
            <li>Approved refunds will be processed within <strong>5–7 business days</strong>.</li>
            <li>For Online Payment orders, the refund will be credited to the original payment method.</li>
            <li>For COD orders, the refund will be transferred via bank transfer or UPI. Please share your bank details when requesting a refund.</li>
          </ul>
        </section> */}

        <section>
          <h2>Cancellation Policy</h2>
          <ul>
            <li>Orders can be cancelled within <strong>24 hours</strong> of placement by contacting us on WhatsApp or email.</li>
            <li>Once dispatched, orders cannot be cancelled. Please initiate a return after delivery instead.</li>
          </ul>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>
            For any queries regarding your order, please reach out to us:
          </p>
          <ul>
            <li><strong>WhatsApp:</strong> +91 8097-931-971</li>
            <li><strong>Email:</strong> sambikahealthcare@gmail.com</li>
            <li><strong>Address:</strong> Shop Number 5, Rizvi Chambers, Hill Road, Bandra West, Mumbai 400050</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Policy;
