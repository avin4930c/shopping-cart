import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './landingPage.css';

function LandingPage() {
  return (
    <>
      <Navbar expand="lg" className="bg-secondary px-5">
        <div className="container">
          <Navbar.Brand href="#" className="m-2 my-sm-3 text-light"><h2>Game Inn</h2></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto py-4" style={{minWidth: "20vw"}}>
              <FormControl
                type="search"
                placeholder="Search games"
                className="mx-2 input-lg"
                aria-label="Search"
              />
              <Button variant="outline-primary">Search</Button>
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

      <Carousel slide={false}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
}

export { LandingPage }