"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../context/UserContext"; // Import useUser
import "./Header.css";
import logo from "../../../assets/prime-icons/logo.png";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Hook for navigation
  const { loggedInUser, setLoggedInUser } = useUser(); // Access loggedInUser and setLoggedInUser from context

  const handleLogout = () => {
    setLoggedInUser(null); // Clear the logged-in user
    navigate("/"); // Redirect to the homepage
  };

  const handleProfileClick = () => {
    navigate("/aboutme"); // Redirect to the AboutMe screen
  };

  const handleProtectedNavigation = (path) => {
    if (!loggedInUser) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      navigate(path); // Navigate to the intended path
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img className="logo-image" src={logo} alt="CEMS Logo" />
        </div>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for events, venues, cities..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>

        <nav className="nav-links">
          <ul>
            <li>
              <a onClick={() => handleProtectedNavigation("/")}>Explore</a>
            </li>
            <li>
              <a onClick={() => handleProtectedNavigation("/createevent")}>
                Create Event
              </a>
            </li>
            {!loggedInUser && (
              <li>
                <a href="/signup">Sign Up</a>
              </li>
            )}
          </ul>
        </nav>

        <div className="auth-buttons">
          {loggedInUser ? (
            <div className="user-info">
              <div className="user-profile" onClick={handleProfileClick}>
                <FaUserCircle size={24} />
                <span>{loggedInUser.firstName}</span>
              </div>
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button
                className="login-button"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
