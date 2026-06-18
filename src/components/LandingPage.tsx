import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fbViewContent, fbAddToCart } from '../utils/fbPixel';
import { ga4ViewItem, ga4AddToCart } from '../utils/ga4Events';
import './LandingPage.css';

const allProducts = [
  { id: 1, name: 'Joints Kare Oil', image: 'joints.webp', price: 500, onlinePrice: 450, route: '/joints', tagline: 'Joint & Arthritis Pain Relief' },
  { id: 2, name: 'Feet Kare Oil',   image: 'feet.webp',   price: 450, onlinePrice: 400, route: '/feet',   tagline: 'Heel Pain & Diabetic Feet' },
  { id: 3, name: 'Hair Roots Kare Oil', image: 'hair.webp', price: 450, onlinePrice: 400, route: '/hair', tagline: 'Stop Hair Fall, Grow Stronger Hair' },
  { id: 4, name: 'Massage Oil',     image: 'massage.webp', price: 200, route: '/massage', tagline: "Men's Stamina & Vitality" },
];

interface LandingPageProps {
  product: {
    id: number;
    name: string;
    contentId: string;
    image: string;
    price: number;
    onlinePrice?: number;
    mrp: number;
    title: string;
    metaDescription: string;
    headline: string;
    tagline: string;
    indications: string[];
    benefits: string[];
    reviews: { text: string; author: string }[];
  };
}

function LandingPage({ product }: LandingPageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    fbViewContent(product.name, product.contentId, product.price);
    ga4ViewItem(product.name, product.contentId, product.price);
  }, []);

  const handleBuyNow = () => {
    fbAddToCart(product.name, product.contentId, product.price);
    ga4AddToCart(product.name, product.contentId, product.price);
    navigate('/cart', { state: { product: product.id } });
  };

  const otherProducts = allProducts.filter(p => p.id !== product.id);

  return (
    <div className="lp-page">
      <Helmet>
        <title>{product.title}</title>
        <meta name="description" content={product.metaDescription} />
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="lp-hero">
        <div className="brand">Sambika Healthcare</div>
        <h1>{product.headline}</h1>
        <p className="tagline">{product.tagline}</p>
      </div>

      <div className="lp-content">
        <div className="lp-product-card">
          <img src={`/assets/${product.image}`} alt={product.name} className="lp-product-img" />
          <div className="lp-product-name">{product.name}</div>

          <div className="lp-price-row">
            <span className="lp-price-mrp">Rs. {product.mrp}</span>
            <span className="lp-price-actual">Rs. {product.onlinePrice ?? product.price}</span>
            {product.onlinePrice !== undefined && product.onlinePrice < product.price ? (
              <span className="lp-price-badge">₹50 OFF Online</span>
            ) : (
              <span className="lp-price-badge">10% OFF</span>
            )}
          </div>
          {product.onlinePrice !== undefined && product.onlinePrice < product.price && (
            <div style={{ fontSize: '0.82rem', color: '#666', marginBottom: '6px' }}>
              💳 <strong>₹{product.onlinePrice}</strong> via Online Payment &nbsp;|&nbsp; 💵 <strong>₹{product.price}</strong> via Cash on Delivery
            </div>
          )}

          <div className="lp-badges">
            <span className="lp-badge">✓ 100% Ayurvedic</span>
            <span className="lp-badge">✓ ISO &amp; GMP Certified</span>
            <span className="lp-badge">🚚 Free Shipping</span>
            <span className="lp-badge">💳 COD Available</span>
            <span className="lp-badge">✓ No Side Effects</span>
          </div>

          <button className="lp-cta" onClick={handleBuyNow}>
            🛒 ORDER NOW — Rs. {product.onlinePrice !== undefined && product.onlinePrice < product.price ? `${product.onlinePrice} (Online) / Rs. ${product.price} (COD)` : product.price}
          </button>
          <p className="lp-trust">✅ Free shipping · Cash on Delivery · Delivered in 5–7 days</p>
        </div>

        <div className="lp-indications">
          <h3>✅ Works For</h3>
          <ul>
            {product.indications.map((ind, i) => (
              <li key={i}>✓ {ind}</li>
            ))}
          </ul>
        </div>

        <div className="lp-testimonials">
          <h3>⭐ What Our Customers Say</h3>
          {product.reviews.map((r, i) => (
            <div className="lp-review" key={i}>
              <p>"{r.text}"</p>
              <span>— {r.author}</span>
            </div>
          ))}
        </div>

        <div className="lp-certifications">
          <img src="/assets/ISO_Certified.webp" alt="ISO Certified" className="lp-cert-img" loading="lazy" />
          <img src="/assets/GMP_Certified.webp" alt="GMP Certified" className="lp-cert-img" loading="lazy" />
          <img src="/assets/Ayurvedic.webp" alt="Ayurvedic" className="lp-cert-img" loading="lazy" />
        </div>

        <div className="lp-bottom-cta">
          <button className="lp-cta" onClick={handleBuyNow}>
            🛒 ORDER NOW — Rs. {product.onlinePrice !== undefined && product.onlinePrice < product.price ? `${product.onlinePrice} (Online) / Rs. ${product.price} (COD)` : product.price}
          </button>
          <p className="lp-trust">✅ Free shipping · Cash on Delivery · Delivered in 5–7 days</p>
        </div>

        <div className="lp-crosssell">
          <h3>Also from Sambika Healthcare</h3>
          <div className="lp-crosssell-cards">
            {otherProducts.map(p => (
              <div className="lp-crosssell-card" key={p.id} onClick={() => navigate(p.route)}>
                <img src={`/assets/${p.image}`} alt={p.name} loading="lazy" />
                <div className="lp-cs-name">{p.name}</div>
                <div className="lp-cs-tagline">{p.tagline}</div>
                <div className="lp-cs-price">{p.onlinePrice !== undefined && p.onlinePrice < p.price ? `₹${p.onlinePrice} Online / ₹${p.price} COD` : `₹${p.price}`}</div>
                <button className="lp-cs-btn">View Product →</button>
              </div>
            ))}
          </div>
        </div>

        <div className="lp-footer">
          <a href="/">sambika-healthcare.netlify.app</a> · +91 8097-931-971 · sambikahealthcare@gmail.com
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
