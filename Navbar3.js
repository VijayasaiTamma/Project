import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar2.css";

const Navbar3 = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear user session data if stored
        localStorage.clear();
        navigate("/"); // Redirect to homepage
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
            <ul className="nav-links">
    <li>
        <Link to="/event-dashboard" className="nav-link tour-bookings">
            Event Booking
        </Link>
    </li>
    <li>
        <Link to="/book-tourguide" className="nav-link tour-bookings">
            Book Tour Guide
        </Link>
    </li>
    <li>
        <Link to="/view-lodges" className="nav-link tour-bookings">
            View Lodges
        </Link>
    </li>
    <li>
        <Link to="/view-locations" className="nav-link tour-bookings">
            View Locations
        </Link>
    </li>
    <li>
        <button className="nav-link logout" onClick={handleLogout}>
            Logout
        </button>
    </li>
</ul>

        </nav>
    );
};

export default Navbar3;
