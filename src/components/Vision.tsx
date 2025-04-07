import './Vision.css'

function Vision() {
    return ( 
        <div className="p-4 vision_container" id="Vision">
            <div className='vision_grid'>
                <div className="vision_text">
                    <b>
                        <h4>Vision</h4>
                        <p>Our vision is to harness the power of Ayurveda to address the root cause of health challenges.</p>
                    </b>
                    <br /><br />
                    <b>
                        <h4>Mission</h4>
                        <p>We focus on wellness by using sustainably sourced ingredients and keeping traditional healing methods.</p>
                    </b>
                </div>
                <div className='text-center my-3    '>
                    <img src="src/assets/company_vision.png" className='vision_image_size'></img>
                </div>
            </div>
        </div>
    )
}

export default Vision;