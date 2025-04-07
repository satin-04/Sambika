import "./Footer.css";

function Footer()
{
    return (
        <div>
            <div className="container" id="ContactUs">
                <div className="text-center shadow p-3 mb-5 bg-body rounded m-3">
                    <img src="src/assets/family.jpg" className='family_image'></img>
                </div>
            </div>
            <div className="text-center contact_us_text m-3">
                <h4>Contact US</h4>
                <div className="contact_us_grid">
                    <div>
                        <b className="address_title">Registered Office: </b> <br />
                        Sambika Healthcare <br />
                        Shop Number 5 <br />
                        Rizvi Chambers <br />
                        Hill Road <br />
                        Bandra West <br />
                        Mumbai, Maharashtra 400050 <br />
                    </div>
                    {/* <div>
                        <i className="fa fa-instagram"></i>
                        <i className="fa fa-linkedin"></i>
                    </div> */}

                </div>
            </div>
            <div className="footer_text">
                <b> Make Life Worth Living</b>
            </div>
        </div>
    )
}

export default Footer;