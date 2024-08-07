import { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Carousel from 'react-bootstrap/Carousel';
import './productDetailPage.css';
import '../comp/loadingScreen.css';
import { NavBar } from '../comp/navBar';
import { Link, useParams } from 'react-router-dom';
import { getApiDetails } from '../api/rawg-Api';
import parse from 'html-react-parser';
import { CartContext } from '../../App';
import { priceComp } from '../comp/priceComp';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToastComp from '../comp/ToastComp';

type apiDataProps = {
    id: number,
    name: string,
    description: string,
    background_image: string,
    website: string,
    rating: number,
    released: string,
    developers: [{ name: string; }],
    results: [{ image: string; }],
}

function ProductDetailPage() {
    const [data, setData] = useState<apiDataProps>();
    const [screenshots, setScreenshots] = useState<apiDataProps>();
    const { productId } = useParams();
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
    const { user, cartItems, handleCartItems, isLoading } = useContext(CartContext);
    const cartItemsId = cartItems?.map((items) => items.id);
    const price = priceComp(data?.id!);

    useEffect(() => {
        async function fetchData() {
            try {
                const apiData = await getApiDetails({ id: Number(productId) });
                const screenshotsData = await getApiDetails({ id: Number(productId), searchTitle: "screenshots" });
                setData(apiData);
                setScreenshots(screenshotsData);
            } catch (error) {
                console.error('Error getting data', error);
            }
        }

        fetchData();
    }, [productId]);

    const handleAddToCart = () => {
        if (user) {
            handleCartItems({ id: data?.id, gameName: data?.name, image: data?.background_image, price: price, productURL: `/productPage/${data?.id}`});
        } else {
            showToast();
        }
    };

    const showToast = () => {
        setShow(true);
        setTimeout(() => {
            setShow(false);
        }, 2500);
    };

    return (
        <>
            <NavBar pageName="productDetailPage" />
            <ToastComp show={show} setShow={setShow} />
            <section className="product-details px-5">
                <div className="navBar-product text-white d-flex justify-content-between align-items-center px-3">
                    <div className="navBar-left me-1" style={{ fontSize: "max(20px, 1.4vw)" }}>
                        <Link to="/productPage"><i className="bi bi-arrow-left px-1"></i> Store</Link>
                    </div>
                    <div className="navBar-right text-end" style={{ fontSize: "max(24px, 2vw)" }}>{data?.name}</div>
                </div>
                <section className="product-details-main">
                    {isLoading ? (
                        <div className="loader"></div>
                    ) : (
                        <>
                            <div className="product-details-carousel">
                                <Carousel>
                                    {screenshots?.results.map((result, index) => (
                                        <Carousel.Item key={index} interval={2000}>
                                            <img src={result.image} alt="" />
                                        </Carousel.Item>
                                    ))}
                                </Carousel>
                            </div>
                        </>
                    )}
                    <div className="product-details-right">
                        <div className="product-info-container">
                            <motion.div initial={{ x: 200 }} animate={{ x: 0 }} transition={{ type: "tween", duration: 1 }}>
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
                                            <p className='p-0 m-0'>Website: <a href={data?.website} target='_blank'>{data?.website || "Not Available"}</a></p>
                                            <p className="p-0 m-0">Rating: {data?.rating} / 5</p>
                                            <p className="p-0 m-0">Released: {data?.released || "Not Available"}</p>
                                            <p className="p-0 m-0">Developer: {data?.developers[0]?.name || "Not Available"}</p>
                                        </div>
                                    </Collapse>
                                </div>
                            </motion.div>
                        </div>
                        <div className="product-price-cart text-white d-flex justify-content-between align-items-center p-4">
                            <div className="product-price h4 text-dark">INR {price}</div>
                            <button className="product-cart btn btn-primary" onClick={handleAddToCart}>
                                {cartItemsId.includes(data?.id) ? (
                                    <i className="bi bi-cart-check bg-primary text-black h3 px-1 m-2 rounded"></i>
                                ) : (
                                    <>{"Add to Cart"} <i className="bi bi-cart"></i></>
                                )}
                            </button>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export { ProductDetailPage };
