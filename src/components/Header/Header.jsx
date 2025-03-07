"use client"

import { useState } from "react"
import "./Header.css"
import logo from "../../assets/logo.png"

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("")

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
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
            <li>
              <a href="#">My Events</a>
            </li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button className="login-button">Login</button>
        </div>
      </div>
    </header>
  )
}

export default Header

