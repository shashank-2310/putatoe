import React from "react";
import { Link } from "react-router-dom";

const Alert = () => {
  return (
    <div
      className="alert sticky-top alert-info alert-dismissible fade show my-0"
      role="alert"
    >
      <h4 className="alert-heading mt-0">Thank you for applying!</h4>
      <p className="my-0">
        We request you to wait patiently. The status of your application will be
        notified to you through your given email. <br /> For further queries
        email us at <Link>careers@putatoe.in</Link>
      </p>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
