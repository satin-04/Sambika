import LandingPage from './LandingPage';

const massageProduct = {
  id: 4,
  name: 'SAMBIKA Massage Oil',
  contentId: 'massage-oil',
  image: 'massage.png',
  price: 200,
  mrp: 229,
  title: 'SAMBIKA Massage Oil | Ayurvedic Stamina & Vitality Oil for Men | ₹200',
  metaDescription: 'Ayurvedic massage oil for men — boost stamina, strength & vitality naturally. Safed Musli, Ashwagandha, Shilajit. 100% herbal, no side effects. Free shipping. COD available.',
  headline: 'Boost Stamina & Vitality — Naturally',
  tagline: 'Powered by Ashwagandha, Safed Musli & Shilajit · 100% Ayurvedic · No Side Effects',
  indications: [
    'Low Stamina & Energy',
    'Weak Muscles & Strength',
    'Reduced Vitality',
    'Stress & Fatigue',
    'Slow Recovery After Exercise',
  ],
  benefits: [
    'Boosts natural stamina and energy levels',
    'Strengthens muscles and improves endurance',
    'Reduces fatigue and supports faster recovery',
    '100% herbal — safe for long-term use',
  ],
  reviews: [
    { text: 'My energy levels have improved noticeably after 2 weeks of use. Genuinely effective!', author: 'Vikram S., Delhi ⭐⭐⭐⭐⭐' },
    { text: 'Great product at a very reasonable price. I feel stronger and more active. Highly recommend.', author: 'Arjun R., Pune ⭐⭐⭐⭐⭐' },
    { text: 'Very satisfied. Natural ingredients, no side effects. Will order again.', author: 'Suresh M., Chennai ⭐⭐⭐⭐⭐' },
  ],
};

function MassageLanding() {
  return <LandingPage product={massageProduct} />;
}

export default MassageLanding;
