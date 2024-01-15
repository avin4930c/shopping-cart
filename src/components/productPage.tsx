import Card from 'react-bootstrap/Card';
import './productPage.css';
import { NavBar } from './comp/navBar';
import { Link } from 'react-router-dom';

function ProductPage() {
    return (
        <>
        <NavBar pageName="productPage" />
            <section className="product-page-main">
                <section className="side-bar px-5">
                    <div className="container">
                        <div className="category-main">
                            <div className="category-title text-start">Categorize By</div>
                            <div className="category-sub-titles px-2 my-2 text-nowrap">
                                <i className="bi bi-star"></i> Most Popular
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="category-main">
                            <div className="category-title">By Year</div>
                            <div className="category-sub-titles title-active px-2 my-2 text-nowrap">
                                <i className="bi bi-calendar"></i> Best of 2024
                            </div>
                            <div className="category-sub-titles px-2 my-2 text-nowrap">
                                <i className="bi bi-calendar"></i> Best of 2023
                            </div>
                            <div className="category-sub-titles px-2 my-2 text-nowrap">
                                <i className="bi bi-calendar"></i> Best of 2022
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="category-main">
                            <div className="category-title">By Platform</div>
                            <div className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-windows"></i> Windows
                            </div>
                            <div className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-phone"></i> Android
                            </div>
                            <div className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-xbox"></i> Xbox
                            </div>
                            <div className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-playstation"></i> PlayStation
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="category-main">
                            <div className="category-title">By Genres</div>
                            <div className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-controller"></i> Action
                            </div>
                            <div className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-controller"></i> Strategy
                            </div>
                            <div className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-controller"></i> Action
                            </div>
                        </div>
                    </div>
                </section>
                <section className="product-display">
                    <div className="product-main-title d-flex justify-content-between py-3 pt-5 px-5">
                        <div className="product-main-left">
                            <h1 style={{ color: "violet" }}>Most Popular</h1>
                        </div>
                        <div className="product-main-right">
                            <select>
                                <option>Top Rated</option>
                                <option>Least Rated</option>
                                <option>Highest Price</option>
                                <option>Lowest Price</option>
                            </select>
                        </div>
                    </div>
                    <section className="product-container mx-5">
                        <div className="container-xxxl">
                            <div className="row d-flex justify-content-center g-2 gy-4">
                                <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                    <Card className="card-product-main">
                                        <Link to="/productPage/hello">
                                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                        <Card.Body>
                                            <Card.Title className="product-title">Elden Ring</Card.Title>
                                            <Card.Text className="m-0">4.71 / 5</Card.Text>
                                            <Card.Text className="m-0 mt-1">
                                                <span><i className="bi bi-windows mx-1"></i></span>
                                                <span><i className="bi bi-playstation mx-1"></i></span>
                                                <span><i className="bi bi-xbox mx-1"></i></span>
                                                <span><i className="bi bi-phone mx-1"></i></span>
                                            </Card.Text>
                                            <Card.Text className="mt-3">
                                                <div className="price-cart d-flex justify-content-between">
                                                    <div className="price-left">INR 5000</div>
                                                    <div className="cart-right"><i className="bi bi-cart"></i></div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                        </Link>
                                    </Card>
                                </div>
                                <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                    <Card className="card-product-main">
                                        <Card.Img style={{ maxHeight: "400px" }} variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                        <Card.Body>
                                            <Card.Title className="product-title">Elden Ring</Card.Title>
                                            <Card.Text className="m-0">4.71 / 5</Card.Text>
                                            <Card.Text className="m-0 mt-1">
                                                <span><i className="bi bi-windows mx-1"></i></span>
                                                <span><i className="bi bi-playstation mx-1"></i></span>
                                                <span><i className="bi bi-xbox mx-1"></i></span>
                                                <span><i className="bi bi-phone mx-1"></i></span>
                                            </Card.Text>
                                            <Card.Text className="mt-3">
                                                <div className="price-cart d-flex justify-content-between">
                                                    <div className="price-left">INR 5000</div>
                                                    <div className="cart-right"><i className="bi bi-cart"></i></div>
                                                </div>
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                    <Card className="card-product-main">
                                        <Card.Img style={{ maxHeight: "400px" }} variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                        <Card.Body>
                                            <Card.Title className="product-title">Elden Ring</Card.Title>
                                            <Card.Text className="m-0">4.71 / 5</Card.Text>
                                            <Card.Text className="m-0 mt-1">
                                                <span><i className="bi bi-windows mx-1"></i></span>
                                                <span><i className="bi bi-playstation mx-1"></i></span>
                                                <span><i className="bi bi-xbox mx-1"></i></span>
                                                <span><i className="bi bi-phone mx-1"></i></span>
                                            </Card.Text>
                                            <Card.Text className="mt-3">
                                                <div className="price-cart d-flex justify-content-between">
                                                    <div className="price-left">INR 5000</div>
                                                    <div className="cart-right"><i className="bi bi-cart"></i></div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                    <Card className="card-product-main">
                                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                        <Card.Body>
                                            <Card.Title className="product-title">Elden Ring</Card.Title>
                                            <Card.Text className="m-0">4.71 / 5</Card.Text>
                                            <Card.Text className="m-0 mt-1">
                                                <span><i className="bi bi-windows mx-1"></i></span>
                                                <span><i className="bi bi-playstation mx-1"></i></span>
                                                <span><i className="bi bi-xbox mx-1"></i></span>
                                                <span><i className="bi bi-phone mx-1"></i></span>
                                            </Card.Text>
                                            <Card.Text className="mt-3">
                                                <div className="price-cart d-flex justify-content-between">
                                                    <div className="price-left">INR 5000</div>
                                                    <div className="cart-right"><i className="bi bi-cart"></i></div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                    <Card className="card-product-main">
                                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                        <Card.Body>
                                            <Card.Title className="product-title">Elden Ring</Card.Title>
                                            <Card.Text className="m-0">4.71 / 5</Card.Text>
                                            <Card.Text className="m-0 mt-1">
                                                <span><i className="bi bi-windows mx-1"></i></span>
                                                <span><i className="bi bi-playstation mx-1"></i></span>
                                                <span><i className="bi bi-xbox mx-1"></i></span>
                                                <span><i className="bi bi-phone mx-1"></i></span>
                                            </Card.Text>
                                            <Card.Text className="mt-3">
                                                <div className="price-cart d-flex justify-content-between">
                                                    <div className="price-left">INR 5000</div>
                                                    <div className="cart-right"><i className="bi bi-cart"></i></div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                    <Card className="card-product-main">
                                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                        <Card.Body>
                                            <Card.Title className="product-title">Elden Ring</Card.Title>
                                            <Card.Text className="m-0">4.71 / 5</Card.Text>
                                            <Card.Text className="m-0 mt-1">
                                                <span><i className="bi bi-windows mx-1"></i></span>
                                                <span><i className="bi bi-playstation mx-1"></i></span>
                                                <span><i className="bi bi-xbox mx-1"></i></span>
                                                <span><i className="bi bi-phone mx-1"></i></span>
                                            </Card.Text>
                                            <Card.Text className="mt-3">
                                                <div className="price-cart d-flex justify-content-between">
                                                    <div className="price-left">INR 5000</div>
                                                    <div className="cart-right"><i className="bi bi-cart"></i></div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                    <Card className="card-product-main">
                                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                        <Card.Body>
                                            <Card.Title className="product-title">Elden Ring</Card.Title>
                                            <Card.Text className="m-0">4.71 / 5</Card.Text>
                                            <Card.Text className="m-0 mt-1">
                                                <span><i className="bi bi-windows mx-1"></i></span>
                                                <span><i className="bi bi-playstation mx-1"></i></span>
                                                <span><i className="bi bi-xbox mx-1"></i></span>
                                                <span><i className="bi bi-phone mx-1"></i></span>
                                            </Card.Text>
                                            <Card.Text className="mt-3">
                                                <div className="price-cart d-flex justify-content-between">
                                                    <div className="price-left">INR 5000</div>
                                                    <div className="cart-right"><i className="bi bi-cart"></i></div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                    <Card className="card-product-main">
                                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                        <Card.Body>
                                            <Card.Title className="product-title">Elden Ring</Card.Title>
                                            <Card.Text className="m-0">4.71 / 5</Card.Text>
                                            <Card.Text className="m-0 mt-1">
                                                <span><i className="bi bi-windows mx-1"></i></span>
                                                <span><i className="bi bi-playstation mx-1"></i></span>
                                                <span><i className="bi bi-xbox mx-1"></i></span>
                                                <span><i className="bi bi-phone mx-1"></i></span>
                                            </Card.Text>
                                            <Card.Text className="mt-3">
                                                <div className="price-cart d-flex justify-content-between">
                                                    <div className="price-left">INR 5000</div>
                                                    <div className="cart-right"><i className="bi bi-cart"></i></div>
                                                </div>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </section>

        </>
    )
}

export { ProductPage }