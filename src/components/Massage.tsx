// import "./Joints.css"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fbViewContent, fbAddToCart } from '../utils/fbPixel';
import { ga4ViewItem, ga4AddToCart } from '../utils/ga4Events';

const massageSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "SAMBIKA Massage Oil",
    "image": "https://sambika-healthcare.netlify.app/assets/massage.webp",
    "description": "Ayurvedic massage oil for men's stamina, strength & vitality. Made with Safed Musli, Shilajit, Ashwagandha, Walnut Oil. 100% herbal, no side effects.",
    "brand": { "@type": "Brand", "name": "Sambika Healthcare" },
    "offers": {
        "@type": "Offer",
        "url": "https://sambika-healthcare.netlify.app/massage",
        "priceCurrency": "INR",
        "price": "200",
        "priceValidUntil": "2026-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "63"
    }
};

function Massage()
{
    const [firstContentClassName, setfirstContentClassName] = useState('hide-description');
    const [firstIconClassName, setfirstIconClassName] = useState('fa fa-chevron-down');
    const product = 4;
    const navigate = useNavigate();
    const location = useLocation();
    const isProductRoute = location.pathname === '/massage';

    useEffect(() => {
        if (isProductRoute) {
            fbViewContent('SAMBIKA Massage Oil', 'massage-oil', 200);
            ga4ViewItem('SAMBIKA Massage Oil', 'massage-oil', 200);
        }
    }, [isProductRoute]);

    const handleProductClick = (product: number) => {
        fbAddToCart('SAMBIKA Massage Oil', 'massage-oil', 200);
        ga4AddToCart('SAMBIKA Massage Oil', 'massage-oil', 200);
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
                    <title>SAMBIKA Massage Oil | Ayurvedic Men's Stamina &amp; Vitality Oil | ₹200 | India</title>
                    <meta name="description" content="Ayurvedic massage oil for men's stamina, strength & vitality. Made with Safed Musli, Shilajit, Ashwagandha. 100% herbal, no side effects. Free shipping in India. COD available." />
                    <meta name="keywords" content="ayurvedic massage oil men india, safed musli oil india, ashwagandha massage oil, men stamina oil india, shilajit oil india, sambika massage oil" />
                    <meta property="og:title" content="SAMBIKA Massage Oil | ₹200 | Ayurvedic Men's Stamina Oil" />
                    <meta property="og:description" content="Ayurvedic massage oil for men's stamina & vitality. Made with Safed Musli, Shilajit, Ashwagandha. Free shipping in India." />
                    <meta property="og:image" content="https://sambika-healthcare.netlify.app/assets/massage.webp" />
                    <meta property="og:url" content="https://sambika-healthcare.netlify.app/massage" />
                    <link rel="canonical" href="https://sambika-healthcare.netlify.app/massage" />
                    <script type="application/ld+json">{JSON.stringify(massageSchema)}</script>
                </Helmet>
            )}
            {/* <Helmet>
                <title>Sambika Healthcare</title>
                <meta name="google-site-verification" content="cGude0fySuLxIPTuv5xf_HbboB39SvVlDMGpJLxxXOE" />
            </Helmet> */}
            <hr />
            <div className="product_specific_grid" id="Massage">
                <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3 text-center">
                    <div className="product_image_sticky">
                        <img src="/assets/massage.webp" className='product_detail_image_size' loading="lazy"></img>
                        {/* <a href="https://www.1mg.com/otc/sambika-herbal-joints-kare-oil-otc1093111" target="_blank"><div className="buy-btn"><b>Buy Now</b></div></a> */}
                        <div className="buy-btn" onClick={() => handleProductClick(product)}><b>Buy Now</b></div>
                    </div>
                </div>
                <div className="product_description m-3 mt-4">
                    <h3 className="product_heading"><b>SAMBIKA Massage Oil</b></h3>
                    <div className="product_cost px-2">
                        <span><s><span>Rs.</span> 229</s></span>
                        <span className="product_actual_cost ms-2"><span>Rs.</span> 200</span>
                        <span className="product_discount ms-2">-10.00%</span>
                        <div className="product_cost_footer">
                            Tax included. Shipping calculated at checkout.
                        </div>
                    </div>
                    <div className="social-proof-badge">
                        <span className="badge-item">⭐ 4.9/5</span>
                        <span className="badge-item">✓ 500+ Happy Customers</span>
                        <span className="badge-item">🚚 Free Shipping</span>
                        <span className="badge-item">🌿 100% Ayurvedic</span>
                    </div>
                    <div className="product_details">
                        <p className="mt-2 px-2">
                            Sambika Massage oil is a powerful formulation that enhances stamina, muscle power, blood circulation, diabetic related low stamina, and overall energy levels for Men.
                        </p>
                        <div className="mb-3 ms-2">
                            <b><i>Indications: </i></b>
                            <span className="badge text-bg-danger me-2">Low Stamina</span>
                            <span className="badge text-bg-danger me-2">Weak Erection</span>
                            <span className="badge text-bg-danger me-2">Less Power & Performance</span>
                            <span className="badge text-bg-danger me-2">Low Sperm Count</span>
                            <span className="badge text-bg-danger me-2">Early Ejaculation</span>
                            <span className="badge text-bg-danger me-2">White discharge in Urine</span>
                            <span className="badge text-bg-danger me-2">Stress related weakness</span>
                            <span className="badge text-bg-danger me-2">Useful for Diabetic people</span>
                        </div>
                        <div className="product_description_border  p-3 py-4">
                            <div className="description_header" onClick={handleFirstContentClick}>
                                <div>WHAT IT IS</div>
                                <div className="text-center"><i className={firstIconClassName}></i></div>
                            </div>
                            <div className={firstContentClassName}>
                                <div>
                                    Sambika Massage Oil is an Ayurvedic herbal formulation specially designed to support men’s stamina, strength, and overall vitality.
                                </div>
                                <div>
                                    It is crafted to help improve blood circulation, muscle power, and energy levels, especially in men experiencing low stamina, performance issues, stress-related weakness, or reduced physical strength.
                                </div>
                                <div>
                                    This therapeutic oil is traditionally used to:
                                </div>
                                <ul>
                                    <li>Support healthy stamina and endurance</li>
                                    <li>Improve muscle strength and performance</li>
                                    <li>Enhance blood circulation</li>
                                    <li>Help manage stress-related fatigue</li>
                                    <li>Support vitality in diabetic individuals</li>
                                    <li>Promote overall male wellness</li>
                                </ul>
                                <div>
                                    Sambika Massage Oil works externally through gentle massage, helping the body absorb its herbal properties and naturally support strength and confidence.
                                </div>
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={handleSecondContentClick}>
                                <div>INGREDIENTS</div>
                                <div className="text-center"><i className={secondIconClassName}></i></div>
                            </div>
                            <div className={secondContentClassName}>
                                <ul>
                                    <li>Safed Musli</li>
                                    <li>Shilajit</li>
                                    <li>Ashwagandha</li>
                                    <li>Rosemary Oil</li>
                                    <li>Walnut Oil</li>
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
                                    <li> Provides a powerful boost for enhanced strength, performance, and confidence </li>
                                    <li> Supports improvement in sperm count </li>
                                    <li> Helps with recovery from loose erection and low performance concerns </li>
                                    <li> Assists in managing stress-related loss of interest </li>
                                    <li> Supports stronger and firmer erection </li>
                                    <li> Helps control early leakage concerns </li>
                                    <li> Supports muscle strengthening to help manage white discharge issues </li>
                                    <li> Assists in addressing low erection concerns related to diabetic conditions </li>
                                    <li> Helps manage age-related performance issues </li>
                                    <li> Supports recovery from weakness caused by stress and certain lifestyle habits such as excessive mobile use, smoking, alcohol, and tobacco consumption </li>
                                    <li> Promotes thicker, stronger, and harder erection </li>
                                    <li> Provides an overall boost to power, performance, and pleasure with improved stamina </li>
                                    <li> Works by supporting muscle strength, improving blood flow, and enhancing nerve responsiveness </li>
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
                                    <li> Shake well before use</li>
                                    <li> Take sufficient quantity on your hand and apply on private part </li>
                                    <li> Apply externally on upper skin, lower skin and tip </li>
                                    <li> Apply 1 hour before bed </li>
                                </ul>
                            </div>
                        </div>
                            {/* <div>
                                <h3>Benefits </h3>
                                <ul>
                                    <li> Gives energy to Joints for free movement </li>
                                    <li> Supports Tissue and Cartilage rebuilding </li>
                                    <li> Reduce pain and Swelling </li>
                                    <li> Improve mobility and support joint health </li>
                                    <li> Improves blood circulation </li>
                                </ul>
                            </div> */}
                            {/* <div>
                                <h3>Directions for Use</h3>
                                <ul>
                                    <li> Apply sufficient quantity to the affected area</li>
                                    <li> Massage gently until the oil is absorbed </li>
                                    <li> Avoid contact with eyes, if contact occurs wash with plenty of water </li>
                                    <li> Do not apply on broken or irritated skin </li>
                                </ul>
                            </div> */}
                    </div>
                </div>
            </div>
            {/* <h3>Ingredients</h3>
            <div className="ingredients_grid">
                <div>Amba Haldi</div>
                <div>Methi</div>
                <div>Ajwain</div>
                <div>Coconut Oil</div>
                <div>Til Oil</div>
            </div> */}
        </div>
    )
}

export default Massage;