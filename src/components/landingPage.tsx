import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import { Footer } from './comp/footer';
import './landingPage.css';
import { NavBar } from './comp/navBar';
import { getApiDetails } from './rawg-Api';
import { CarouselMain } from './comp/carouselMain';
import { Link } from 'react-router-dom';

type apiDataProps = {
  name: string,
  description: string,
  background_image: string,
}

function LandingPage() {
  const [data, setData] = useState<apiDataProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await getApiDetails({ size: 12 });
        setData(apiData);
        console.log(data);
      }
      catch (error) {
        console.error('Error getting data', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {/* NavBar */}
      <NavBar pageName="landingPage" />

      {/* Carousel */}
      <CarouselMain />

      {/* Sign Up form */}
      <section className="text-light p-5 sign-up-form">
        <div className="container">
          <div className="d-md-flex justify-content-between align-items-center">
            <h2 className="mx-2" style={{ color: "var(--primary-color)" }}>Signup for Game News</h2>
            <div className="input-group input-group-md news-input" style={{ maxWidth: "400px", border: "3px solid var(--primary-color)", borderRadius: "10px" }}>
              <input type="text" className="form-control" placeholder="Enter the Email address"
                aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button className="btn btn-dark text-light" type="button" id="button-addon2">Button</button>
            </div>
          </div>
        </div>
      </section>

      {/* Top Games Section */}
      <section className="top-games p-3 -primary">
        <header className="top-games-header h2 my-3 mb-3 text-center text-sm-start" style={{ color: "whitesmoke" }}>Top Games</header>
        <hr className="hr" style={{ color: "var(--secondary-color" }}></hr>
        <div className="top-games-container row g-4 -primary px-5">

          {data.map((item, index) => (
              <div key={index} className="col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6"><Link to="/productPage/hello">
                <Card className="card-main">
                  <Card.Img style={{ width: 'auto', height: 'min(350px, 40vh)', maxHeight: '350=px' }} variant="top" src={item.background_image} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      {item.description}
                    </Card.Text>
                  </Card.Body>
                </Card></Link>
              </div>
            
          )
          )}
        </div>
      </section>

      <section id="questions" className="text-white accordion p-5">
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