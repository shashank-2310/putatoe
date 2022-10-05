import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "../../App.css"


const ContactUs = () => {
  return (
    <>
      <div className="container my-2 app-h">
        <h1 className="mt-5 mb-2">Facing problems?</h1>
        <div className="fs-5">
          <p>Reach out to us at:</p>
          <ul>
            <li className="my-1">
              Email: <Link>help@putatoe.in</Link>
            </li>
            <li>
              Whatsapp support: <Link>+91-1234567890</Link>
            </li>
            <li className="my-1">Call (toll-free): +1800-1234567890</li>
          </ul>
          <br />
          <p>
            For business related queries: email us at:{" "}
            <Link>business@putatoe.in</Link>
          </p>
          <br />
          <p>
            For job related queries, please head over to our{" "}
            <Link to="/hiring">careers page</Link>,
            <br /> or email us at <Link>careers@putatoe.in</Link>{" "}
          </p>
        </div>
      </div>
      <div className="w-100">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
