import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ViewTransport.css";

function ViewTransport() {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate();

  // Fetching all tours
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("http://localhost:8086/api/tours/all");
        if (response.ok) {
          const data = await response.json();
          setTours(data);
        } else {
          console.error("Failed to fetch tours.");
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchTours();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this transport?");
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:8086/api/tours/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          alert("Transport deleted successfully!");
          setTours(tours.filter((tour) => tour.id !== id)); // Remove from local state
        } else {
          alert("Failed to delete transport.");
        }
      } catch (error) {
        console.error(error);
        alert("Error deleting transport.");
      }
    }
  };

  // Navigate to Home page
  const goToHome = () => {
    navigate("/");  // Adjust the route to match your home page route
  };

  return (
    <div>
      <h2>View Transport</h2>
      <button onClick={goToHome}>Home</button> {/* Home button */}
      <table>
        <thead>
          <tr>
            <th>Tour Name</th>
            <th>Description</th>
            <th>From Location</th>
            <th>To Location</th>
            <th>Price</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour) => (
            <tr key={tour.id}>
              <td>{tour.tourName}</td>
              <td>{tour.description}</td>
              <td>{tour.fromLocation}</td>
              <td>{tour.toLocation}</td>
              <td>{tour.ticketPrice}</td>
              <td>
                {tour.imageUrl && <img src={tour.imageUrl} alt={tour.tourName} style={{ width: "100px" }} />}
              </td>
              <td>
                <button onClick={() => handleDelete(tour.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewTransport;
