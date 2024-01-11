import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default AllRoutes;
