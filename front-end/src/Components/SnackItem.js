import React from "react";
import { Link, useNavigate } from "react-router-dom";

const unhealthy = require("../assets/heart-regular.png");
const healthy = require("../assets/heart-solid.png");

//So this should be a nicely formatted card, since it's being used in two (or more) places

export const SnackItem = ({ snack }) => {
  const navigate = useNavigate();
  const link = `/snacks/${snack.id}`;

  return (
    <div class="Snack">
      <article>
        <div>
          <img alt={snack.name} src={snack.image} />
          <h4>
            <Link to={link}>
              {snack.name}
              {snack.is_healthy ? (
                <aside>
                  <img alt="healthy food" src={healthy}></img>
                </aside>
              ) : (
                <aside>
                  <img alt="unhealthy food" src={unhealthy}></img>
                </aside>
              )}
            </Link>
          </h4>
          <div>Protein: {snack.protein}</div>
          <div>Fiber: {snack.fiber}</div>
          <div>Added Sugar: {snack.added_sugar}</div>
        </div>
      </article>
    </div>
  );
};
