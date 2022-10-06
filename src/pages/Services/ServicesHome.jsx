import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const ServicesHome = () => {
  const dowloadUrl =
    "https://play.google.com/store/apps/details?id=com.putatoeapp.application&gl=US";

  return (
    <section className="container text-center my-2 bg-dark py-2 services-box">
      <h1 className="my-1 icon ">Services</h1>
      <hr />
      <div className="row row-cols-2">
        <div className="col my-2">
          <div className="container fw-normal my-3" style={{ color: "white" }}>
            <ul style={{ listStyleType: "none" }}>
              <h3 className="icon">
                <i className="fa-solid fa-bag-shopping"></i> Daily needs
              </h3>
              <li className="mt-3 fs-5 mb-2">
                <i className="fa-solid fa-cart-shopping icon"></i> Grocery
              </li>
              <li className="my-2 fs-5">
                <i className="fa-sharp fa-solid fa-cow icon"></i> Dairy store
              </li>
              <li className="my-2 fs-5">
                <i className="fa-solid fa-bottle-water icon"></i> Retail water
                supply
              </li>
            </ul>
          </div>
        </div>
        <div className="col my-2">
          <div className="container fw-normal my-3" style={{ color: "white" }}>
            <ul style={{ listStyleType: "none" }}>
              <h3 className="icon">
                <i className="fa-solid fa-briefcase-medical"></i> Health
              </h3>
              <li className="mt-3 fs-5 mb-2">
                <i className="fa-solid fa-pills icon"></i> Chemist
              </li>
              <li className="my-2 fs-5">
                <i className="fa-sharp fa-solid fa-stethoscope icon"></i>{" "}
                Physian
              </li>
              <li className="my-2 fs-5">
                <i className="fa-solid fa-truck-medical icon"></i> Ambulance
              </li>
            </ul>
          </div>
        </div>

        <div className="row my-2 w-100">
          <div className="container fw-normal my-3" style={{ color: "white" }}>
            <ul style={{ listStyleType: "none" }}>
              <h3 className="icon">
                <i className="fa-solid fa-home"></i> House Maintenance
              </h3>
              <li>
                <i className="fa-solid fa-hammer icon"></i> Hardware
              </li>
              <li>
                <i className="fa-sharp fa-solid fa-plug icon"></i> Electrician
              </li>
            </ul>
          </div>
          <p className="my-2 mx-3 fs-6">
            We also provide services related to
            <span className="mx-1 icon fw-bolder text-decoration-underline">
              Event management, Gym & fitness, Consultancy, Online coaching &
              Tuitions, etc .
            </span>
            Click on view more to know more about our services.
          </p>
        </div>
      </div>
      <div className="my-2">
        <Link
          to="/services"
          role="button"
          className="my-3 btn btn-outline-warning d-grid gap-2 col-6 d-md-block mx-auto"
        >
          View more...
        </Link>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.open(dowloadUrl);
          }}
          target="_blank"
          className="btn btn-outline-warning d-grid gap-2 col-6 d-md-block mx-auto"
        >
          Download now
        </button>
      </div>
    </section>
  );
};

export default ServicesHome;
