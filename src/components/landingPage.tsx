import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { Footer } from './comp/footer';
import './landingPage.css';

function LandingPage() {
  return (
    <>
      <Navbar expand="lg" className="-secondary px-5 fixed-top navBar">
        <div className="container">
          <Navbar.Brand href="#" className="p-2 text-light"><h2>Game <span style={{color: "var(--secondary-color)"}}>Inn</span></h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mx-auto nav-form" style={{ minWidth: "20vw" }}>
              <FormControl
                type="search"
                placeholder="Search games"
                className="mx-2"
                aria-label="Search"
              />
              <Button variant="primary" className="search-button">Search</Button>
            </Form>
            <Nav
              className="ms-auto my-2 pe-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#about-us" className="text-light navlink-text mx-2">About Us</Nav.Link>
              <Nav.Link href="#questions" className="text-light navlink-text mx-2">Questions</Nav.Link>
              <Nav.Link href="#store" className="text-light navlink-text mx-2">Store</Nav.Link>
              <Nav.Link href="#cart" className="text-light navlink-text mx-2">Cart <i className="bi bi-cart"></i></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Carousel */}
      <section className="justify-content-center align-items-center carousel-main -primary">
        <div className="-info">
          <Carousel>
            <Carousel.Item interval={1000}>
              <img src="src\assets\cropped-7b341ce30f442716773f605a7c45c064 (1).jpg" alt="" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
            <Carousel.Item interval={1000}>
              <img src="https://assets-prd.ignimgs.com/2023/10/20/bestreviewedgames2023-blogroll-1-1697834842855.jpg" alt="" />
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

      <section className="-info text-light p-5 sign-up-form">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h2 className="mx-2">Signup for Game News</h2>
            <div className="input-group input-group-md news-input" style={{ maxWidth: "400px" }}>
              <input type="text" className="form-control" placeholder="Enter the Email address"
                aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn text--dark" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
      </section>

      <section className="top-games p-3 -primary">
        <header className="top-games-header h2 my-3 mb-3 text-center text-sm-start">Top Games</header>
        <hr className="hr"></hr>
        <div className="row g-4 -primary px-5">
          <div className="col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-5">
            <Card>
              <Card.Img style={{ width: 'auto', height: "min(350px, 40vh)" }} variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-5">
            <Card>
              <Card.Img style={{ width: 'auto', height: "min(350px, 40vh)" }} variant="top" src="https://m.media-amazon.com/images/I/6110RSDn3PL.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </section>

      <section id="questions" className="-info accordion">
        <div className="h2 text-center p-5">Frequently Asked Questions</div>
        <div className="container pb-5">
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