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
    <section className="product-display"></section>
</section>

        </>
    )
}

export { ProductPage }