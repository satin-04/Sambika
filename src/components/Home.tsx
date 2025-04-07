import './Home.css'

function Home() {
    return (
        <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                <img src="src/assets/Home_Background_Image_1.webp" className="d-block image-size" alt="No IMage" />
                <div className="carousel-caption d-md-block text-light fw-bold carousel-text-alignment">
                    {/* <h5>First slide label</h5> */}
                    <h1 className="text-line-height">Ayurveda offers a holistic approach to health, emphasizing the balance of mind, body, and spirit for overall well-being</h1>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                <img src="src/assets/Home_Background_Image_2.webp" className="d-block image-size" alt="..." />
                <div className="carousel-caption d-md-block text-light fw-bold carousel-text-alignment">
                    {/* <h5>Second slide label</h5> */}
                    <h1 className="text-line-height">We connect ancient ayurvedic research with modern relevance</h1>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                <img src="src/assets/Home_Background_Image_3.webp" className="d-block image-size" alt="..." />
                <div className="carousel-caption d-md-block text-light fw-bold carousel-text-alignment">
                    {/* <h5>Third slide label</h5> */}
                    <h1 className="text-line-height">Goal of Sambika Healthcare is to protect health and address root cause of diseased patients</h1>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    )
}

export default Home;