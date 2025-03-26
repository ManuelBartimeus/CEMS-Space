import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext"; // Import useUser
import "./LoginPage.css";
import { FaGoogle, FaFacebook, FaEnvelope, FaLock } from "react-icons/fa";
import concertImage from "../../assets/concert-crowd.jpg";
import logo from "../../assets/prime-icons/logo.png";
import { users } from "../../data/users"; // Import the users array

const LoginPage = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useUser(); // Access setLoggedInUser from context

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      setLoggedInUser(user); // Set the logged-in user in context
      alert("Login successful!");
      navigate("/"); // Redirect to the homepage
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-left">
          <div className="logo-container">
            <img src={logo} alt="NovaSyncer Logo" className="logo-image" />
          </div>
          <h3 className="title">Log in to your Account</h3>
          <p className="subtitle">Welcome back! Select method to log in:</p>
          <div className="social-login">
            <button className="social-btn google-btn">
              <FaGoogle /> Google
            </button>
            <button className="social-btn facebook-btn">
              <FaFacebook /> Facebook
            </button>
          </div>
          <span className="separator">or continue with email</span>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="input-field"
                required
              />
            </div>
            <div className="input-group">
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="input-field"
                required
              />
            </div>
            <div className="options">
              <label className="remember-me">
                <input type="checkbox" /> Remember me
              </label>
              <a href="/forgot-password" className="forgot-password">
                Forgot Password?
              </a>
            </div>
            <button type="submit" className="login-btn">Log in</button>
          </form>
          <p className="signup-text">
            Don't have an account?{" "}
            <a href="/signup" className="signup-link">
              Create an account
            </a>
          </p>
        </div>
        <div className="login-right">
          <img src={concertImage} alt="Concert Crowd" className="login-image" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;