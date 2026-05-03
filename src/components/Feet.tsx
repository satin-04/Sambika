import "./Feet.css"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fbViewContent, fbAddToCart } from '../utils/fbPixel';
import { ga4ViewItem, ga4AddToCart } from '../utils/ga4Events';

const feetSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "SAMBIKA Feet Kare Oil",
    "image": "https://sambika-healthcare.netlify.app/assets/feet.png",
    "description": "Ayurvedic oil for heel pain, diabetic foot care, numbness, tingling & cracked feet. Made with Ajwain, Haldi, Til Oil, Rosemary Oil. ISO & GMP certified.",
    "brand": { "@type": "Brand", "name": "Sambika Healthcare" },
    "offers": {
        "@type": "Offer",
        "url": "https://sambika-healthcare.netlify.app/feet",
        "priceCurrency": "INR",
        "price": "450",
        "priceValidUntil": "2026-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "98"
    }
};

function Feet()
{
    const [firstContentClassName, setfirstContentClassName] = useState('hide-description');
    const [firstIconClassName, setfirstIconClassName] = useState('fa fa-chevron-down');
    const product = 2;
    const navigate = useNavigate();
    const location = useLocation();
    const isProductRoute = location.pathname === '/feet';

    useEffect(() => {
        if (isProductRoute) {
            fbViewContent('SAMBIKA Feet Kare Oil', 'feet-kare-oil', 450);
            ga4ViewItem('SAMBIKA Feet Kare Oil', 'feet-kare-oil', 450);
        }
    }, [isProductRoute]);

    const handleProductClick = (product: number) => {
        fbAddToCart('SAMBIKA Feet Kare Oil', 'feet-kare-oil', 450);
        ga4AddToCart('SAMBIKA Feet Kare Oil', 'feet-kare-oil', 450);
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
                    <title>SAMBIKA Feet Kare Oil | Heel Pain &amp; Diabetic Feet Relief | ₹450 | Buy Online India</title>
                    <meta name="description" content="Ayurvedic oil for heel pain, diabetic foot care, numbness, tingling & cracked feet. Made with Ajwain, Haldi, Rosemary. Free shipping across India. COD available." />
                    <meta name="keywords" content="heel pain oil india, diabetic foot care oil, ayurvedic feet oil india, feet numbness relief, sambika feet kare oil, heel pain ayurvedic" />
                    <meta property="og:title" content="SAMBIKA Feet Kare Oil | Heel Pain & Diabetic Feet Relief | ₹450" />
                    <meta property="og:description" content="Ayurvedic relief for heel pain, diabetic feet, numbness & cracked skin. Free shipping in India." />
                    <meta property="og:image" content="https://sambika-healthcare.netlify.app/assets/feet.png" />
                    <meta property="og:url" content="https://sambika-healthcare.netlify.app/feet" />
                    <link rel="canonical" href="https://sambika-healthcare.netlify.app/feet" />
                    <script type="application/ld+json">{JSON.stringify(feetSchema)}</script>
                </Helmet>
            )}
            <div className="product_specific_grid" id="Feet">
                <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3 text-center">
                    <div className="product_image_sticky">

                        <img src="/assets/feet.png" className='product_detail_image_size'></img>
                        {/* <a href="https://www.1mg.com/otc/sambika-herbal-feet-kare-oil-100ml-each-otc1093114" target="_blank"><div className="buy-btn"><b>Buy Now</b></div></a> */}
                        <div className="buy-btn" onClick={() => handleProductClick(product)}><b>Buy Now</b></div>
                    </div>
                </div>
                <div className="product_description m-3 mt-4">
                    <h3 className="product_heading"><b>SAMBIKA Feet Kare Oil</b></h3>
                    <div className="product_cost px-2">
                        <span><s><span>Rs.</span> 499</s></span>
                        <span className="product_actual_cost ms-2"><span>Rs.</span> 450</span>
                        <span className="product_discount ms-2">-10.00%</span>
                        <div className="product_cost_footer">
                            Tax included. Shipping calculated at checkout.
                        </div>
                    </div>
                    <div className="social-proof-badge">
                        <span className="badge-item">⭐ 4.9/5</span>
                        <span className="badge-item">✓ 500+ Happy Customers</span>
                        <span className="badge-item">🚚 Free Shipping</span>
                        <span className="badge-item">💊 ISO &amp; GMP Certified</span>
                    </div>
                    <div className="product_details">
                        <p className="mt-2 px-2">
                            Sambika Feet Kare Oil provides relief from core of various feet problems through its Anti-inflammatory,
                            Pain-relieving and Healing properties. It helps restore comfort and mobility.
                        </p>
                        <div className="mb-3 ms-2">
                            <b><i>Indications: </i></b>
                            <span className="badge text-bg-danger me-2">Heel Pain</span>
                            <span className="badge text-bg-danger me-2">Feet Burning Sensation</span>
                            <span className="badge text-bg-danger me-2">Diabetic Feet Syndrome</span>
                            <span className="badge text-bg-danger me-2">Numbness</span>
                            <span className="badge text-bg-danger me-2">Tingling</span>
                            <span className="badge text-bg-danger me-2">Damaged Feet</span>
                        </div>
                        <div className="product_description_border  p-3 py-4">
                            <div className="description_header" onClick={handleFirstContentClick}>
                                <div>WHAT IT IS</div>
                                <div className="text-center"><i className={firstIconClassName}></i></div>
                            </div>
                            <div className={firstContentClassName}>
                                Sambika Feet Kare Oil helps address a variety of common feet issues, especially those related to pain, diabetic foot, numbness, tingling, thickened skin, and burning sensations. It has various herbs that provide relief from core through its anti-inflammatory, pain-relieving and healing properties. This oil offers holistic solution to common foot discomforts, helping restore comfort and mobility.
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={handleSecondContentClick}>
                                <div>INGREDIENTS</div>
                                <div className="text-center"><i className={secondIconClassName}></i></div>
                            </div>
                            <div className={secondContentClassName}>
                                <ul>
                                    <li>Ajwain</li>
                                    <li>Haldi</li>
                                    <li>Til Oil</li>
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
                                    <li> Helps restore comfort and mobility </li>
                                    <li> Reduces sharp, needle-like pain </li>
                                    <li> Supports healing of cracked skin in diabetic foot </li>
                                    <li> Moisturizes thick and dry feet </li>
                                    <li> Reduces Numbness and Tingling </li>
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

export default Feet;