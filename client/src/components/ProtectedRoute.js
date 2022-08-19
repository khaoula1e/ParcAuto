import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../helpers/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  console.log("Check user in Private: ", user);
  
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;