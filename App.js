import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // General Navbar
import Navbar1 from "./components/Navbar1"; // Dashboard Navbar
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import RegisterForm from "./components/RegisterForm";
import UserForm from "./components/UserForm";
import Dashboard from "./components/Dashboard";
import AddLocation from "./components/AddLocation";
import ViewLocations from "./components/ViewLocations";
import TourGuide from "./components/TourGuide";
import ViewTourGuides from "./components/ViewTourGuides";
import AddTransport from "./components/AddTransport";
import ViewTransport from "./components/ViewTransport";
import AddLodge from "./components/AddLodge";
import ViewLodge from "./components/ViewLodge";
import ViewCustomers from "./components/ViewCustomers";
import RegisterAdmin from "./components/RegisterAdmin";
import TourBookings from "./components/TourBookings";
import TourGuideDashboard from "./components/TourGuideDashboard";
import PrivateRoute from "./components/PrivateRoute";
import UserDashboard from "./components/UserDashboard";
import Navbar3 from "./components/Navbar3";
import EventBookings from "./components/EventBookings";
import PaymentPage from "./components/PaymentPage";
import ViewLodge1 from "./components/ViewLodge1";


const App = () => {
  return (
    <Router>
      <Routes>
        {/* General Routes with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <SearchBar />
            </>
          }
        />
        <Route
          path="/register"
          element={
            <>
              <Navbar />
              <RegisterForm />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <UserForm />
            </>
          }
        />

        {/* Dashboard and related routes with Navbar1 */}
        <Route
          path="/dashboard"
          element={
            <>
              <Navbar1 />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/add-location"
          element={
            <>
              <Navbar1 />
              <AddLocation />
            </>
          }
        />
        <Route
          path="/view-locations"
          element={
            <>
              <Navbar3 />
              <ViewLocations />
            </>
          }
        />
        
        <Route
          path="/add-tour-guide"
          element={
            <>
              <Navbar1 />
              <TourGuide />
            </>
          }
        />
        <Route
          path="/view-tour-guides"
          element={
            <>
              <Navbar1 />
              <ViewTourGuides />
            </>
          }
        />
        <Route
          path="/add-transport"
          element={
            <>
              <Navbar1 />
              <AddTransport />
            </>
          }
        />
        <Route
          path="/view-transport"
          element={
            <>
              <Navbar1 />
              <ViewTransport />
            </>
          }
        />
        <Route
          path="/add-lodge"
          element={
            <>
              <Navbar1 />
              <AddLodge />
            </>
          }
        />
        <Route
          path="/view-lodge"
          element={
            <>
              <Navbar1 />
              <ViewLodge />
            </>
          }
        />
          <Route
          path="/view-lodges"
          element={
            <>
              <Navbar3 />
              <ViewLodge1 />
            </>
          }
        />
        <Route
          path="/view-customers"
          element={
            <>
              <Navbar1 />
              <ViewCustomers />
            </>
          }
        />
        <Route
          path="/register-admin"
          element={
            <>
              <Navbar1 />
              <RegisterAdmin />
            </>
          }
        />
        
        <Route path="/tour-bookings" element={<TourBookings />} />
        <Route path="/tourguide-dashboard" element={<TourGuideDashboard />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/event-dashboard" element={<EventBookings />} />
        <Route path="/payments" element={<PaymentPage />} />
        <Route path="/thank-you" element={<h1>Thank You for Booking!</h1>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/logout"
          element={
            <>
              <Navbar1 />
              <h1>Logout Page</h1>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
