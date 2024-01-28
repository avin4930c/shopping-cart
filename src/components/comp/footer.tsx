function Footer() {
  return (
    <>
      <footer id="about-us" className="text-center text-lg-start text-dark" style={{ color: "var(--secondary-color)", backgroundColor: "var(--secondary-color)", paddingBottom: "20vh" }}>
        <section className="d-flex justify-content-between p-4 text-white" style={{ color: "var(--secondary-color)", backgroundColor: "var(--primary-color)" }}>
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a href="#" className="text-white me-4"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-white me-4"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-white me-4"><i className="bi bi-google"></i></a>
            <a href="#" className="text-white me-4"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white me-4"><i className="bi bi-linkedin"></i></a>
            <a href="#" className="text-white me-4"><i className="bi bi-github"></i></a>
          </div>
        </section>

        <section className="py-5" style={{ fontWeight: 500 }}>
          <div className="container text-center text-dark text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4" style={{ fontSize: "18px", fontWeight: 600 }}>
                <h6 className="text-uppercase fw-bold">Game Inn</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "var(--primary-color)", height: "5px" }} />
                <p>Game Inn is your one-stop destination for online game shopping. Dive into a world of gaming diversity with our carefully curated selection, featuring the latest titles and timeless classics. Enjoy secure transactions, competitive prices, and swift deliveries. Level up your gaming experience with Game Inn - where passion meets play.</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "var(--primary-color)", height: "5px" }} />
                <p><a href="#!" className="text-dark">Your Account</a></p>
                <p><a href="#!" className="text-dark">Product Specifications</a></p>
                <p><a href="#!" className="text-dark">Shipping Rates</a></p>
                <p><a href="#!" className="text-dark">Help</a></p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "var(--primary-color)", height: "5px" }} />
                <p><a href="#!" className="text-dark">Action Games</a></p>
                <p><a href="#!" className="text-dark">Adventure Games</a></p>
                <p><a href="#!" className="text-dark">Racing Games</a></p>
                <p><a href="#!" className="text-dark">Simulation Games</a></p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "var(--primary-color)", height: "5px" }} />
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", fontSize: "18px", fontWeight: "600" }}>
          <a className="text-dark" href="https://github.com/avin4930c" target="_blank">Developed by <i className="bi bi-github"></i> avin4930c</a>
        </div>
      </footer>
    </>
  )
}

export { Footer }