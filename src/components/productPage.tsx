import Card from 'react-bootstrap/Card';
import './productPage.css';

function ProductPage() {
    return (
        <>
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
                    <div className="product-main-title d-flex justify-content-between p-5">
                        <div className="product-main-left text-dark">
                            <h1>Most Popular</h1>
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
                        <div className="container-xxxl" style={{border: "2px solid black"}}>
                        <div className="row text-start d-flex justify-content-center">
                            <div className="m-1 col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <Card className="card-product-main">
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title iilaf aiofwj iawfioj </Card.Title>
                                        <Card.Text className="m-0">4.71 / 5</Card.Text>
                                        <Card.Text>
                                            <span><i className="bi bi-windows mx-1"></i></span>
                                            <span><i className="bi bi-playstation mx-1"></i></span>
                                            <span><i className="bi bi-xbox mx-1"></i></span>
                                            <span><i className="bi bi-phone mx-1"></i></span>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="m-2 col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <Card className="card-product-main">
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="m-2 col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <Card className="card-product-main">
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="m-2 col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <Card className="card-product-main">
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="m-2 col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <Card className="card-product-main">
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="m-2 col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <Card className="card-product-main">
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            </div>
                            <div className="m-2 col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                                <Card className="card-product-main">
                                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
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