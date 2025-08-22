import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegister) {
      // Later you can add API call for registration
      alert("Registered successfully! Please login now.");
      setIsRegister(false);
    } else {
      // Later you can add API call for login
      navigate("/tickets"); // ✅ go to tickets page
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1 className="login-title">SmartDesk</h1>
        <p className="login-subtitle">
          {isRegister ? "Create your account" : "Welcome Back 👋"}
        </p>

        <form className="login-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
              />
            </div>
          )}

          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              className="form-input"
              defaultValue={!isRegister ? "admin@example.com" : ""}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              className="form-input"
              defaultValue={!isRegister ? "••••••••" : ""}
            />
          </div>

          {isRegister && (
            <div className="form-group">
              <input
                type="password"
                placeholder="Confirm Password"
                className="form-input"
              />
            </div>
          )}

          <button type="submit" className="login-btn">
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p
          className="toggle-link"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>

        {!isRegister && (
          <p className="forgot-password">Forgot Password?</p>
        )}

        <footer className="login-footer">
          © 2025 SmartDesk. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
