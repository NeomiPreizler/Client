import React from 'react';

function HomePage() {
  return (
    <div className="container">
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Kidney Donation Website</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Donate</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <section className="jumbotron jumbotron-fluid text-white bg-primary">
          <div className="container">
            <h1 className="display-4">Kidney Donation</h1>
            <p className="lead">Donate your kidney and save a life today</p>
          </div>
        </section>
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
              
                <div className="card mb-4">
                  <img className="card-img-top" src="https://via.placeholder.com/300x200.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Who Can Donate?</h5>
                    <p className="card-text">Find out if you are eligible to donate your kidney and how to get started.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top" src="https://via.placeholder.com/300x200.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Why Donate?</h5>
                    <p className="card-text">Learn about the benefits of kidney donation and how it can change someone's life.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <img className="card-img-top" src="https://via.placeholder.com/300x200.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Donate Now</h5>
                    <p className="card-text">Ready to donate your kidney? Find out how to get started and make a difference.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
     </div>

  )
}
export default HomePage;