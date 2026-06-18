import LandingPage from './LandingPage';

const jointsProduct = {
  id: 1,
  name: 'SAMBIKA Joints Kare Oil',
  contentId: 'joints-kare-oil',
  image: 'joints.webp',
  price: 500,
  onlinePrice: 450,
  mrp: 549,
  title: 'SAMBIKA Joints Kare Oil | Buy Ayurvedic Joint Pain Relief Oil Online | ₹450',
  metaDescription: '100% Ayurvedic oil for joint pain, arthritis, sciatica & knee pain. Free shipping. COD available.',
  headline: 'Say Goodbye to Joint Pain Naturally',
  tagline: '100% Ayurvedic · No Side Effects · Trusted by 500+ Customers',
  indications: [
    'Arthritis & Knee Pain',
    'Sciatica & Spine Pain',
    'Frozen Shoulder',
    'Cartilage & Tissue Repair',
    'Weak Muscles & Legs',
  ],
  benefits: [
    'Gives energy to joints for free movement',
    'Reduces pain and swelling',
    'Supports tissue and cartilage rebuilding',
    'Improves blood circulation',
  ],
  reviews: [
    { text: 'After 3 weeks of use, my knee pain is almost gone. This oil is truly amazing!', author: 'Priya S., Delhi ⭐⭐⭐⭐⭐' },
    { text: 'My mother has arthritis and this oil has given her real relief. Highly recommend!', author: 'Anita D., Pune ⭐⭐⭐⭐⭐' },
    { text: 'I had sciatica pain for 2 years. Sambika Joints Kare Oil gave me relief in 1 month.', author: 'Rohit M., Mumbai ⭐⭐⭐⭐⭐' },
  ],
};

function JointsLanding() {
  return <LandingPage product={jointsProduct} />;
}

export default JointsLanding;
