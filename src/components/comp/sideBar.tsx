function SideBar({ isSideBarActive }: { isSideBarActive: boolean }) {
    return (
        <>
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
        </>
    )
}

export { SideBar }