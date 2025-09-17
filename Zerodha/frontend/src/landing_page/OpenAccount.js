import React from "react";
import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Open a Zerodha account</h1>
        <p className="lead mb-4">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <Link
          to="/signup"
          className="btn btn-primary btn-lg px-4 py-2"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Sign up Now
        </Link>
      </div>
    </div>
  );
}

export default OpenAccount;
