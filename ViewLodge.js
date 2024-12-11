import React, { useEffect, useState } from "react";
import "./ViewLodges.css";

function ViewLodges() {
  const [lodges, setLodges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/api/lodges")
      .then((response) => response.json())
      .then((data) => setLodges(data))
      .catch((error) => console.error("Error fetching lodges:", error));
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:8085/api/lodges/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // Remove the deleted lodge from the state
          setLodges(lodges.filter((lodge) => lodge.id !== id));
        } else {
          alert("Failed to delete lodge.");
        }
      })
      .catch((error) => console.error("Error deleting lodge:", error));
  };


  return (
    <div className="view-lodges-container">
      <h2>Lodges</h2>
      <div className="lodges-container">
        {lodges.map((lodge) => (
          <div key={lodge.id} className="lodge-card">
            <img src={lodge.imageUrl} alt={lodge.name} className="lodge-image" />
            <h3>{lodge.name}</h3>
            <p>{lodge.location}</p>
            <p>{lodge.description}</p>
            <p>Price: ${lodge.pricePerNight}</p>
            <button
              className="delete-btn"
              onClick={() => handleDelete(lodge.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewLodges;
