import React from "react";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import SerivicesHome from "../Services/ServicesHome";
import { Link } from "react-router-dom";
import "../../App.css";

const Home = () => {
  return (
    <>
      <div className="w-100 py-5">
        <Slider />
      </div>
      <hr className="mx-auto home-hr" />

      <div className="container py-5">
        <SerivicesHome />
      </div>
      <hr className="mx-auto home-hr" />

      <div className="container py-5">
        <h1 className="my-2 icon">About us</h1>
        <p className="my-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse officia
          laudantium corporis accusamus odio sit earum harum autem sequi dolore,
          similique reprehenderit eum magni temporibus iste quod expedita.
          Cupiditate expedita delectus facilis accusamus corporis voluptatibus
          adipisci eligendi laboriosam, placeat porro, reiciendis suscipit
          accusantium ratione id officiis doloribus nihil quam maxime
          consequuntur labore non itaque quaerat? Eaque, maxime, ab quod,
          blanditiis eum iusto cum consequuntur quis quae assumenda id quas
          similique labore enim dolorem error ducimus distinctio animi illo
          repudiandae! Ipsum, pariatur eligendi! Labore repellendus a animi
          perspiciatis vitae, consequatur reprehenderit ea optio possimus id
          magni tempore sapiente sit saepe? Voluptatem placeat ullam odio unde
          sunt aspernatur dolorem omnis exercitationem dicta, porro in nulla
          aperiam. Dolores distinctio unde iste libero perferendis ad voluptatem
          dolorum ea? Modi voluptates earum sunt illum labore, neque, minima
          ullam laboriosam aspernatur sed maxime placeat quae est itaque quas
          quisquam, magni doloribus quam atque provident cupiditate facere nisi
          consectetur? Amet nam iure illum, aut aspernatur necessitatibus
          possimus dolore quae quaerat! Quia impedit perspiciatis atque corrupti
          aliquam corporis eius id odit, quisquam facere voluptatem accusamus
          animi? Vitae doloremque expedita, maiores neque incidunt dignissimos
          quidem tempora, at praesentium reiciendis itaque dicta autem corporis
          eum optio odit nostrum amet consectetur? <br /> <br />
        </p>
        <p
          className="my-2 fw-normal"
          style={{ fontFamily: "Roboto San-serif" }}
        >
          For more, please headover to our{" "}
          <Link to="/about" className="home-link">
            About
          </Link>{" "}
          page, or{" "}
          <Link to="/contact" className="home-link">
            reach out to us
          </Link>
          .
        </p>
      </div>
      <hr className="mx-auto home-hr" />
      <div className="container pb-2 pt-5">
        <h1 className="icon my-2">Work with us</h1>
        <p className="my-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          iste sunt asperiores, itaque vel quaerat vero quo voluptates adipisci
          aut totam ratione tenetur dicta? Nemo nulla quaerat soluta dolorem
          voluptas, incidunt sed eos commodi placeat, vero velit quam deserunt
          culpa, dolores aperiam voluptates mollitia quisquam eaque vitae
          repellat ea ratione sunt eum odio? Accusamus accusantium eveniet vel
          numquam ab deserunt, neque cum ratione. Doloremque assumenda vel illum
          consequuntur similique quia ipsam adipisci? Nostrum, voluptatibus
          mollitia minima laborum fugiat autem at maxime voluptatum reiciendis
          consequatur itaque quos tempore sit. Nulla ratione sed quo nesciunt
          perferendis blanditiis suscipit labore. Minus, ratione labore.
        </p>
        <p>
          Head over to our{" "}
          <Link to="/hiring" className="home-link">
            careers page
          </Link>
          .
        </p>
      </div>
      <div className="w-100">
        <Footer />
      </div>
    </>
  );
};

export default Home;
