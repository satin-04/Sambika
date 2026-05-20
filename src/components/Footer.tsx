import "./Footer.css";

function Footer()
{
    return (
        <div>
            <div className="text-center contact_us_text m-3">
                <h4>Contact US</h4>
                <div className="contact_us_grid">
                    <div>
                        <div>
                            <b className="address_title">Registered Office: </b> <br />
                            Sambika Healthcare <br />
                            Shop Number 5 <br />
                            Rizvi Chambers <br />
                            Hill Road <br />
                            Bandra West <br />
                            Mumbai, Maharashtra 400050 <br /> <br />
                        </div>
                        <div>
                            <b className="address_title">Email: </b> <br />
                            sambikahealthcare@gmail.com <br /> <br />
                        </div>
                        <div>
                            <b className="address_title">Contact Number: </b> <br />
                            +91 8097-931-971
                        </div>
                    </div>
                </div>

                <div className="social-links mt-3">
                    <a href="https://www.instagram.com/sambikahealthcare" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Follow us on Instagram">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://www.facebook.com/61575020845357/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Like us on Facebook">
                        <i className="fa fa-facebook-square"></i>
                    </a>
                </div>

                <div className="footer-policy mt-2">
                    <a href="/policy" className="policy-link">Shipping Policy</a>
                </div>
            </div>
            <div className="container" id="ContactUs">
                <div className="text-center shadow p-3 mb-5 bg-body rounded m-3">
                    <img src="/assets/family.webp" className='family_image' loading="lazy"></img>
                </div>
            </div>
            <div className="footer_text">
                <b> Make Life Worth Living</b>
            </div>
        </div>
    )
}

export default Footer;