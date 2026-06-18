import LandingPage from './LandingPage';

const feetProduct = {
  id: 2,
  name: 'SAMBIKA Feet Kare Oil',
  contentId: 'feet-kare-oil',
  image: 'feet.webp',
  price: 450,
  onlinePrice: 400,
  mrp: 499,
  title: 'SAMBIKA Feet Kare Oil | Ayurvedic Heel Pain & Diabetic Feet Oil | ₹450',
  metaDescription: 'Ayurvedic oil for heel pain, diabetic feet, numbness & tingling. Free shipping. COD available.',
  headline: 'Relief from Heel Pain & Diabetic Feet',
  tagline: '100% Ayurvedic · ISO & GMP Certified · Free Shipping Across India',
  indications: [
    'Heel Pain (Calcaneal Spur)',
    'Diabetic Feet Syndrome',
    'Numbness & Tingling',
    'Feet Burning Sensation',
    'Cracked & Dry Feet',
    'Damaged Feet Nerves',
  ],
  benefits: [
    'Helps restore comfort and mobility',
    'Reduces sharp, needle-like pain',
    'Supports healing of cracked skin in diabetic foot',
    'Moisturizes thick and dry feet',
  ],
  reviews: [
    { text: 'Heel pain was making every morning difficult. After 10 days, the pain reduced significantly.', author: 'Meera N., Kochi ⭐⭐⭐⭐⭐' },
    { text: 'My diabetic foot problem caused severe burning. This oil gave me relief within 2 weeks.', author: 'Ramesh P., Ahmedabad ⭐⭐⭐⭐⭐' },
    { text: 'The numbness in my feet is almost gone. Very effective and genuinely Ayurvedic.', author: 'Sunita K., Hyderabad ⭐⭐⭐⭐⭐' },
  ],
};

function FeetLanding() {
  return <LandingPage product={feetProduct} />;
}

export default FeetLanding;
