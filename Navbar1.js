import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar1.css"; // Add specific CSS for Navbar1 styles

const Navbar1 = () => {

    const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    // Clear any user-related data if necessary
    // Example: localStorage.removeItem("userToken");

    // Navigate to the home page
    navigate("/");
  };
  return (
    <nav className="navbar1">
      <div className="logo-section">
        <img
          src="https://img.freepik.com/premium-vector/travel-logo-holiday-trip-mountain-view-airplane-hot-air-balloon-tour_171487-2438.jpg"
          alt="Logo"
          className="logo-image"
        />
        <span className="title">Tours & Travel System</span>
      </div>
      <div className="nav-links">
        {/* Location Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Location</button>
          <div className="dropdown-content">
            <Link to="/add-location">Add Location</Link>
            <Link to="/view-locations">View Locations</Link>
          </div>
        </div>
        {/* Tour Guide Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Tour Guide</button>
          <div className="dropdown-content">
            <Link to="/add-tour-guide">Add Tour Guide</Link>
            <Link to="/view-tour-guides">View Tour Guides</Link>
          </div>
        </div>
        {/* Transport Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Transport</button>
          <div className="dropdown-content">
            <Link to="/add-transport">Add Transport</Link>
            <Link to="/view-transport">View Transport</Link>
          </div>
        </div>
        {/* Lodge Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Lodge</button>
          <div className="dropdown-content">
            <Link to="/add-lodge">Add Lodge</Link>
            <Link to="/view-lodge">View Lodge</Link>
          </div>
        </div>

        {/* User Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">User</button>
          <div className="dropdown-content">
            <Link to="/view-customers">View Customers</Link>
            <Link to="/register-admin">Register Admin</Link>
          </div>
        </div>

        {/* Tour Bookings Button */}
        <Link to="/tour-bookings" className="nav-link tour-bookings">
          Tour Bookings
        </Link>

        <button className="nav-link logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar1;
