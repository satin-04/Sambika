import './Testimonials.css';

const reviews = [
  {
    name: 'Priya Sharma',
    city: 'Delhi',
    product: 'Joints Kare Oil',
    rating: 5,
    text: 'I have been suffering from knee pain for 3 years. After using Sambika Joints Kare Oil for just 3 weeks, I can walk without pain. Pure Ayurvedic and no side effects. Highly recommended!',
  },
  {
    name: 'Ramesh Patel',
    city: 'Ahmedabad',
    product: 'Feet Kare Oil',
    rating: 5,
    text: 'My diabetic foot problem was causing severe burning and numbness. This oil gave me relief within 2 weeks of regular massage. Very happy with the results.',
  },
  {
    name: 'Sneha Menon',
    city: 'Bangalore',
    product: 'Hair Roots Kare Oil',
    rating: 5,
    text: 'Hair fall has reduced drastically after using this oil. I had bald patches and now I can see new growth. All natural ingredients and no chemicals. Love it!',
  },
  {
    name: 'Anita Desai',
    city: 'Pune',
    product: 'Joints Kare Oil',
    rating: 4,
    text: 'My mother has arthritis and she struggled to move her fingers. After 1 month of using Sambika Joints Kare Oil, she is much more comfortable. Great Ayurvedic product.',
  },
  {
    name: 'Vijay Kumar',
    city: 'Chennai',
    product: 'Massage Oil',
    rating: 5,
    text: 'I was feeling weak and low on energy. This Ayurvedic massage oil has made a real difference. Stamina has improved noticeably. Trusted product from a genuine company.',
  },
  {
    name: 'Meera Nair',
    city: 'Kochi',
    product: 'Feet Kare Oil',
    rating: 5,
    text: 'Heel pain was making every morning difficult. Started using Sambika Feet Kare Oil and within 10 days the sharp pain reduced significantly. Fast delivery and genuine product.',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= count ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
}

function Testimonials() {
  return (
    <div className="testimonials-section" id="Testimonials">
      <div className="testimonials-header">
        <h4>What Our Customers Say</h4>
        <p>Trusted by 1000+ families across India</p>
      </div>
      <div className="testimonials-grid">
        {reviews.map((review, idx) => (
          <div key={idx} className="review-card">
            <StarRating count={review.rating} />
            <p className="review-text">"{review.text}"</p>
            <div className="reviewer-info">
              <span className="reviewer-name">{review.name}</span>
              <span className="reviewer-meta">{review.city} · {review.product}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
