import Carousel from 'react-bootstrap/Carousel';
import './productDetailPage.css';

function ProductDetailPage() {
    return (
        <>
            <section className="product-details px-5">
                <div className="navBar-product bg-dark text-white d-flex justify-content-between align-items-center px-3">
                    <div className="navBar-left" style={{fontSize: "24px"}}><i className="bi bi-arrow"></i>Store</div>
                    <div className="navBar-right" style={{fontSize: "48px"}}>Elden Ring</div>
                </div>
                <section className="product-details-main">
                    <div className="product-details-carousel">
                        <Carousel>
                            <Carousel.Item interval={1000}>
                                <img src="src\assets\cropped-7b341ce30f442716773f605a7c45c064 (1).jpg" alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={5000}>
                                <img src="https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?c=16x9&q=h_833,w_1480,c_fill" alt="" />
                            </Carousel.Item>
                            <Carousel.Item interval={3000}>
                                <img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" />
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="product-details-right">
                        <div className="product-info-main px-4 text-white">
                            <div className="product-info-title py-2">About</div>
                            <div className="product-info-details py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsam numquam necessitatibus dolorem possimus sunt beatae voluptatibus saepe est officiis.</div>
                        </div>
                        <div className="product-price-cart text-white d-flex justify-content-between p-4">
                            <div className="product-price">INR 5000</div>
                            <div className="product-cart">Add to cart</div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export { ProductDetailPage }