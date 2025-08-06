
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, adminOnly = false }) => {
  let userData = null;

  try {
    const userString = localStorage.getItem("user");
    if (userString && userString !== "undefined") {
      userData = JSON.parse(userString);
    }
  } catch (err) {
    console.error("Error parsing user data:", err);
    localStorage.removeItem("user"); // Clean up invalid data
  }

  // Not logged in
  if (!userData) {
    return <Navigate to="/" />;
  }

  // Admin-only check
  if (adminOnly && !userData.username.endsWith("@admin")) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export default PrivateRoute;
