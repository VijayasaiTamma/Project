import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const event = location.state?.event;

  const handleGoBack = () => {
    navigate("/event-dashboard"); // Navigate to Event Bookings
  };

  // State to store form data (tickets, card details)
  const [formData, setFormData] = useState({
    tickets: "",
    cardNumber: "",
    validThrough: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const paymentData = {
      eventId: event.id,
      tickets: formData.tickets,
      cardNumber: formData.cardNumber,
      validThrough: formData.validThrough,
      cvv: formData.cvv,
    };

    fetch("http://localhost:8086/api/payments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Payment Successful!");
          navigate("/thank-you"); // Redirect to a Thank You page or home
        } else {
          alert("Payment Failed.");
        }
      })
      .catch((error) => console.error("Error processing payment:", error));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2 style={{ textAlign: "center" }}>Payment for {event?.title}</h2>
      <form onSubmit={handleFormSubmit}>
        {/* Tickets Input */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Number of Tickets:</label>
          <input
            type="number"
            name="tickets"
            value={formData.tickets}
            onChange={handleInputChange}
            required
            min="1"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        {/* Card Number Input */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Credit Card Number:</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
            maxLength="16"
            placeholder="Enter your card number"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        {/* Valid Through (MM/YY) Input */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Valid Through (MM/YY):</label>
          <input
            type="text"
            name="validThrough"
            value={formData.validThrough}
            onChange={handleInputChange}
            required
            maxLength="5"
            placeholder="MM/YY"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        {/* CVV Input */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>CVV:</label>
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
            maxLength="3"
            placeholder="Enter CVV"
            style={{ width: "100%", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit Payment
        </button>
        <button className="go-back-button" onClick={handleGoBack}>
        Back to Event Bookings
      </button>
      </form>
    </div>
  );
};

export default PaymentPage;
