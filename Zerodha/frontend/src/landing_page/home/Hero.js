import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-12 mb-4">
          <img 
            src="media/images/homeHero.png" 
            alt="Zerodha Trading Platform" 
            className="img-fluid"
            style={{maxWidth: "600px", height: "auto"}}
          />
        </div>
        <h1 className="mt-4 mb-3 display-4 fw-bold text-primary">Invest in everything</h1>
        <p className="lead mb-4">
          Online platform to invest in stocks, derivatives, mutual funds, and
          more
        </p>
        <Link
          to="/signup"
          className="btn btn-primary btn-lg px-4 py-2"
          style={{ width: "200px", margin: "0 auto" }}
        >
          Signup Now
        </Link>
      </div>
    </div>
  );
}

export default Hero;
