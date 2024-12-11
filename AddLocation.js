import axios from "axios";
import React, { useState } from "react";
import "./AddLocation.css";

const AddLocation = () => {
  const [locationName, setLocationName] = useState("");
  const [locationDescription, setLocationDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8083/api/locations", {
        name: locationName,
        description: locationDescription,
        imageUrl: imageUrl,  // Send imageUrl to backend
      });
      alert("Location added successfully!");
    } catch (error) {
      alert("Failed to add location. Please try again.");
    }
  };

  return (
    <div className="add-location-container">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="locationName">Location Name</label>
          <input
            type="text"
            id="locationName"
            value={locationName}
            onChange={(e) => setLocationName(e.target.value)}
            placeholder="Enter location name..."
          />
        </div>
        <div className="input-group">
          <label htmlFor="locationDescription">Location Description</label>
          <textarea
            id="locationDescription"
            value={locationDescription}
            onChange={(e) => setLocationDescription(e.target.value)}
            placeholder="Enter location description..."
          ></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL..."
          />
        </div>
        <button type="submit">Add Location</button>
      </form>
    </div>
  );
};

export default AddLocation;
