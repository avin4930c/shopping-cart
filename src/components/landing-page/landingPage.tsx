import { useState, useEffect, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Footer } from '../comp/footer';
import './landingPage.css';
import { NavBar } from '../comp/navBar';
import { getApiDetails } from '../api/rawg-Api';
import { CarouselMain } from '../comp/carouselMain';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import { AccordionMain } from '../comp/accordionMain';
import { motion } from 'framer-motion';
import { FaArrowAltCircleRight } from "react-icons/fa";

type apiDataProps = {
  name: string,
  id: number,
  description: string,
  background_image: string,
}

function LandingPage() {
  const [data, setData] = useState<apiDataProps[]>([]);
  const { isLoading, setIsLoading } = useContext(CartContext);

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100, damping: 10, delay: 0.5 } },
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const apiData = await getApiDetails({ size: 10, setIsLoading: setIsLoading });
        setData(apiData);
      }
      catch (error) {
        console.error('Error getting data', error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <NavBar pageName="landingPage" />

      <CarouselMain />

      {/* Sign Up form */}
      <section className="text-light p-5" style={{backgroundColor: 'var(--secondary-color)'}}>
        <div className="container">
          <motion.div
            className="d-md-flex justify-content-around align-items-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="mx-2"
              style={{ color: "var(--primary-color)" }}
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              Explore Our Products
            </motion.h2>
            <Link to="/productPage">
              <motion.button
                className="btn btn-primary"
                style={{ borderRadius: "10px", padding: "10px 20px", backgroundColor: "var(--primary-color)", border: "none" }}
                initial="hidden"
                animate="visible"
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                View Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Top Games Section */}
      <section className="top-games p-3 -primary">
        <div className="header-main d-flex justify-content-between align-items-center ">
          <header className="top-games-header h2 my-3 mb-3 text-center text-sm-start" style={{ color: "whitesmoke" }}>Top Games</header>
          <header className="text-end h2 btn px-3" style={{ color: "black", backgroundColor: "var(--secondary-color)", fontSize: "18px", fontWeight: "600" }}><Link to="/productPage" >Store</Link></header>
        </div>
        <hr className="hr" style={{ color: "var(--secondary-color" }}></hr>
        <div className="top-games-container row g-4 -primary px-5 d-flex justify-content-center">
          {isLoading ? (<div className='loader'></div>) :
            (
              <>
                {data?.map((item, index) => (
                  <div key={index} className="col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <Link to={`/productPage/${item.id}`}>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "tween", }} >
                        <Card className="card-main">
                          <Card.Img style={{ width: 'auto', height: 'min(350px, 40vh)', maxHeight: '350=px' }} variant="top" src={item.background_image} />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Text>
                              {item.description}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </Link>
                  </div>
                ))}
                <div className="col col-xxl-2 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <Link to={`/productPage`}>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "tween", }} >
                      <Card className="card-main flex justify-content-center m-auto">
                        <FaArrowAltCircleRight className='w-25 h-25 m-auto pt-5' />
                        <Card.Body>
                          <Card.Title className='text-center'>Explore All...</Card.Title>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Link>
                </div>
              </>
            )}
        </div>
      </section >

      <section id="questions" className="text-white accordion p-5">
        <div className="h2 text-center pt-5">Frequently Asked Questions</div>
        <div className="container py-5">
          <AccordionMain />
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export { LandingPage }