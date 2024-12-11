import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authToken");

  useEffect(() => {
    if (isAuthenticated) {
      window.history.pushState(null, "", window.location.href);
      window.addEventListener("popstate", () => {
        window.history.pushState(null, "", window.location.href);
      });
      return () => {
        window.removeEventListener("popstate", () => {});
      };
    }
  }, [isAuthenticated]);

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
