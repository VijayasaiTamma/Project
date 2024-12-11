import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate for routing
import "./EventBookings.css";

function EventBookings() {
  const [tours, setTours] = useState([]);
  const navigate = useNavigate(); // Initialize the navigate function

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

  const handleBookNow = (tour) => {
    navigate("/payments", { state: { tour } }); // Redirect to Payment Page with tour data
  };
  const goBackToHome = () => {
    navigate("/"); // Navigate to the home page route
  };

  return (
    <div>
      <h2>Event Bookings</h2>
      <button  onClick={goBackToHome} // Go back to home page
      >
        Go Back to Home
      </button>
      <div className="tour-cards">
        {tours.map((tour) => (
          <div className="tour-card" key={tour.id}>
            <h3>{tour.tourName}</h3>
            <p>{tour.description}</p>
            <p>
              From: {tour.fromLocation} To: {tour.toLocation}
            </p>
            <p>Tour Guide: {tour.tourGuide}</p>
            <p>
              Start: {tour.startDatetime} </p>
              <p>End: {tour.endDatetime}
            </p>
            <p>Total Days: {tour.totalDays}</p>
            <p>Transport: {tour.transportMode}</p>
            <p>
              Lodge: {tour.lodgeName} ({tour.lodgeType})
            </p>
            <p>Price: ₹{tour.ticketPrice}</p>
            {tour.imageUrl && (
              <img
                src={tour.imageUrl}
                alt={tour.tourName}
                style={{ width: "100%", height: "auto", marginTop: "10px" }}
              />
            )}
            <button
              style={{
                backgroundColor: "#007BFF",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              onClick={() => handleBookNow(tour)} // Pass the selected tour data
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventBookings;
