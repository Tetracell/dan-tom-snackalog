import React from "react";
import { Link } from "react-router-dom";

const unhealthy = require("../assets/heart-regular.png");
const healthy = require("../assets/heart-solid.png");

//So this should be a nicely formatted card, since it's being used in two (or more) places

export const SnackItem = ({ snack }) => {
  console.log(snack);
  const link = `/snacks/${snack.id}`;

  return (
    <div class="Snack">
      <h4>
        <Link to={link}>
          {snack.name}
          {snack.is_healthy ? (
            <img alt="yay" src={healthy}></img>
          ) : (
            <img alt="boo" src={unhealthy}></img>
          )}
        </Link>
      </h4>
      {snack.fiber}
      {snack.protein}
      {snack.added_sugar}
      <img src={snack.image} />
    </div>
  );
};
