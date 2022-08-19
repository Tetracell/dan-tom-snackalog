import React from "react";

export const SnackItem = ({ snack }) => {
  console.log(snack);
  return (
    <div>
      <ul>
        <li>{snack.name}</li>
        <li>{snack.fiber}</li>
        <li>{snack.protein}</li>
        <li>{snack.added_sugar}</li>
        <li>
          <img src={snack.image}></img>
        </li>
      </ul>
    </div>
  );
};
