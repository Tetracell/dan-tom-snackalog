import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ShowSnack = ({ API }) => {
  const [snack, setSnack] = React.useState({
    name: "",
    fiber: "",
    protein: "",
    is_healthy: "",
    image: "",
  });

  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((res) => {
      setSnack(res.data.payload);
    });
  });
  return (
    <div>
      <h1>A SINGULAR SNACK</h1>
      <p>
        <img src={snack.image}></img>
      </p>
      <ul>
        <li>{snack.name}</li>
        <li>{snack.fiber}</li>
        <li>{snack.protein}</li>
        <li>{snack.added_sugar}</li>
        <li>{snack.is_healthy}</li>
      </ul>
    </div>
  );
};
