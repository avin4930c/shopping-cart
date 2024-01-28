import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import './productPage.css';
import './comp/loadingScreen.css';
import { NavBar } from './comp/navBar';
import { Link } from 'react-router-dom';
import { getApiDetails } from './rawg-Api';
import { apiRequestCategory } from './comp/apiRequestCategory';
import { CartContext } from '../App';
import { priceComp } from './comp/priceComp';

type productPageProps = {
    name: string,
    id: number,
    background_image: string,
    rating: number,
}

type searchDetailsProps = {
    searchTitle: string,
    mainTitle: string,
    year?: number | undefined,
    platform?: string | undefined,
    genre?: string | undefined,
}

function ProductPage() {
    const [category, setCategory] = useState<string>("by-mostPopular");
    const [searchDetails, setSearchDetails] = useState<searchDetailsProps>({ searchTitle: "mostPopular", mainTitle: "Most Popular" });
    const [ordering, setOrdering] = useState<string>("");
    const [data, setData] = useState<productPageProps[]>([]);
    const [isSideBarActive, setIsSideBarActive] = useState<boolean>(false);
    const { cartItems, handleCartItems, isLoading, setIsLoading } = useContext(CartContext);

    const cartItemsID = cartItems?.map((items) => items.id);

    useEffect(() => {
        const storageCategory = sessionStorage.getItem("category");
        const storageOrdering = sessionStorage.getItem("ordering");

        if (!storageCategory) {
            sessionStorage.setItem("category", category);
        }
        else {
            const requestData = apiRequestCategory(storageCategory);
            setCategory(storageCategory);
            setSearchDetails((requestData) || { searchTitle: "mostPopular", mainTitle: "Most Popular" });
        }
        if (!storageOrdering) {
            sessionStorage.setItem("ordering", ordering);
        }
        else {
            setOrdering(storageOrdering);
        }
    }, []);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getApiDetails({ size: 12, searchTitle: searchDetails.searchTitle, searchDetails: searchDetails, ordering: ordering, setIsLoading: setIsLoading });
                setData(response);
            }
            catch (error) {
                console.error("Error getting data", error);
            }
        }
        if (searchDetails.mainTitle) {
            fetchData();
        }
    }, [searchDetails.mainTitle, ordering]);

    useEffect(() => {
        const categoryButtons = document.querySelectorAll(".category-sub-titles");
        categoryButtons.forEach((button1) => {
            button1.classList.remove("title-active");
        });
        document.getElementById(`${category}`)?.classList.add("title-active");
        categoryButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const select = document.getElementById("select-options") as HTMLSelectElement;
                select.value = "Popular";
                setOrdering("mostPopular");
                sessionStorage.setItem("ordering", "mostPopular");

                categoryButtons.forEach((button1) => {
                    button1.classList.remove("title-active");
                });
                button.classList.add("title-active");
                setCategory(button.id);
                sessionStorage.setItem("category", button.id);
                setSearchDetails((apiRequestCategory(button.id)) || { searchTitle: "mostPopular", mainTitle: "Most Popular" });
            });
        });
    }, [category]);

    useEffect(() => {
        const sideBarToggleBtn = document.querySelector(".side-bar-toggle");
        const sideBar = document.querySelector(".side-bar");
        const toggleSideBar = () => {
            setIsSideBarActive(!isSideBarActive);
        }
        const closeSideBar = () => {
            setIsSideBarActive(false);
        }
        sideBarToggleBtn?.addEventListener("click", toggleSideBar);
        sideBar?.addEventListener("click", closeSideBar)

        return () => {
            sideBarToggleBtn?.removeEventListener("click", toggleSideBar);
            sideBar?.removeEventListener("click", closeSideBar);
        };
    }, [isSideBarActive]);

    // useEffect(() => {
    //     const currentActiveButton = document.getElementById(`${category}`);
    //     currentActiveButton?.classList.add("title-active");
    //     console.log(data, "data", category, searchDetails, "Category Details");
    // }, [data])

    return (
        <>
            <NavBar pageName="productPage" />
            <div className="side-bar-toggle"><i className="fa-solid fa-bars"></i></div>
            <section className="product-page-main">
                <section className={isSideBarActive ? "side-bar px-5 side-bar-active" : "side-bar px-5"}>
                    <div className="container">
                        <div className="category-main">
                            <div className="category-title text-start">Categorize By</div>
                            <div id="by-mostPopular" className="category-sub-titles px-2 my-2 text-nowrap">
                                <i className="bi bi-star"></i> Most Popular
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="category-main">
                            <div className="category-title">By Year</div>
                            <div id="by-year-2024" className="category-sub-titles px-2 my-2 text-nowrap">
                                <i className="bi bi-calendar"></i> Best of 2024
                            </div>
                            <div id="by-year-2023" className="category-sub-titles px-2 my-2 text-nowrap">
                                <i className="bi bi-calendar"></i> Best of 2023
                            </div>
                            <div id="by-year-2022" className="category-sub-titles px-2 my-2 text-nowrap">
                                <i className="bi bi-calendar"></i> Best of 2022
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="category-main">
                            <div className="category-title">By Platform</div>
                            <div id="by-platform-windows-1" className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-windows"></i> Windows
                            </div>
                            <div id="by-platform-andriod-8" className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-phone"></i> Android
                            </div>
                            <div id="by-platform-Xbox-3" className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-xbox"></i> Xbox
                            </div>
                            <div id="by-platform-PlayStation-18" className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-playstation"></i> PlayStation
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="category-main">
                            <div className="category-title">By Genres</div>
                            <div id="by-action" className="category-sub-titles px-4 my-2 text-nowrap">
                                <i className="bi bi-controller"></i> Action
                            </div>
                            <div id="by-strategy" className="category-sub-titles px-4 my-2 text-nowrap">
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
                            <h1 style={{ color: "violet" }}>{searchDetails.mainTitle}</h1>
                        </div>
                        <div className="product-main-right">
                            <select id="select-options" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                setOrdering(e.target.selectedOptions[0]?.id);
                                sessionStorage.setItem("ordering", e.target.selectedOptions[0].id);
                            }}>
                                <option id="mostPopular" selected={ordering === "mostPopular"}>Popular</option>
                                <option id="-rating" selected={ordering === "-rating"}>Top Rated</option> {/*change the options*/}
                                <option id="rating" selected={ordering === "rating"}>Least Rated</option>
                                <option>Highest Price</option>
                                <option>Lowest Price</option>
                            </select>
                        </div>
                    </div>
                    <section className="product-container mx-5">
                        <div className={isLoading ? "containter-xxxl d-flex justify-content-center" : "container-xxxl"}>
                            {isLoading ? (<div className="loader"></div>) :
                                (
                                    <>
                                        <div className="row d-flex g-2 gy-4">
                                            {data?.map((item, index) => (
                                                <div key={index} className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
                                                    <Card className="card-product-main">
                                                        <Link to={`/productPage/${item.id}`}>
                                                            <Card.Img loading='lazy' variant="top" src={item.background_image} /> {/*alt = {item.name + "background image"}*/}
                                                        </Link>
                                                        <Card.Body>
                                                            <Link to={`/productPage/${item.id}`}>
                                                                <Card.Title className="product-title">{item.name}</Card.Title>
                                                                <Card.Text className="m-0">{item.rating} / 5</Card.Text>
                                                                <Card.Text className="m-0 mt-1">
                                                                    <span><i className="bi bi-windows mx-1"></i></span>
                                                                    <span><i className="bi bi-playstation mx-1"></i></span>
                                                                    <span><i className="bi bi-xbox mx-1"></i></span>
                                                                    <span><i className="bi bi-phone mx-1"></i></span>
                                                                </Card.Text>
                                                            </Link>
                                                            <Card.Text className="mt-3">
                                                                <div className="price-cart d-flex justify-content-between">
                                                                    <div className="price-left">INR {priceComp(item.id)}</div>
                                                                    <div className={(cartItemsID.includes(item.id)) ? "" : "cart-right"} onClick={() => handleCartItems({ id: item.id, gameName: item.name, image: item.background_image, productURL: `/productPage/${item.id}` })}>{(cartItemsID.includes(item.id)) ? (<i className="bi bi-cart-check bg-warning h4 text-black px-2 rounded"></i>) : (<i className="bi bi-cart"></i>)}</div>
                                                                </div>
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            ))}
                                            {/* <div className="col col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-5" style={{ minWidth: "200px" }}>
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
                                </div> */}
                                        </div></>)}
                        </div>
                    </section>
                </section>
            </section>

        </>
    )
}

export { ProductPage }