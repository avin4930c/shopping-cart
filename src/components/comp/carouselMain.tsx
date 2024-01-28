import Carousel from 'react-bootstrap/Carousel';
function CarouselMain() {
    return (
        <>
            <section id="carousel-main-id" className="justify-content-center align-items-center carousel-main text-dark">
                <div className="-info">
                    <Carousel>
                        <Carousel.Item interval={3000}>
                            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjpt82gS8apKb0ap_q8Kd8YShr6hmkh1_x1XmuLvIhdgqc7SnKa1l_Y-SxYeN3Oz7c8QMR1p9QAp_VvB22DoB22Yz3wJnLI23kJxWHL3hR8QoqWyuSxWcDzCZLYut-JPiIEliRAFqj1zDLLnM1Kw2eDwUbgJ9RZOIGpPMAwYZk-uCMUw28mVr5J3ywI9g/s3840/horizon-call-of-the-3840x2160-582023.jpg" alt="" />
                            <Carousel.Caption className='text-white'>
                                <h3>Discover Exciting Gaming Adventures!</h3>
                                <p>🎮 Immerse Yourself in the Latest Releases and Must-Have Titles 🚀</p>
                                <button className="btn btn-primary p-2">Explore Now</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?c=16x9&q=h_833,w_1480,c_fill" alt="" />
                            <Carousel.Caption>
                                <h3>Embark on Epic Journeys</h3>
                                <p>Experience Thrilling Adventures in Every Game.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" />
                            <Carousel.Caption>
                                <h3>Dive into Virtual Realms</h3>
                                <p>Explore Stunning Landscapes and Unleash Your Imagination.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src="https://images2.alphacoders.com/985/985249.png" alt="" />
                            <Carousel.Caption>
                                <h3>Upgrade Your Gaming Setup</h3>
                                <p>🎮 Elevate Your Experience with the Latest Gear and Accessories 🕹️</p>
                                <button className="btn btn-primary p-2">Shop Now</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export { CarouselMain }