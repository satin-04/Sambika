import "./Certifications.css";

function Certifications()
{
    return (
        <div>
            <div className="certifications_container m-4">
                <div className="certifications_grid">
                    <div className="product_image_container">
                        <img src="src/assets/ISO_Certified.png" className='certification_image_container'></img>
                    </div>
                    <div className="product_image_container">
                        <img src="src/assets/GMP_Certified.png" className='certification_image_container'></img>
                    </div>
                    <div className="product_image_container">
                        <img src="src/assets/Ayurvedic.png" className='certification_image_container'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications;