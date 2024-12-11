import React, { useEffect, useState } from "react";
import "./ViewLodges.css"; // Reuse the same CSS for consistency

function UserViewLodges() {
  const [lodges, setLodges] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/api/lodges")
      .then((response) => response.json())
      .then((data) => setLodges(data))
      .catch((error) => console.error("Error fetching lodges:", error));
  }, []);

  return (
    <div className="view-lodges-container">
      <h2>Available Lodges</h2>
      <div className="lodges-container">
        {lodges.map((lodge) => (
          <div key={lodge.id} className="lodge-card">
            <img src={lodge.imageUrl} alt={lodge.name} className="lodge-image" />
            <h3>{lodge.name}</h3>
            <p>{lodge.location}</p>
            <p>{lodge.description}</p>
            <p>Price: ${lodge.pricePerNight}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserViewLodges;
