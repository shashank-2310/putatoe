import React from "react";
import "../../App.css"
import { Link } from 'react-router-dom'

const ServicesHome = () => {
  return (
      <div
        class="container text-center my-2 bg-dark py-2"
        style={{ borderRadius: "20px" }}
      >
        <h1 className="my-1">Services</h1>
        <hr />
        <div class="row row-cols-2">
          <div class="col my-2">
            <table class="table" style={{color: "white"}}>
              <h4><i class="fa-solid fa-bag-shopping icon"></i> Daily needs</h4>
                <th className="row fw-normal"><td><i class="fa-solid fa-cart-shopping icon"></i>Grocery</td></th>
                <th className="row fw-normal"><td><i class="fa-sharp fa-solid fa-cow icon"></i>Dairy store</td></th>
                <th className="row fw-normal"><td><i class="fa-solid fa-bottle-water icon"></i>Retail water supply</td></th>
            </table>
          </div>
          <div class="col my-2">
              <table class="table" style={{color: "white"}}>
                <h4><i class="fa-solid fa-briefcase-medical icon"></i> Health</h4>
                <th className="row fw-normal"><td><i class="fa-solid fa-pills icon"></i>Chemist</td></th>
                <th className="row fw-normal"><td><i class="fa-sharp fa-solid fa-stethoscope icon"></i>Physian</td></th>
                <th className="row fw-normal"><td><i class="fa-solid fa-truck-medical icon"></i>Ambulance</td></th>
              </table>
          </div>
          
          {/* icon bug */}
          <div class="col my-2">
              <table class="table" style={{color: "white"}}>
                <h4><i class="fa-solid fa-home icon"></i> House Maintenance</h4>
                <th className="row fw-normal"><td><i class="fa-solid fa-hammer icon"></i>Hardware</td></th>
                <th className="row fw-normal"><td><i class="fa-sharp fa-solid fa-plug icon"></i>ELectrician</td></th>
                <th className="row fw-normal"><td><i class="fa-solid fa-pipe icon"></i>Plumber</td></th>
              </table>
          </div>

          {/* Last section TODO */}
          <div class="col my-2">
              <table class="table" style={{color: "white"}}>
                <h4><i class="fa-solid fa-potato icon"></i> Extras</h4>
                <th className="row fw-normal"><td><i class="fa-sharp fa-solid fa-potato icon"></i>Chemist</td></th>
                <th className="row fw-normal"><td>Physian</td></th>
                <th className="row fw-normal"><td>Ambulance</td></th>
              </table>
          </div>
        </div>
          <div className="my-2">
            <Link to="/services" role="button" className="my-3 btn btn-outline-primary mx-auto d-grid gap-2 col-6">View more...</Link>
          </div>
      </div>
  );
};

export default ServicesHome;
