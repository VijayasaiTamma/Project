import React, { useState } from "react";
import "./AddTransport.css";

function AddTransport() {
  const [formData, setFormData] = useState({
    tourName: "",
    description: "",
    fromLocation: "",
    toLocation: "",
    tourGuide: "",
    startDatetime: "",
    endDatetime: "",
    totalDays: "",
    vehicleRegistrationNo: "",
    transportMode: "",
    lodgeName: "",
    lodgeType: "",
    ticketPrice: "",
    imageUrl: "",  // New state for image URL
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8086/api/tours/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Tour added successfully!");
        setFormData({
          tourName: "",
          description: "",
          fromLocation: "",
          toLocation: "",
          tourGuide: "",
          startDatetime: "",
          endDatetime: "",
          totalDays: "",
          vehicleRegistrationNo: "",
          transportMode: "",
          lodgeName: "",
          lodgeType: "",
          ticketPrice: "",
          imageUrl: "",  // Reset the image URL
        });
      } else {
        alert("Failed to add tour.");
      }
    } catch (error) {
      console.error(error);
      alert("Error adding tour.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Transport</h2>
      {Object.keys(formData).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input
            type={key.includes("Datetime") ? "datetime-local" : "text"}
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      
      <button type="submit">Add Transport</button>
    </form>
  );
}

export default AddTransport;
