import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fbViewContent, fbAddToCart } from '../utils/fbPixel';
import { ga4ViewItem, ga4AddToCart } from '../utils/ga4Events';

const vveinsSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "SAMBIKA V-Veins Kare Oil",
    "image": "https://sambika-healthcare.netlify.app/assets/vveins.webp",
    "description": "Topical Ayurvedic leg-care oil for tired, heavy legs and varicose vein-related concerns. Made with Garlic, Amba Haldi, Arjun Chal, Bramhi and Rosemary Oil.",
    "brand": { "@type": "Brand", "name": "Sambika Healthcare" },
    "offers": {
        "@type": "Offer",
        "url": "https://sambika-healthcare.netlify.app/v-veins",
        "priceCurrency": "INR",
        "price": "600",
        "priceValidUntil": "2027-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
    }
};

function VVeins()
{
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({});
    const product = 5;
    const navigate = useNavigate();
    const location = useLocation();
    const isProductRoute = location.pathname === '/v-veins';

    useEffect(() => {
        if (isProductRoute) {
            fbViewContent('SAMBIKA V-Veins Kare Oil', 'v-veins-kare-oil', 747);
            ga4ViewItem('SAMBIKA V-Veins Kare Oil', 'v-veins-kare-oil', 747);
        }
    }, [isProductRoute]);

    const handleProductClick = (product: number) => {
        fbAddToCart('SAMBIKA V-Veins Kare Oil', 'v-veins-kare-oil', 747);
        ga4AddToCart('SAMBIKA V-Veins Kare Oil', 'v-veins-kare-oil', 747);
        navigate('/cart', { state: { product } });
    };

    const toggleSection = (key: string) => {
        setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const contentClass = (key: string) => openSections[key] ? 'show-description' : 'hide-description';
    const iconClass = (key: string) => openSections[key] ? 'fa fa-chevron-up' : 'fa fa-chevron-down';

    return (
        <div>
            {isProductRoute && (
                <Helmet>
                    <title>SAMBIKA V-Veins Kare Oil | Ayurvedic Leg Care Oil for Varicose Veins | ₹600 | India</title>
                    <meta name="description" content="Sambika V-Veins Kare Oil is a topical Ayurvedic leg-care oil made with Garlic, Amba Haldi, Arjun Chal, Bramhi & Rosemary Oil. For tired, heavy legs and varicose vein-related concerns. Free shipping in India." />
                    <meta name="keywords" content="varicose veins oil india, ayurvedic varicose vein oil, leg care oil, heavy legs oil, arjun chal oil, sambika v-veins kare oil" />
                    <meta property="og:title" content="SAMBIKA V-Veins Kare Oil | ₹600 | Ayurvedic Leg Care Oil" />
                    <meta property="og:description" content="Topical Ayurvedic leg-care oil with Garlic, Amba Haldi, Arjun Chal, Bramhi & Rosemary Oil. Free shipping in India." />
                    <meta property="og:image" content="https://sambika-healthcare.netlify.app/assets/vveins.webp" />
                    <meta property="og:url" content="https://sambika-healthcare.netlify.app/v-veins" />
                    <link rel="canonical" href="https://sambika-healthcare.netlify.app/v-veins" />
                    <script type="application/ld+json">{JSON.stringify(vveinsSchema)}</script>
                </Helmet>
            )}
            <hr />
            <div className="product_specific_grid" id="VVeins">
                <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3 text-center">
                    <div className="product_image_sticky">
                        <img src="/assets/vveins.webp" alt="SAMBIKA V-Veins Kare Oil" className='product_detail_image_size' loading="lazy"></img>
                        <div className="buy-btn" onClick={() => handleProductClick(product)}><b>Buy Now</b></div>
                    </div>
                </div>
                <div className="product_description m-3 mt-4">
                    <h3 className="product_heading"><b>SAMBIKA V-Veins Kare Oil</b></h3>
                    <div className="product_cost px-2">
                        <span><s><span>Rs.</span> 747</s></span>
                        <span className="product_actual_cost ms-2"><span>Rs.</span> 747</span>
                        <span className="product_discount ms-2">0%</span>
                        <div style={{ fontSize: '0.8rem', color: '#555', marginTop: '4px' }}>
                            💳 <strong>₹600</strong> Online &nbsp;|&nbsp; 💵 <strong>₹747</strong> COD
                        </div>
                        <div className="product_cost_footer">
                            Tax included. Shipping calculated at checkout.
                        </div>
                    </div>
                    <div className="social-proof-badge">
                        <span className="badge-item">✓ ISO &amp; GMP Certified</span>
                        <span className="badge-item">🚚 Free Shipping</span>
                        <span className="badge-item">🌿 100% Ayurvedic</span>
                    </div>
                    <div className="product_details">
                        <p className="mt-2 px-2">
                            Your legs carry you through every day. Give them the care they deserve.
                        </p>
                        <p className="px-2">
                            Long hours of standing, prolonged sitting and busy routines can leave your legs feeling heavy, tired and uncomfortable. For those experiencing varicose vein-related concerns, everyday leg care becomes even more important.
                        </p>
                        <p className="px-2">
                            Sambika V-Veins Kare Oil is a topical leg-care oil designed to complement your daily self-care routine. Easy to apply, it offers a convenient way to care for your skin while encouraging you to give your hardworking legs some much-needed attention. Because healthy leg-care habits begin with consistency.
                        </p>

                        <div className="product_description_border  p-3 py-4">
                            <div className="description_header" onClick={() => toggleSection('what')}>
                                <div>WHAT IT IS</div>
                                <div className="text-center"><i className={iconClass('what')}></i></div>
                            </div>
                            <div className={contentClass('what')}>
                                <div>
                                    <b>Understanding Your Veins. Caring for Your Legs.</b>
                                </div>
                                <div>
                                    Varicose veins develop when the tiny valves inside your veins become weakened or damaged, allowing blood to flow backwards and collect. Over time, this increased pressure can cause veins to become enlarged, twisted and visibly prominent.
                                </div>
                                <div>
                                    Common concerns associated with varicose veins include:
                                </div>
                                <ul>
                                    <li>Heavy, tired legs and calves</li>
                                    <li>Aching and muscle cramps</li>
                                    <li>Swelling around the ankles and feet</li>
                                    <li>Dryness and itching around affected skin</li>
                                    <li>Visible blue or purple, twisted veins</li>
                                    <li>Dark patches and changes in skin texture</li>
                                </ul>
                                <div>
                                    Sambika V-Veins Kare Oil is intended for external topical care and can be incorporated into a regular leg-care routine alongside appropriate medical guidance.
                                </div>
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={() => toggleSection('ingredients')}>
                                <div>INGREDIENTS</div>
                                <div className="text-center"><i className={iconClass('ingredients')}></i></div>
                            </div>
                            <div className={contentClass('ingredients')}>
                                <div><b>Power of Ayurveda in Every Drop</b></div>
                                <ul>
                                    <li><b>Garlic</b> - Relaxes blood vessels and encourages smoother blood circulation</li>
                                    <li><b>Amba Haldi</b> - Offers relief for swelling, itching, and localized discomfort</li>
                                    <li><b>Arjun Chal</b> - Helps to reduce lower limb heaviness, pain, swelling and skin changes</li>
                                    <li><b>Bramhi</b> - Helps in reducing the itchiness of the varicose veins. Prevents blood clotting which are a major complication due to varicose veins.</li>
                                    <li><b>Rosemary Oil - The Absorber</b> - Helps all nutrients penetrate deeper and work faster.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={() => toggleSection('promise')}>
                                <div>SAMBIKA PROMISE</div>
                                <div className="text-center"><i className={iconClass('promise')}></i></div>
                            </div>
                            <div className={contentClass('promise')}>
                                <div><b>Care That Begins With Understanding.</b></div>
                                <div>
                                    At Sambika, we believe that wellness starts with paying attention to your body's everyday needs. Our promise is to encourage consistent self-care through products that fit naturally into your lifestyle.
                                </div>
                                <div>With V-Veins Kare Oil, we focus on:</div>
                                <ul>
                                    <li><b>Everyday Care:</b> A simple addition to your regular leg-care routine.</li>
                                    <li><b>Convenient Application:</b> Easy to incorporate into your self-care habits.</li>
                                    <li><b>Skin-Focused Attention:</b> Encouraging care for skin affected by everyday dryness.</li>
                                    <li><b>Wellness Awareness:</b> Promoting healthy movement, regular breaks and attention to leg health.</li>
                                </ul>
                                <div>Because taking care of yourself isn't a luxury. It's a daily commitment.</div>
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={() => toggleSection('benefits')}>
                                <div>BENEFITS</div>
                                <div className="text-center"><i className={iconClass('benefits')}></i></div>
                            </div>
                            <div className={contentClass('benefits')}>
                                <div><b>A Little Care Goes a Long Way.</b></div>
                                <ul>
                                    <li><b>Complements Everyday Leg Care:</b> Provides a convenient topical application step for individuals looking to establish a consistent leg-care routine.</li>
                                    <li><b>Encourages Skin Care:</b> Can be incorporated into a skincare routine for legs experiencing dryness, subject to the formulation's moisturising properties.</li>
                                    <li><b>Easy to Apply:</b> A straightforward application process that fits into your daily schedule.</li>
                                    <li><b>Supports a Consistent Self-Care Routine:</b> Encourages you to make time for your legs after prolonged standing, sitting or busy days.</li>
                                    <li><b>Pairs With Healthy Leg-Care Habits:</b> Can be used as part of a broader routine that includes regular walking, ankle movements, leg elevation and appropriate medical care.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={() => toggleSection('how')}>
                                <div>HOW TO USE</div>
                                <div className="text-center"><i className={iconClass('how')}></i></div>
                            </div>
                            <div className={contentClass('how')}>
                                <div><b>Simple Steps. Everyday Care.</b></div>
                                <ul>
                                    <li><b>Step 1: Shake Well</b> - Shake the V-Veins Kare Oil bottle well before every application.</li>
                                    <li><b>Step 2: Take the Required Quantity</b> - Dispense the recommended amount of oil onto your palm.</li>
                                    <li><b>Step 3: Apply Gently</b> - Spread a thin layer over clean, intact skin as directed on the product label. Avoid deep massage or pressure over enlarged, swollen or painful veins.</li>
                                    <li><b>Step 4: Make It a Routine</b> - Follow the recommended application frequency and incorporate it into your daily leg-care routine.</li>
                                </ul>
                                <div><b>Precautions:</b></div>
                                <ul>
                                    <li>For external use only.</li>
                                    <li>Perform a patch test before first use.</li>
                                    <li>Avoid application on open wounds, ulcers, broken or irritated skin.</li>
                                    <li>Discontinue use if irritation develops.</li>
                                    <li>Consult a healthcare professional if you experience persistent swelling, pain or skin changes.</li>
                                    <li>Do not use this product as a substitute for prescribed treatment for varicose veins or blood clots.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VVeins;
