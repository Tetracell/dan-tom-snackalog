import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <h1>Snacks</h1>
      <Link to="/snacks/new">New Snack</Link>
    </>
  );
};
