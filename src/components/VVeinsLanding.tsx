import LandingPage from './LandingPage';

const vveinsProduct = {
  id: 5,
  name: 'SAMBIKA V-Veins Kare Oil',
  contentId: 'v-veins-kare-oil',
  image: 'vveins.webp',
  price: 700,
  onlinePrice: 600,
  mrp: 747,
  title: 'SAMBIKA V-Veins Kare Oil | Ayurvedic Leg Care Oil | ₹600 Online',
  metaDescription: 'Topical Ayurvedic leg-care oil with Garlic, Amba Haldi, Arjun Chal, Bramhi & Rosemary Oil. For tired, heavy legs and varicose vein-related concerns. Free shipping. COD available.',
  headline: 'Give Your Legs the Care They Deserve',
  tagline: 'Powered by Garlic, Amba Haldi, Arjun Chal & Bramhi · 100% Ayurvedic · For External Use',
  indications: [
    'Heavy, Tired Legs & Calves',
    'Aching & Muscle Cramps',
    'Swelling Around Ankles & Feet',
    'Dryness & Itching of Skin',
    'Visible Twisted Veins',
    'Dark Patches & Skin Texture Changes',
  ],
  benefits: [
    'Complements your everyday leg-care routine',
    'Easy to apply, fits your daily schedule',
    'Encourages care for dry skin on legs',
    'Pairs with walking, leg elevation and medical care',
  ],
  reviews: [],
};

function VVeinsLanding() {
  return <LandingPage product={vveinsProduct} />;
}

export default VVeinsLanding;
