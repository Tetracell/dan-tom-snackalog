import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { SnackItem } from "./SnackItem";

export const ShowSnack = ({ API }) => {
  const navigate = useNavigate();
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
  }, []);
  return (
    <div>
      <h1>Snacks</h1>
      <SnackItem snack={snack} />
      <Link to="/snacks">
        <button>Back</button>
      </Link>
      <button>Delete</button>
    </div>
  );
};
