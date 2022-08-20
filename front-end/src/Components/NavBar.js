import React from "react";
import { Link } from "react-router-dom";
import "../CSS/navBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <h1>Snacks</h1>
      <Link to="/snacks/new">New Snack</Link>
      <Link to="/snacks">Snacks</Link>
    </div>
  );
};
