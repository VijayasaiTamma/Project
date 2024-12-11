import React, { useState } from "react";
import "./TourGuide.css"; // CSS file for styling

const TourGuide = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newTourGuide = { 
      email, 
      imageUrl,  // image_url in backend
      phone, 
      name
    };
  
    console.log("Sending data:", newTourGuide); // Log the data being sent
  
    try {
      const response = await fetch("http://localhost:8087/api/tour-guides", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTourGuide),
      });
  
      console.log("Server response:", response); // Log the server response
  
      if (response.ok) {
        alert("Tour Guide added successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setImageUrl("");
      } else {
        const errorData = await response.json();
        console.error("Error response from server:", errorData);
        alert("Failed to add Tour Guide. Please try again.");
      }
    } catch (error) {
      console.error("Error adding tour guide:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="add-tour-guide-container">
      <h2>Add New Tour Guide</h2>
      <form className="add-tour-guide-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Tour Guide
        </button>
      </form>
    </div>
  );
};

export default TourGuide;
