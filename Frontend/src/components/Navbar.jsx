import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import useUserContext from "../contexts/userContext";
import { toast } from "react-toastify";
import { api } from "../api";

const Navbar = () => {
  const { token, setToken } = useUserContext();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const logout = await api.post("/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setToken(null);
      toast(logout.data.message);
      navigate("/login");
    } catch (err) {
      console.log(err);
      toast.error(err);
    }
  };
  return (
    <nav className="bg-black">
      <div className="h-16 max-w-screen-xl mx-auto text-white flex justify-between items-center">
        <div className="text-2xl">Social App</div>
        {token ? (
          <div className="afterLogin">
            <button
              onClick={logout}
              className="p-2 w-20 ml-4 rounded-lg font-medium border-white border duration-500 bg-black text-white hover:text-black hover:bg-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="beforeLogin">
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
