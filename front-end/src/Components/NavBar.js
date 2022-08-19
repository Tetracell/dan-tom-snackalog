import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <h1>NavBar</h1>
      <Link to="/snacks/new">New Snack</Link>
    </div>
  );
};
