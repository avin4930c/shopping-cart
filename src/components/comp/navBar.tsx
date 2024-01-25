import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './navBar.css';
import { Link } from 'react-router-dom';

function NavBar({ pageName }: { pageName: string }) {
  return (
    <>
      <Navbar expand="lg" className="-secondary px-5 fixed-top navBar" id="navbarMain">
        <div className="container">
          <Navbar.Brand className="p-2 text-light"><Link to="/" ><h2>Game <span style={{ color: "var(--secondary-color)" }}>Inn</span></h2></Link></Navbar.Brand>
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
              {(pageName === "landingPage") && (
                <>
                  <Nav.Link href="#about-us" className="text-light navlink-text mx-2">About Us</Nav.Link>
                  <Nav.Link href="#questions" className="text-light navlink-text mx-2">Questions</Nav.Link>
                </>
              )
              } 
              {(pageName === "landingPage") || (
                <>
                  <Link to="/"><Nav.Link href="/" className='text-light navlink-text mx-2'>Home</Nav.Link></Link>
                </>
              )}
              <Link to="/productPage"><Nav.Link href="#store" className="text-light navlink-text mx-2">Store</Nav.Link></Link>
              <Link to="/cart"><Nav.Link href="cart" className="text-light navlink-text mx-2">Cart <i className="bi bi-cart"></i></Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export { NavBar }