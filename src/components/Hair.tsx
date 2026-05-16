import "./Hair.css"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fbViewContent, fbAddToCart } from '../utils/fbPixel';
import { ga4ViewItem, ga4AddToCart } from '../utils/ga4Events';

const hairSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "SAMBIKA Hair Roots Kare Oil",
    "image": "https://sambika-healthcare.netlify.app/assets/hair.png",
    "description": "Natural Ayurvedic hair oil for hair fall, dandruff, slow growth & bald patches. Powered by Bhringraj, Amla, Arjun Chal, Coconut Oil. ISO & GMP certified.",
    "brand": { "@type": "Brand", "name": "Sambika Healthcare" },
    "offers": {
        "@type": "Offer",
        "url": "https://sambika-healthcare.netlify.app/hair",
        "priceCurrency": "INR",
        "price": "450",
        "priceValidUntil": "2026-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "87"
    }
};

function Hair()
{
    const [firstContentClassName, setfirstContentClassName] = useState('hide-description');
    const [firstIconClassName, setfirstIconClassName] = useState('fa fa-chevron-down');
    const product = 3;
    const navigate = useNavigate();
    const location = useLocation();
    const isProductRoute = location.pathname === '/hair';

    useEffect(() => {
        if (isProductRoute) {
            fbViewContent('SAMBIKA Hair Roots Kare Oil', 'hair-roots-kare-oil', 450);
            ga4ViewItem('SAMBIKA Hair Roots Kare Oil', 'hair-roots-kare-oil', 450);
        }
    }, [isProductRoute]);

    const handleProductClick = (product: number) => {
        fbAddToCart('SAMBIKA Hair Roots Kare Oil', 'hair-roots-kare-oil', 450);
        ga4AddToCart('SAMBIKA Hair Roots Kare Oil', 'hair-roots-kare-oil', 450);
        navigate('/cart', { state: { product } });
    };
    
    const handleFirstContentClick = () => {
        if (firstContentClassName === 'hide-description') {
            setfirstContentClassName('show-description');
        } else {
            setfirstContentClassName('hide-description');
        }
        if (firstIconClassName === 'fa fa-chevron-down') {
            setfirstIconClassName('fa fa-chevron-up');
        } else {
            setfirstIconClassName('fa fa-chevron-down');
        }
    };

    const [secondContentClassName, setSecondContentClassName] = useState('hide-description');
    const [secondIconClassName, setSecondIconClassName] = useState('fa fa-chevron-down');
    
    const handleSecondContentClick = () => {
        if (secondContentClassName === 'hide-description') {
            setSecondContentClassName('show-description');
        } else {
            setSecondContentClassName('hide-description');
        }
        if (secondIconClassName === 'fa fa-chevron-down') {
            setSecondIconClassName('fa fa-chevron-up');
        } else {
            setSecondIconClassName('fa fa-chevron-down');
        }
    };

    const [thirdContentClassName, setThirdContentClassName] = useState('hide-description');
    const [thirdIconClassName, setThirdIconClassName] = useState('fa fa-chevron-down');
    
    const handleThirdContentClick = () => {
        if (thirdContentClassName === 'hide-description') {
            setThirdContentClassName('show-description');
        } else {
            setThirdContentClassName('hide-description');
        }
        if (thirdIconClassName === 'fa fa-chevron-down') {
            setThirdIconClassName('fa fa-chevron-up');
        } else {
            setThirdIconClassName('fa fa-chevron-down');
        }
    };

    const [fourthContentClassName, setFourthContentClassName] = useState('hide-description');
    const [fourthIconClassName, setFourthIconClassName] = useState('fa fa-chevron-down');
    
    const handleFourthContentClick = () => {
        if (fourthContentClassName === 'hide-description') {
            setFourthContentClassName('show-description');
        } else {
            setFourthContentClassName('hide-description');
        }
        if (fourthIconClassName === 'fa fa-chevron-down') {
            setFourthIconClassName('fa fa-chevron-up');
        } else {
            setFourthIconClassName('fa fa-chevron-down');
        }
    };

    const [fifthContentClassName, setFifthContentClassName] = useState('hide-description');
    const [fifthIconClassName, setFifthIconClassName] = useState('fa fa-chevron-down');
    
    const handleFifthContentClick = () => {
        if (fifthContentClassName === 'hide-description') {
            setFifthContentClassName('show-description');
        } else {
            setFifthContentClassName('hide-description');
        }
        if (fifthIconClassName === 'fa fa-chevron-down') {
            setFifthIconClassName('fa fa-chevron-up');
        } else {
            setFifthIconClassName('fa fa-chevron-down');
        }
    };

    return (
        <div>
            {isProductRoute && (
                <Helmet>
                    <title>SAMBIKA Hair Roots Kare Oil | Ayurvedic Hair Growth &amp; Fall Control | ₹450 | India</title>
                    <meta name="description" content="Natural Ayurvedic hair oil for hair fall, dandruff, slow growth & bald patches. Powered by Bhringraj, Amla, Arjun Chal. ISO & GMP certified. Free shipping in India. COD available." />
                    <meta name="keywords" content="ayurvedic hair oil india, hair fall oil india, bhringraj hair oil, amla hair oil, sambika hair roots kare oil, hair growth oil india" />
                    <meta property="og:title" content="SAMBIKA Hair Roots Kare Oil | ₹450 | Ayurvedic Hair Fall Control" />
                    <meta property="og:description" content="Natural Ayurvedic oil for hair fall, dandruff & bald patches. Free shipping across India." />
                    <meta property="og:image" content="https://sambika-healthcare.netlify.app/assets/hair.png" />
                    <meta property="og:url" content="https://sambika-healthcare.netlify.app/hair" />
                    <link rel="canonical" href="https://sambika-healthcare.netlify.app/hair" />
                    <script type="application/ld+json">{JSON.stringify(hairSchema)}</script>
                </Helmet>
            )}
            <div className="product_specific_grid" id="Hair">
                <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3 text-center">
                    <div className="product_image_sticky">

                        <img src="/assets/hair.png" className='product_detail_image_size'></img>
                        {/* <a href="https://www.1mg.com/otc/sambika-herbal-hair-root-kare-oil-100ml-each-otc1093119" target="_blank"><div className="buy-btn"><b>Buy Now</b></div></a> */}
                        <div className="buy-btn" onClick={() => handleProductClick(product)}><b>Buy Now</b></div>                    
                    </div>
                </div>
                <div className="product_description m-3 mt-4">
                    <h3 className="product_heading"><b>SAMBIKA Hair Roots Kare Oil</b></h3>
                    <div className="product_cost px-2">
                        <span><s><span>Rs.</span> 499</s></span>
                        <span className="product_actual_cost ms-2"><span>Rs.</span> 400</span>
                        <span className="product_discount ms-2">-10.00%</span>
                        <div style={{ fontSize: '0.8rem', color: '#555', marginTop: '4px' }}>
                            💳 <strong>₹400</strong> Online &nbsp;|&nbsp; 💵 <strong>₹450</strong> COD
                        </div>
                        <div className="product_cost_footer">
                            Tax included. Shipping calculated at checkout.
                        </div>
                    </div>
                    <div className="social-proof-badge">
                        <span className="badge-item">⭐ 4.8/5</span>
                        <span className="badge-item">✓ 500+ Happy Customers</span>
                        <span className="badge-item">🚚 Free Shipping</span>
                        <span className="badge-item">🌿 100% Ayurvedic</span>
                    </div>
                    <div className="product_details">
                        <p className="mt-2 px-2">
                            Sambika Hair Roots Kare Oil provides nourishment, strengthen roots, and promotes healthier
                            hair growth while preventing hair fall and premature graying.
                        </p>
                        <div className="mb-3 ms-2">
                            <b><i>Indications: </i></b>
                            <span className="badge text-bg-danger me-2">Hair Fall</span>
                            <span className="badge text-bg-danger me-2">Dandruff & Scalp Scaling</span>
                            <span className="badge text-bg-danger me-2">Slow Growth</span>
                            <span className="badge text-bg-danger me-2">Under Nourished Dry Hair</span>
                            <span className="badge text-bg-danger me-2">Sleep Issues</span>
                            <span className="badge text-bg-danger me-2">Bald Patches</span>
                        </div>
                        <div className="product_description_border  p-3 py-4">
                            <div className="description_header" onClick={handleFirstContentClick}>
                                <div>WHAT IT IS</div>
                                <div className="text-center"><i className={firstIconClassName}></i></div>
                            </div>
                            <div className={firstContentClassName}>
                                Sambika Hair Roots Kare Oil is a powerful blend of herbs and oils that address common hair concerns like hair fall, slow growth, dandruff, bald patches and undernourished hair. It acts on the roots of the hair making it stronger, healthier and vibrant hair. The combination of Arjun chal, Dhania, Amla, Jatamansi, Bhringraj, Coconut Oil, and Till Oil ensures nourishment, strength, and promoting healthy hair growth while preventing hair fall and premature graying.
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={handleSecondContentClick}>
                                <div>INGREDIENTS</div>
                                <div className="text-center"><i className={secondIconClassName}></i></div>
                            </div>
                            <div className={secondContentClassName}>
                                <ul>
                                    <li>Arjun Chal</li>
                                    <li>Dhania</li>
                                    <li>Amla</li>
                                    <li>Coconut Oil</li>
                                    <li>Rosemary Oil</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={handleThirdContentClick}>
                                <div>SAMBIKA PROMISE</div>
                                <div className="text-center"><i className={thirdIconClassName}></i></div>
                            </div>
                            <div className={thirdContentClassName}>
                                <ul>
                                    <li>100% Ayurvedic</li>
                                    <li>Paraben Free</li>
                                    <li>Mineral Oil Free</li>
                                    <li>Silicone Free</li>
                                    <li>Dye Free</li>
                                    <li>Cruelty Free</li>
                                </ul>
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={handleFourthContentClick}>
                                <div>BENEFITS</div>
                                <div className="text-center"><i className={fourthIconClassName}></i></div>
                            </div>
                            <div className={fourthContentClassName}>
                                <ul>
                                    <li> Strengthens hair roots, reduces hair fall </li>
                                    <li> Stimulates hair growth & helps reduce bald patches </li>
                                    <li> Reduces dandruff and nourishes hair </li>
                                    <li> Provides natural cooling and supports deep sleep </li>
                                    <li> Gives shine & boosts scalp blood circulation </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={handleFifthContentClick}>
                                <div>HOW TO USE</div>
                                <div className="text-center"><i className={fifthIconClassName}></i></div>
                            </div>
                            <div className={fifthContentClassName}>
                                <ul>
                                    <li> Apply sufficient quantity to the affected area</li>
                                    <li> Massage gently until the oil is absorbed </li>
                                    <li> Avoid contact with eyes, if contact occurs wash with plenty of water </li>
                                    <li> Do not apply on broken or irritated skin </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hair;