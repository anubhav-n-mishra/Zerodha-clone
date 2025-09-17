import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log("Signup data:", formData);
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <img 
                src="media/images/signup.png" 
                alt="Signup" 
                className="img-fluid"
                style={{maxWidth: "100%", height: "auto"}}
              />
            </div>
            <div className="col-md-6">
              <div className="card shadow">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4">Create Your Account</h2>
                  <p className="text-center text-muted mb-4">
                    Join India's largest stock broker
                  </p>
              
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button type="submit" className="btn btn-primary w-100 py-2">
                  Create Account
                </button>
              </form>
              
              <div className="text-center mt-3">
                <small className="text-muted">
                  Already have an account? <Link to="/login" className="text-decoration-none">Login here</Link>
                </small>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
