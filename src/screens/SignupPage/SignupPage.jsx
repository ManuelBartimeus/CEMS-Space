"use client";

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignupPage.css";
import { FaGoogle, FaFacebook, FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import concertImage from "../../assets/concert-mobile.jpg"; // Import the image
import logo from "../../assets/prime-icons/logo.png"; // Import the logo
import { users } from "../../data/users"; // Import the users array
import { useUser } from "../../context/UserContext"; // Import useUser for global state

const SignupPage = () => {
  const navigate = useNavigate();
  const { setLoggedInUser } = useUser(); // Access setLoggedInUser from context

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new user to the users array
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    users.push(newUser); // Add the new user to the shared users array
    setLoggedInUser(newUser); // Log in the user by setting the global state

    alert("Account creation successful!");

    // Redirect to the homepage
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-left">
          <div className="logo-container">
            <img src={logo} alt="NovaSyncer Logo" className="logo-image" />
          </div>
          <h3 className="title">Create Your Account</h3>
          <p className="subtitle">Join us today! Select a method to sign up:</p>
          <div className="social-signup">
            <button className="social-btn google-btn">
              <FaGoogle /> Google
            </button>
            <button className="social-btn facebook-btn">
              <FaFacebook /> Facebook
            </button>
          </div>
          <span className="separator">or sign up with your details</span>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="input-field"
                required
              />
            </div>
            <div className="input-group">
              <FaUser className="icon" />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="input-field"
                required
              />
            </div>
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
              <label className="accept-terms">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  required
                />{" "}
                I accept the{" "}
                <Link to="/terms" className="terms-link">
                  Terms & Conditions
                </Link>
              </label>
            </div>
            <button type="submit" className="signup-btn">
              Sign Up
            </button>
          </form>
          <p className="login-text">
            Already have an account?{" "}
            <Link to="/login" className="login-link">
              Log in
            </Link>
          </p>
        </div>
        <div className="signup-right">
          <img src={concertImage} alt="Concert Mobile" className="signup-image" />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
