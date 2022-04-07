import React from "react";
import { Navigate } from "react-router";

const ProtectedRoute = ({ loggedIn, children }) => {
  //   console.log(loggedIn, children);
  if (!loggedIn) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
