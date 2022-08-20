import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
const unhealthy = require("../assets/heart-regular.png");
const healthy = require("../assets/heart-solid.png");

export const ShowSnack = ({ API }) => {
  const navigate = useNavigate();
  const [snack, setSnack] = React.useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: "",
    image: "",
  });

  const { id } = useParams();
  React.useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((res) => {
      setSnack(res.data.payload);
    });
  }, [API, id]);

  const handleDelete = () => {
    axios.delete(`${API}/snacks/${id}`).then((res) => {
      navigate("/snacks");
    });
  };

  return (
    <div>
      <article>
        <div>
          <img alt={snack.name} src={snack.image} />
          <h4>
            {snack.name}
            {snack.is_healthy ? (
              <aside>
                <h4>
                  <img alt="healthy food" src={healthy}></img>
                </h4>
              </aside>
            ) : (
              <aside>
                <span>
                  <h4>
                    <img alt="unhealthy food" src={unhealthy}></img>
                  </h4>
                </span>
              </aside>
            )}
          </h4>
          <div>Protein: {snack.protein}</div>
          <div>Fiber: {snack.fiber}</div>
          <div>Added Sugar: {snack.added_sugar}</div>
        </div>
      </article>
      <Link to="/snacks">
        <button>Back</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
