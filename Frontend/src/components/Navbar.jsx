import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black">
      <div className="h-16 max-w-screen-xl mx-auto text-white flex justify-between items-center">
        <div className="text-2xl">Social App</div>
        <div className="">
          <NavLink
            to="/login"
            className="p-2 w-20 ml-4 rounded-lg font-medium border-white border duration-500 bg-black text-white hover:text-black hover:bg-white"
          >
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="p-2 w-24 ml-4 rounded-lg font-medium border-white border duration-500 bg-black text-white hover:text-black hover:bg-white"
          >
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
