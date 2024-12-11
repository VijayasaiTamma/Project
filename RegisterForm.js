import { useEffect } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.css";

const RegisterForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate("/dashboard"); // Redirect to dashboard if already logged in
    }
  }, [navigate]);

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contactNo: "",
    street: "",
    city: "",
    pincode: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Regular expressions for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{1,10}$/; // Allows up to 10 digits
  const textRegex = /^[a-zA-Z\s]*$/;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
      case "city":
      case "street":
        if (!textRegex.test(value)) {
          error = "Only letters and spaces are allowed.";
        }
        break;
      case "email":
        if (value && !emailRegex.test(value)) {
          error = "Invalid email format.";
        }
        break;
      case "contactNo":
        if (!phoneRegex.test(value)) {
          error = "Contact number must be numeric and up to 10 digits.";
        } else if (value.length > 10) {
          error = "Contact number must not exceed 10 digits.";
        }
        break;
      case "pincode":
        if (isNaN(value)) {
          error = "Pincode must be numeric.";
        } else if (value.length > 6) {
          error = "Pincode must not exceed 6 digits.";
        }
        break;
      default:
        break;
    }

    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for any remaining errors
    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) {
      alert("Please fix the errors before submitting.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8082/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Registered Successfully!");
        navigate("/"); // Redirect to the home page
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration. Please try again later.");
    }
  };

  return (
    <div className="register-form">
      <h2>Register Here!!!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="contactNo"
            placeholder="Contact No"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
          {errors.contactNo && <p className="error">{errors.contactNo}</p>}

          <input
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleChange}
            required
          />
          {errors.street && <p className="error">{errors.street}</p>}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          {errors.city && <p className="error">{errors.city}</p>}

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />
          {errors.pincode && <p className="error">{errors.pincode}</p>}
        </div>

        <div className="button-container">
          <button
            type="submit"
            className="submit-btn"
            disabled={Object.values(errors).some((error) => error)}
          >
            Register User
          </button>
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
