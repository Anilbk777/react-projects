import React from "react";
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="flex justify-between bg-gray-400 p-5">
      <h2 className="text-2xl text-blue-700 font-extrabold">NextGen Prep</h2>
      <nav className="flex gap-5 font-medium pr-10"> 
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-white"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-gray-900" : "text-white"
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};

export default NavBar;
