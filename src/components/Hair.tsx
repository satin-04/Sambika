import "./Hair.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Hair()
{
    const [firstContentClassName, setfirstContentClassName] = useState('hide-description');
    const [firstIconClassName, setfirstIconClassName] = useState('fa fa-chevron-down');
    const product = 3;
    const navigate = useNavigate();

    const handleProductClick = (product: number) => {
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
                        <span className="product_discount ms-2">-20.00%</span>
                        <div className="product_cost_footer">
                            Tax included. Shipping calculated at checkout.
                        </div>
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