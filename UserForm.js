import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";

function UserForm() {
  const navigate = useNavigate();

  const [userRole, setUserRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userRole || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // Admin Role Validation
    if (userRole === "admin" && email !== "teja@gmail.com") {
      alert("Invalid Login.");
      return;
    }

    if (userRole === "admin" && password !== "teja123") {
      alert("Admin password is incorrect.");
      return;
    }

    // Tour Guide Role Validation
    if (userRole === "tour-guide" && email !== "gaya@gmail.com") {
      alert("Invalid Login.");
      return;
    }

    if (userRole === "tour-guide" && password !== "gaya123") {
      alert("Tour Guide password is incorrect.");
      return;
    }

    // Customer Role: Allow any email and password combination
    if (userRole === "customer") {
      localStorage.setItem("userEmail", email); // Store email in local storage (if needed)
      navigate("/userdashboard"); // Redirect to User Dashboard
      return;
    }

    // Make an API call for other roles (optional, based on backend setup)
    const loginData = {
      role: userRole,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8082/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        if (userRole === "tour-guide") {
          localStorage.setItem("userEmail", email);
          navigate("/tourguide-dashboard"); // Redirect to Tour Guide Dashboard
        } else if (userRole === "admin") {
          navigate("/dashboard"); // Redirect to Admin Dashboard
        }
      } else {
        alert("Invalid credentials or role mismatch");
      }
    } catch (error) {
      alert("Login failed. Please check connection and try again.");
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <label htmlFor="user-role">User Role:</label>
        <select
          id="user-role"
          value={userRole}
          onChange={(e) => setUserRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="tour-guide">Tour Guide</option>
          <option value="customer">Customer</option>
        </select>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="button-container">
          <button type="submit" className="submit-btn">
            Login
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
}

export default UserForm;
