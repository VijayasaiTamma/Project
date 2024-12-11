import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Add specific CSS for Navbar

const Navbar = () => {
  const location = useLocation(); // Get the current route

  // Hide the navbar for specific routes (e.g., /dashboard)
  if (location.pathname === "/dashboard") {
    return null;
  }

  return (
    <nav className="navbar">
      <div className="logo-section">
        <img
          src="https://img.freepik.com/premium-vector/travel-logo-holiday-trip-mountain-view-airplane-hot-air-balloon-tour_171487-2438.jpg"
          alt="Logo"
          className="logo-image"
        />
        <span className="title">Tours & Travel System</span>
      </div>
      <div className="nav-links">
        <Link to="/register" className="nav-link">
          Register Customer
        </Link>
        <Link to="/login" className="nav-link">
          Login User
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
