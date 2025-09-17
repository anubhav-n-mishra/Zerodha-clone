import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            style={{ width: "120px" }}
            alt="Zerodha Logo"
          />
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
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/product">
              Product
            </Link>
            <Link className="nav-link" to="/pricing">
              Pricing
            </Link>
            <Link className="nav-link" to="/support">
              Support
            </Link>
          </div>
          <div className="d-flex">
            <Link className="btn btn-outline-primary me-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary" to="/signup">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
