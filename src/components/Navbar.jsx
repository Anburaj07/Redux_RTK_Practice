import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around p-6 bg-[#8b1033] text-xl">
      <Link to={"/"}>G.H Hospital</Link>
      <Link to={"/onboard"}>Onboard</Link>
      <Link to={"/dashboard"}>Dashboard</Link>
    </div>
  );
};

export default Navbar;
