import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple demo login - redirect to dashboard
    if (formData.email && formData.password) {
      // In a real app, you'd validate credentials here
      window.open('http://localhost:3001', '_blank');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body p-5">
              <h2 className="text-center mb-4">Login to Zerodha</h2>
              <p className="text-center text-muted mb-4">
                Access your trading dashboard
              </p>
              
              <form onSubmit={handleSubmit}>
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
                  Login
                </button>
              </form>
              
              <div className="text-center mt-3">
                <small className="text-muted">
                  Don't have an account? <Link to="/signup" className="text-decoration-none">Sign up here</Link>
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;