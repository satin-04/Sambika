import './Products.css'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Bounce, ToastContainer, toast } from 'react-toastify';

function Products() {

    const location = useLocation();

    useEffect(() => {
        if(location.state && location.state.showToast) {
            const CustomMessage = () => (
                <div>
                <strong>Your order has been placed!</strong>
                <br /><br />
                You will receive the confirmation within the next 24 hours on your WhatsApp/SMS.
                </div>
            );
            toast.success(<CustomMessage />);
            console.log("toast displaying called");
            window.history.replaceState({}, document.title);
        }
    }, [location]);

    return (
        <div>
            <div className="products_container m-4" id="Products">
                <div className="products_text">
                    <b>
                        <h4>OUR PRODUCTS</h4>
                    </b>
                </div>
                <div className="products_grid">
                    <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3">
                        <a href="#Joints">
                            <div><b>SAMBIKA JOINTS KARE OIL</b></div>
                            <img src="/assets/joints.png" className='product_image_size'></img>
                        </a>
                    </div>
                    <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3">
                        <a href="#Feet">
                            <div><b>SAMBIKA FEET CARE OIL</b></div>
                            <img src="/assets/feet.png" className='product_image_size'></img>
                        </a>
                    </div>
                    <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3">
                        <a href="#Hair">
                            <div><b>SAMBIKA HAIR ROOTS KARE OIL</b></div>
                            <img src="/assets/hair.png" className='product_image_size'></img>
                        </a>
                    </div>
                    {/* <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3">
                        <img src="/assets/massage.png" className='product_image_size'></img>
                        <div><b>Massage Oil</b></div>
                        </div>
                        <div className="product_image_container shadow p-3 mb-5 bg-body rounded m-3">
                        <img src="/assets/varicose.png" className='product_image_size'></img>
                        <div><b>Varicose Oil</b></div>
                        </div> */}
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={10000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    )
}

export default Products;