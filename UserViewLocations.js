import React, { useEffect, useState } from "react";
import "./ViewLocations.css";

function UserViewLocations() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8083/api/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  return (
    <div className="view-locations-container">
      {locations.map((location) => (
        <div key={location.id} className="location-card">
          <img
            src={location.imageUrl || "https://via.placeholder.com/300x180"}
            alt={location.name}
            className="location-image"
          />
          <div className="location-content">
            <h3 className="location-title">{location.name}</h3>
            <p className="location-description">{location.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserViewLocations;
