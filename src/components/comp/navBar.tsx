import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import './navBar.css';
import { Link } from 'react-router-dom';
import { useState, useContext, useEffect, useRef } from 'react';
import { CartContext } from '../../App';
import { getApiDetails } from '../rawg-Api';

type productPageProps = {
  name: string,
  id: number,
  background_image: string,
  rating: number,
}

function NavBar({ pageName }: { pageName: string }) {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<productPageProps[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLFormElement>(null);

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchFormClick = () => {
    setShowResults(true);
  }

  useEffect(() => {
    console.log(query, "Query");
    console.log(showResults, "Show results");
    async function fetchData() {
      let response = await getApiDetails({ searchTitle: "search", searchDetails: { mainTitle: query } });
      let finalResponse = response.map((item: productPageProps) => {
        return { name: item.name, id: item.id }
      })
      setData(finalResponse);
    }

    if (query) {
      fetchData();
    }
  }, [query]);

  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Navbar expand="lg" className="-secondary px-5 fixed-top navBar" id="navbarMain">
        <div className="container">
          <Navbar.Brand className="p-2 text-light"><Link to="/" onClick={() => window.scroll(0, 0)}><h2>Game <span style={{ color: "var(--secondary-color)" }}>Inn</span></h2></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mx-auto nav-form" ref={searchRef} onClick={handleSearchFormClick} style={{ minWidth: "20vw" }}>
              <FormControl
                type="search"
                placeholder="Search games"
                className="mx-2"
                onChange={handleQueryChange}
                aria-label="Search"
              />
              <Button variant="primary" className="search-button">Search</Button>
              {showResults &&
                (<div className="search-results">
                  {data.length > 0 ? (
                    <ul className="list-group">
                      {data.map((item, index) => (
                        <a href={`/productPage/${item.id}`}><li key={index} className="list-group-item">{item.name}</li></a>
                      ))}
                    </ul>) : (<p style={{ color: "black" }}>No results found</p>)}
                </div>)}
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
              <Link to="/cart"><Nav.Link href="cart" className="text-light navlink-text mx-2">Cart <i className="bi bi-cart"></i>
                <span className="badge ms-2" style={{ backgroundColor: "var(--secondary-color)" }}>{cartItems.length}</span></Nav.Link></Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  )
}

export { NavBar }