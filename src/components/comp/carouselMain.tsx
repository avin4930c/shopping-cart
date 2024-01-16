import Carousel from 'react-bootstrap/Carousel';
function CarouselMain() {
    return (
        <>
            <section id="carousel-main-id" className="justify-content-center align-items-center carousel-main">
                <div className="-info">
                    <Carousel>
                        <Carousel.Item interval={1000}>
                            <img src="\src\assets\cropped-7b341ce30f442716773f605a7c45c064 (1).jpg" alt="" />
                            <Carousel.Caption>
                                <h3>Level Up Your Gaming Experience!</h3>
                                <p>🎮 Explore the Latest Releases and Must-Have Titles 🚀</p>
                                <button className="btn btn-primary p-2">Shop Now</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img src="https://media.cnn.com/api/v1/images/stellar/prod/i-stock-1287493837-1.jpg?c=16x9&q=h_833,w_1480,c_fill" alt="" />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={3000}>
                            <img src="https://wallpapers.com/images/hd/gta-5-landscape-art-2a58lbxzfpa0xjg7.jpg" alt="" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>
        </>
    )
}

export { CarouselMain }