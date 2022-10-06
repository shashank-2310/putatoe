import React from "react";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  let location = useLocation();
  const dowloadUrl =
    "https://play.google.com/store/apps/details?id=com.putatoeapp.application&gl=US";

  return (
    <nav
      className="navbar sticky-top navbar-expand-lg navbar-dark fw-lighter fs-5"
      style={{ backgroundColor: "#100F0F"}}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-capitalize mx-3 fs-4" to="/">
          putatoe
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-5">
              <Link
                className={`nav-link text-capitalize ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                home
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link
                className={`nav-link text-capitalize ${
                  location.pathname === "/services" ? "active" : ""
                }`}
                to="/services"
              >
                services
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link
                className={`nav-link text-capitalize ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                about
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link
                className={`nav-link text-capitalize ${
                  location.pathname === "/contactus" ? "active" : ""
                }`}
                to="contactus"
              >
                contact us
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link
                className={`nav-link text-uppercase ${
                  location.pathname === "/hiring" ? "active" : ""
                }`}
                to="/hiring"
              >
                we are hiring
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.open(dowloadUrl);
              }}
              target="_blank"
              className="btn btn-outline-warning mx-3"
            >
              <i className="fa-brands fa-google-play mx-2"></i>Download now
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
