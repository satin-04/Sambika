import "./Joints.css"
import { useState } from 'react';

function Joints()
{
    const [firstContentClassName, setfirstContentClassName] = useState('hide-description');
    const [firstIconClassName, setfirstIconClassName] = useState('fa fa-chevron-down');
    
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
            <div className="product_specific_grid" id="Joints">
                <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3 text-center">
                    <div className="product_image_sticky">

                        <img src="/assets/joints.png" className='product_detail_image_size'></img>
                        <div className="buy-btn"><b>Buy Now</b></div>
                    </div>
                </div>
                <div className="product_description m-3 mt-4">
                    <h3 className="product_heading"><b>SAMBIKA Joints Kare Oil</b></h3>
                    <div className="product_cost px-2">
                        <span><s><span>Rs.</span> 499</s></span>
                        <span className="product_actual_cost ms-2"><span>Rs.</span> 450</span>
                        <span className="product_discount ms-2">-9.82%</span>
                        <div className="product_cost_footer">
                            Tax included. Shipping calculated at checkout.
                        </div>
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
                            <span className="badge text-bg-danger me-2">Weal Muscles</span>
                        </div>
                        <div className="product_description_border  p-3 py-4">
                            <div className="description_header">
                                <div>WHAT IT IS</div>
                                <div onClick={handleFirstContentClick} className="text-center"><i className={firstIconClassName}></i></div>
                            </div>
                            <div className={firstContentClassName}>
                                Sambika Joints Kare Oil is a powerful blend of natural ingredients that provides relief from a variety of joints and muscles pain. Whether it's arthritis, sciatica, spine pain, frozen shoulder, or weakness in the legs, this oil targets inflammation, strengthens joints, and improves circulation. The combination of Amba Haldi, Methi, Ajwain, Haldi, Jaiphal, Rai Oil, Coconut Oil, and Till Oil ensures effective pain relief, supports cartilage and tissue repair, and long-term joint health. This oil offers holistic support for anyone dealing with chronic joint pain.
                            </div>
                        </div>

                        <div className="product_description_border_bottom  p-3 py-4">
                            <div className="description_header">
                                <div>INGREDIENTS</div>
                                <div onClick={handleSecondContentClick} className="text-center"><i className={secondIconClassName}></i></div>
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
                            <div className="description_header">
                                <div>SAMBIKA PROMISE</div>
                                <div onClick={handleThirdContentClick} className="text-center"><i className={thirdIconClassName}></i></div>
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
                            <div className="description_header">
                                <div>BENEFITS</div>
                                <div onClick={handleFourthContentClick} className="text-center"><i className={fourthIconClassName}></i></div>
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
                            <div className="description_header">
                                <div>HOW TO USE</div>
                                <div onClick={handleFifthContentClick} className="text-center"><i className={fifthIconClassName}></i></div>
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