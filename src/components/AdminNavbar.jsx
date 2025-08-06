

import React from "react";
import { NavLink } from "react-router-dom";
import "./AdminNavbar.css";

const AdminNavbar = () => {
  
  return (
    <div className="admin-navbar">
      <NavLink
        to="/admin" end
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/admin/soldpets"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Sold Pets
      </NavLink>

      <NavLink
        to="/admin/users"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Users
      </NavLink>

      <NavLink
        to="/admin/pets"
        className={({ isActive }) => (isActive ? "active-link" : "")}
      >
        Pets
      </NavLink>

      
    </div>
  );
};

export default AdminNavbar;
