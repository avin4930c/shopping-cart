import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Carousel from 'react-bootstrap/Carousel';
import './productDetailPage.css';
import { NavBar } from './comp/navBar';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getApiDetails } from './rawg-Api';
import parse from 'html-react-parser';

type apiDataProps = {
    name: string,
    description: string,
    background_image: string,
    website: string,
    rating: number,
    released: string,
    developers: [{
        name: string;
    }],
    results: [{
        image: string;
    }],
}

function ProductDetailPage() {
    const [data, setData] = useState<apiDataProps>();
    const [screenshots, setScreenshots] = useState<apiDataProps>();
    const { productId } = useParams();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                const apiData = await getApiDetails({ id: Number(productId) });
                const screenshotsData = await getApiDetails({ id: Number(productId), screenshot: true });
                setData(apiData);
                setScreenshots(screenshotsData);
                console.log(data, "Hello");
            }
            catch (error) {
                console.error('Error getting data', error);
            }
        }

        fetchData();
    }, []);
    return (
        <>
            {(
                <>
                    <NavBar pageName="productDetailPage" />
                    <section className="product-details px-5">
                        <div className="navBar-product text-white d-flex justify-content-between align-items-center px-3">
                            <div className="navBar-left" style={{ fontSize: "24px" }}><Link to="/productPage"><i className="bi bi-arrow-left px-1"></i> Store</Link></div>
                            <div className="navBar-right text-end" style={{ fontSize: "48px" }}>{data?.name}</div>
                        </div>
                        <section className="product-details-main">
                            <div className="product-details-carousel">
                                <Carousel>
                                    {(screenshots?.results.map((result, index) => (
                                        <Carousel.Item key={index} interval={2000}>
                                            <img src={result.image} alt="" />
                                        </Carousel.Item>
                                    )))}
                                </Carousel>
                            </div>
                            <div className="product-details-right">
                                <div className="product-info-container">
                                    <div className="product-info-main px-4">
                                        <div className="product-info-title py-2 h3">About</div>
                                        <div className="product-info-details py-2">{parse(data ? data.description : "")}</div>
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
                                                <p className='p-0 m-0'>Website: <a href={data?.website}>{data?.website}</a></p>
                                                <p className="p-0 m-0">Rating: {data?.rating} / 5</p>
                                                <p className="p-0 m-0">Released: {data?.released}</p>
                                                <p className="p-0 m-0">Developer: {data?.developers[0].name}</p>
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