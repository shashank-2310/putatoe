import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import Footer from "../../components/Footer/Footer";


const Hiring = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
      navigate("/");
    }, 5000);
  };

  return (
    <>
      <div className="container mt-4">
        {alert && <Alert />}
        <h2 className="justify-content-center d-flex text-uppercase my-1">
          We are Hiring!
        </h2>
        <div className="d-flex mt-4 mb-1 justify-content-center align-items-center">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-auto mr-3">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  id="firstName"
                  aria-describedby="emailHelp"
                  required
                />
              </div>
              <div className="col-auto ml-3">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="lastName"
                  required
                />
              </div>
            </div>
            <div className="my-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="rolesAvailable" className="form-label">
                Roles available
              </label>
              <select
                className="mx-3 my-2"
                name="roles"
                id="roles"
                required
                style={{ borderRadius: "4px" }}
              >
                <option>Select the role</option>
                <option value="Front-end developer">Front-end developer</option>
                <option value="Back-end developer">Back-end developer</option>
                <option value="ReactJs developer">
                  ReactJs developer intern
                </option>
                <option value="HR executive">HR executive</option>
                <option value="Sales analyst">Sales analyst</option>
              </select>
            </div>
            <div className="my-3">
              <label htmlFor="question" className="form-label">
                Why you want to join with us?
              </label>
              <input
                type="text"
                name="question"
                className="form-control"
                id="question"
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="number" className="form-label">
                How much experience you have?
              </label>
              <input
                type="text"
                name="question"
                className="form-control"
                id="question"
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="resume" className="form-label">
                Resume
              </label>
              <input
                type="file"
                name="resume"
                className="form-control"
                id="resume"
                required
              />
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button type="submit" className="mt-2 btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="w-100">
        <Footer />
      </div>
    </>
  );
};

export default Hiring;
