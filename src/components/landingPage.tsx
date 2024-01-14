import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { Footer } from './comp/footer';
import './landingPage.css';
import { NavBar } from './comp/navBar';

function LandingPage() {
  return (
    <>
    {/* NavBar */}
    <NavBar pageName="landingPage" />

      {/* Carousel */}
      <section className="justify-content-center align-items-center carousel-main -primary">
        <div className="-info">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img src="src\assets\cropped-7b341ce30f442716773f605a7c45c064 (1).jpg" alt="" />
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

      {/* Sign Up form */}
      <section className="-info text-light p-5 sign-up-form">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h2 className="mx-2" style={{color: "var(--primary-color)"}}>Signup for Game News</h2>
            <div className="input-group input-group-md news-input" style={{ maxWidth: "400px", border: "3px solid var(--primary-color)", borderRadius: "10px"}}>
              <input type="text" className="form-control" placeholder="Enter the Email address"
                aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-dark text-light" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Games Section */}
      <section className="top-games p-3 -primary">
        <header className="top-games-header h2 my-3 mb-3 text-center text-sm-start" style={{color: "whitesmoke"}}>Top Games</header>
        <hr className="hr" style={{color: "var(--secondary-color"}}></hr>
        <div className="top-games-container row g-4 -primary px-5">
          <div className="col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <Card className="card-main">
              <Card.Img style={{ width: 'auto', height: 'min(350px, 40vh)', maxHeight: '350px' }} variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                
              </Card.Body>
            </Card>
          </div>
          <div className="col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <Card className="card-main">
              <Card.Img style={{ width: '100%', height: 'min(350px, 40vh', maxHeight: '350px' }} variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
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
      </section>

      <section id="questions" className="text-white accordion">
        <div className="h2 text-center pt-5">Frequently Asked Questions</div>
        <div className="container py-5">
          <Accordion flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

        </div>
      </section>

      <section>
        <Footer />
      </section>




    </>
  );
}

export { LandingPage }