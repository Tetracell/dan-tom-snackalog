import Button from 'react-bootstrap/Button';


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
    <div className="snackID">
      <article>
        <div>
          <img className="oneSnack" alt={snack.name} src={snack.image} />
          <h4>
            {snack.name}
            {snack.is_healthy ? (
              <aside>
                <h4>
                  <img className="heart" alt="healthy food" src={healthy}></img>
                </h4>
              </aside>
            ) : (
              <aside>
                <span>
                  <h4>
                    <img className="heart" alt="unhealthy food" src={unhealthy}></img>
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
      <Button className="butt" href="/snacks" variant="primary">Back</Button>{''}
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Button className="butt" href={`/snacks/${id}/edit`} variant="primary">Edit</Button>{''}
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <Button className="butt"  onClick={handleDelete} variant="primary">Delete</Button>{''}
    </div>
  );
};
