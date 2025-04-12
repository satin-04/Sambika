import './Products.css'

function Products() {
    return ( 
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
    )
}

export default Products;