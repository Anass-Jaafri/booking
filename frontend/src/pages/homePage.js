import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="hero-text">
                <h1>Welcome to Our Barbershop</h1>
                <p>
                  Experience the best grooming services for clients and barbers.
                  Schedule your appointment now!
                </p>
                <div className="hero-btn">
                  <Link to="/register/client" className="primary-btn">
                    Register as Client
                  </Link>
                  <Link to="/register/barber" className="primary-btn">
                    Register as Barber
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              {/* Hero image */}
              <div className="hero-image">
                <img src="/img/banner/banner.png" alt="Barber Hero" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section spad" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src="/img/service/1.png" alt="Service 1" />
                <h4>Haircut & Shave</h4>
                <p>
                  Get the perfect look with our professional haircut and shave
                  services.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src="/img/service/2.png" alt="Service 2" />
                <h4>Beard Grooming</h4>
                <p>
                  Keep your beard sharp and well-groomed with our expert
                  barbers.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-item">
                <img src="/img/service/3.png" alt="Service 3" />
                <h4>Facial Treatment</h4>
                <p>
                  Relax and rejuvenate with our exclusive facial treatments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container text-center">
          <p>&copy; 2024 Barbershop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
