import React, { useEffect, useState } from "react";
import "./ViewLocations.css"; 
// Link to your CSS file

function ViewLocations() {
  const [locations, setLocations] = useState([]);

  // Fetch locations when the component mounts
  useEffect(() => {
    fetch("http://localhost:8083/api/locations")
      .then((response) => response.json())
      .then((data) => setLocations(data))
      .catch((error) => console.error("Error fetching locations:", error));
  }, []);

  // Function to handle the delete action
  const handleDelete = (id) => {
    fetch(`http://localhost:8083/api/locations/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted location from the state
          setLocations(locations.filter((location) => location.id !== id));
          console.log("Location deleted successfully!");
        } else {
          console.error("Failed to delete location.");
        }
      })
      .catch((error) => console.error("Error deleting location:", error));
  };

  // Function to handle update (placeholder for now)
  const handleUpdate = (id) => {
    console.log("Update location with ID:", id);
    // Add logic to navigate to an update form or open a modal
  };

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
          <div className="card-buttons">
            <button className="update-btn" onClick={() => handleUpdate(location.id)}>
              Update
            </button>
            <button className="delete-btn" onClick={() => handleDelete(location.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewLocations;
