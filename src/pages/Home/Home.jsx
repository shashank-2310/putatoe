import React from "react";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import SerivicesHome from "../Services/ServicesHome";

const Home = () => {
  return (
    <>
      <div className="w-100">
        <Slider />
      </div>
      <div className="app-h container">
        <SerivicesHome />
      </div>
      <div className="w-100">
        <Footer />
      </div>
    </>
  );
};

export default Home;
