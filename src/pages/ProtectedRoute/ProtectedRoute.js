import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
