import React, { useState } from "react";
import "./AddLodge.css";

function AddLodge() {
  const [lodge, setLodge] = useState({
    name: "",
    location: "",
    description: "",
    imageUrl: "",
    pricePerNight: "",
  });

  const handleChange = (e) => {
    setLodge({ ...lodge, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8085/api/lodges", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lodge),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Lodge added successfully!");
        setLodge({
          name: "",
          location: "",
          description: "",
          imageUrl: "",
          pricePerNight: "",
        });
      })
      .catch((error) => console.error("Error adding lodge:", error));
  };

  return (
    <div className="add-lodge-container">
      <h2 className="form-title">Add a New Lodge</h2>
      <form className="add-lodge-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Lodge Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter lodge name"
            value={lodge.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter location"
            value={lodge.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter a brief description"
            value={lodge.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Enter image URL"
            value={lodge.imageUrl}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pricePerNight">Price per Night</label>
          <input
            type="number"
            id="pricePerNight"
            name="pricePerNight"
            placeholder="Enter price per night"
            value={lodge.pricePerNight}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Lodge
        </button>
      </form>
    </div>
  );
}

export default AddLodge;
