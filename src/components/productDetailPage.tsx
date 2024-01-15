import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Carousel from 'react-bootstrap/Carousel';
import './productDetailPage.css';
import { NavBar } from './comp/navBar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
    const { productId } = useParams();
    const [open, setOpen] = useState(false);
    return (
        <>
        {(productId === "hello") && (
            <>
                <NavBar pageName="productDetailPage" />
                <section className="product-details px-5">
                    <div className="navBar-product text-white d-flex justify-content-between align-items-center px-3">
                        <div className="navBar-left" style={{ fontSize: "24px" }}><Link to="/productPage"><i className="bi bi-arrow-left px-1"></i> Store</Link></div>
                        <div className="navBar-right text-end" style={{ fontSize: "48px" }}>Elden Ring</div>
                    </div>
                    <section className="product-details-main">
                        <div className="product-details-carousel">
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img src="\src\assets\cropped-7b341ce30f442716773f605a7c45c064 (1).jpg" alt="" />
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
                            <div className="product-info-container">
                                <div className="product-info-main px-4">
                                    <div className="product-info-title py-2 h3">About</div>
                                    <div className="product-info-details py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quasi possimus, consequuntur accusantium sint dignissimos corporis explicabo a praesentium voluptate quod eaque? Ad molestiae ullam maiores nobis obcaecati. Quibusdam, qui. Fuga sunt reiciendis nobis blanditiis ex in eligendi deserunt, architecto sit non mollitia sed, unde quam nesciunt esse eos ad, doloremque assumenda! Dolorem iusto illo unde blanditiis quas sit error enim repellat odit vero perferendis, nostrum nihil similique velit incidunt, sint repellendus numquam fuga aliquid hic. Voluptates quod laborum quos hic ad cupiditate aspernatur alias, aliquid iusto suscipit quia quisquam iure laudantium! Eius voluptates quod debitis ipsam impedit tempora deleniti. Odio doloribus magni recusandae accusamus quibusdam consequatur porro repellendus. Voluptate nulla maxime perspiciatis, vero praesentium sapiente vitae voluptas in, aliquid facilis minima explicabo eius quaerat laboriosam expedita porro sunt, exercitationem quo autem iusto quas consectetur placeat dignissimos? Eius ipsa iste, optio dolore accusantium consequatur quaerat minus corporis voluptates amet quam, cumque debitis pariatur ratione quo nobis atque facere perferendis sit. Consequuntur maiores tenetur vel ipsum laboriosam alias molestias saepe numquam ratione aspernatur? Repudiandae reiciendis tempore mollitia cupiditate alias, ratione ea vero perspiciatis dolorem nesciunt! Minima aliquid architecto unde voluptate molestiae totam dolore molestias illo deleniti consequuntur dolorum, aspernatur sapiente nisi.</div>
                                </div>
                                <div className="product-more-info p-3 text-end">
                                    <Button
                                        className='btn btn-dark btn-link text-dark'
                                        onClick={() => setOpen(!open)}
                                        aria-controls="example-collapse-text"
                                        aria-expanded={open}
                                    >
                                        More
                                    </Button>
                                    <Collapse in={open}>
                                        <div id="example-collapse-text" className="text-start">
                                            <p className="pt-2">
                                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                                terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                                labore wes anderson cred nesciunt sapiente ea proident.
                                            </p>
                                        </div>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="product-price-cart text-white d-flex justify-content-between p-4">
                                <div className="product-price">INR 5000</div>
                                <div className="product-cart">Add to cart <i className="bi bi-cart"></i></div>
                            </div>
                        </div>
                    </section>
                </section >
            </>
    )}
    </>
    )
}

export { ProductDetailPage }