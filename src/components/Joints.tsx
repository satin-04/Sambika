import "./Joints.css"
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { fbViewContent, fbAddToCart } from '../utils/fbPixel';
import { ga4ViewItem, ga4AddToCart } from '../utils/ga4Events';

const jointSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "SAMBIKA Joints Kare Oil",
    "image": "https://sambika-healthcare.netlify.app/assets/joints.png",
    "description": "100% Ayurvedic oil for joint pain relief. Effective for arthritis, sciatica, spine & knee pain. Made with Amba Haldi, Methi, Ajwain. ISO & GMP certified.",
    "brand": { "@type": "Brand", "name": "Sambika Healthcare" },
    "offers": {
        "@type": "Offer",
        "url": "https://sambika-healthcare.netlify.app/joints",
        "priceCurrency": "INR",
        "price": "450",
        "priceValidUntil": "2026-12-31",
        "itemCondition": "https://schema.org/NewCondition",
        "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "124"
    }
};

function Joints()
{
    const [firstContentClassName, setfirstContentClassName] = useState('hide-description');
    const [firstIconClassName, setfirstIconClassName] = useState('fa fa-chevron-down');
    const product = 1;
    const navigate = useNavigate();
    const location = useLocation();
    const isProductRoute = location.pathname === '/joints';

    useEffect(() => {
        if (isProductRoute) {
            fbViewContent('SAMBIKA Joints Kare Oil', 'joints-kare-oil', 450);
            ga4ViewItem('SAMBIKA Joints Kare Oil', 'joints-kare-oil', 450);
        }
    }, [isProductRoute]);

    const handleProductClick = (product: number) => {
        fbAddToCart('SAMBIKA Joints Kare Oil', 'joints-kare-oil', 450);
        ga4AddToCart('SAMBIKA Joints Kare Oil', 'joints-kare-oil', 450);
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
                    <title>SAMBIKA Joints Kare Oil | Ayurvedic Joint Pain Relief | ₹450 | Buy Online India</title>
                    <meta name="description" content="100% Ayurvedic relief for arthritis, sciatica, knee pain, spine pain & frozen shoulder. Made with Amba Haldi, Methi, Ajwain. ISO & GMP certified. ₹450. Free shipping. COD available." />
                    <meta name="keywords" content="ayurvedic joint pain oil india, arthritis oil india, knee pain relief oil, sciatica oil india, sambika joints kare oil, buy joint pain oil online india" />
                    <meta property="og:title" content="SAMBIKA Joints Kare Oil | ₹450 | Free Shipping India" />
                    <meta property="og:description" content="100% Ayurvedic relief for arthritis, sciatica & knee pain. ISO & GMP certified. Free shipping across India." />
                    <meta property="og:image" content="https://sambika-healthcare.netlify.app/assets/joints.png" />
                    <meta property="og:url" content="https://sambika-healthcare.netlify.app/joints" />
                    <link rel="canonical" href="https://sambika-healthcare.netlify.app/joints" />
                    <script type="application/ld+json">{JSON.stringify(jointSchema)}</script>
                </Helmet>
            )}
            {/* <Helmet>
                <title>Sambika Healthcare</title>
                <meta name="google-site-verification" content="cGude0fySuLxIPTuv5xf_HbboB39SvVlDMGpJLxxXOE" />
            </Helmet> */}
            <hr />
            <div className="product_specific_grid" id="Joints">
                <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3 text-center">
                    <div className="product_image_sticky">
                        <img src="/assets/joints.png" className='product_detail_image_size'></img>
                        {/* <a href="https://www.1mg.com/otc/sambika-herbal-joints-kare-oil-otc1093111" target="_blank"><div className="buy-btn"><b>Buy Now</b></div></a> */}
                        <div className="buy-btn" onClick={() => handleProductClick(product)}><b>Buy Now</b></div>
                    </div>
                </div>
                <div className="product_description m-3 mt-4">
                    <h3 className="product_heading"><b>SAMBIKA Joints Kare Oil</b></h3>
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
                        <span className="badge-item">⭐ 4.9/5</span>
                        <span className="badge-item">✓ 500+ Happy Customers</span>
                        <span className="badge-item">🚚 Free Shipping</span>
                        <span className="badge-item">💊 ISO &amp; GMP Certified</span>
                    </div>
                    <div className="product_details">
                        <p className="mt-2 px-2">
                            Sambika Joints Kare Oil is a powerful blend of natural ingredients that ensures effective pain relief,
                            cartilage and tissue repair and gives energy to joints for free movement.
                        </p>
                        <div className="mb-3 ms-2">
                            <b><i>Indications: </i></b>
                            <span className="badge text-bg-danger me-2">Arthritis</span>
                            <span className="badge text-bg-danger me-2">Sciatica</span>
                            <span className="badge text-bg-danger me-2">Cartilage & Tissue Tare</span>
                            <span className="badge text-bg-danger me-2">Spine & Knee Pain</span>
                            <span className="badge text-bg-danger me-2">Weak Muscles</span>
                        </div>
                        <div className="product_description_border  p-3 py-4">
                            <div className="description_header" onClick={handleFirstContentClick}>
                                <div>WHAT IT IS</div>
                                <div className="text-center"><i className={firstIconClassName}></i></div>
                            </div>
                            <div className={firstContentClassName}>
                                Sambika Joints Kare Oil is a powerful blend of natural ingredients that provides relief from a variety of joints and muscles pain. Whether it's arthritis, sciatica, spine pain, frozen shoulder, or weakness in the legs, this oil targets inflammation, strengthens joints, and improves circulation. The combination of Amba Haldi, Methi, Ajwain, Haldi, Jaiphal, Rai Oil, Coconut Oil, and Till Oil ensures effective pain relief, supports cartilage and tissue repair, and long-term joint health. This oil offers holistic support for anyone dealing with chronic joint pain.
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header" onClick={handleSecondContentClick}>
                                <div>INGREDIENTS</div>
                                <div className="text-center"><i className={secondIconClassName}></i></div>
                            </div>
                            <div className={secondContentClassName}>
                                <ul>
                                    <li>Amba Haldi</li>
                                    <li>Methi</li>
                                    <li>Ajwain</li>
                                    <li>Coconut Oil</li>
                                    <li>Til Oil</li>
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
                                    <li> Gives energy to Joints for free movement </li>
                                    <li> Supports Tissue and Cartilage rebuilding </li>
                                    <li> Reduce pain and Swelling </li>
                                    <li> Improve mobility and support joint health </li>
                                    <li> Improves blood circulation </li>
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

export default Joints;