import React from "react";
import Navbar3 from "./Navbar3"; // Include the Navbar component
 // Import Link for navigation
import "./TourGuideDashboard.css";
import { useNavigate, Link } from "react-router-dom";

 // Assuming you have CSS for the view
// Assuming you have CSS for the view

const UserDashboard = () => {
    const navigate = useNavigate();

   
    return (
        <div className="dashboard-container">
            <Navbar3 />
            <header className="dashboard-header">
               
            </header>

            <div className="dashboard-buttons">
                {/* View Locations Button */}
                <div className="dashboard-button-container">
                    <Link to="/view-locations" className="dashboard-button">
                        View Locations
                    </Link>
                </div>

                {/* View Lodges Button */}
                <div className="dashboard-button-container">
                    
                    <button className="view-lodges-btn" onClick={() => navigate("/view-lodges")}>
        View Lodges
      </button>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
