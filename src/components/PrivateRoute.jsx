import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const location = useLocation();
  const userStatus = useSelector((store) => store.login.status);
  console.log('userStatus:', userStatus)

  if (!userStatus) {
    return <Navigate to={"/"} />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
