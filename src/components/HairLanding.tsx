import LandingPage from './LandingPage';

const hairProduct = {
  id: 3,
  name: 'SAMBIKA Hair Roots Kare Oil',
  contentId: 'hair-roots-kare-oil',
  image: 'hair.webp',
  price: 450,
  onlinePrice: 400,
  mrp: 499,
  title: 'SAMBIKA Hair Roots Kare Oil | Ayurvedic Hair Growth & Fall Control | ₹450',
  metaDescription: 'Natural Ayurvedic hair oil for hair fall, dandruff & bald patches. Bhringraj, Amla, Coconut Oil. Free shipping across India. COD available.',
  headline: 'Stop Hair Fall. Grow Stronger Hair Naturally.',
  tagline: 'Powered by Bhringraj, Amla & Arjun Chal · 100% Ayurvedic · No Chemicals',
  indications: [
    'Hair Fall & Hair Loss',
    'Dandruff & Scalp Scaling',
    'Bald Patches',
    'Slow Hair Growth',
    'Under-Nourished Dry Hair',
    'Premature Greying',
  ],
  benefits: [
    'Strengthens hair roots, reduces hair fall',
    'Stimulates hair growth & helps reduce bald patches',
    'Reduces dandruff and nourishes hair',
    'Prevents premature greying',
  ],
  reviews: [
    { text: 'Hair fall has reduced drastically. I can see new growth at the bald patches. Love it!', author: 'Sneha M., Bangalore ⭐⭐⭐⭐⭐' },
    { text: 'After 1 month of regular use, my hair is visibly thicker and shinier. Pure Ayurvedic.', author: 'Kavita R., Jaipur ⭐⭐⭐⭐⭐' },
    { text: 'Dandruff is gone and hair fall is under control. Very happy with Sambika Hair Kare Oil.', author: 'Pooja T., Chennai ⭐⭐⭐⭐⭐' },
  ],
};

function HairLanding() {
  return <LandingPage product={hairProduct} />;
}

export default HairLanding;
