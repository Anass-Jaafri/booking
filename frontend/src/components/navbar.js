import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <a href="#services" className="navbar-link">
              Services
            </a>
          </li>
        </ul>
        <ul className="navbar-list right">
          {!isAuthenticated && (
            <li className="navbar-item">
              <Link to="/login" className="navbar-link">
                Login
              </Link>
            </li>
          )}
          {isAuthenticated && (
            <>
              <li className="navbar-item">
                <Link to="/profile" className="navbar-link">
                  Profile
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/book-appointment" className="navbar-link">
                  Book Appointment
                </Link>
              </li>
              <li className="navbar-item">
                <button onClick={onLogout} className="navbar-btn">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
