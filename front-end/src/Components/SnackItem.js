import React from "react";
import { Link } from "react-router-dom";

const unhealthy = require("../assets/heart-regular.png");
const healthy = require("../assets/heart-solid.png");

//So this should be a nicely formatted card, since it's being used in two (or more) places

export const SnackItem = ({ snack }) => {
  const link = `/snacks/${snack.id}`;

  return (
    <div class="Snack">
      <article>
        <div>
          <img alt={snack.name} src={snack.image} />
          <h4>
            {snack.is_healthy ? ( <img className="heart" alt="healthy food" src={healthy}></img> ) : (<img className="heart" alt="unhealthy food" src={unhealthy}></img>
            )}
            <Link to={link}>{snack.name}</Link>
          </h4>
        </div>
      </article>
    </div>
  );
};
