import "./Certifications.css";

function Certifications()
{
    return (
        <div>
            <div className="certifications_container m-4">
                <div className="certifications_grid">
                    <div className="product_image_container">
                        <img src="/assets/ISO_Certified.webp" className='certification_image_container' loading="lazy"></img>
                    </div>
                    <div className="product_image_container">
                        <img src="/assets/GMP_Certified.webp" className='certification_image_container' loading="lazy"></img>
                    </div>
                    <div className="product_image_container">
                        <img src="/assets/Ayurvedic.webp" className='certification_image_container' loading="lazy"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certifications;