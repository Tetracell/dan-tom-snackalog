import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const EditSnack = ({ API }) => {
  const navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    is_healthy: "",
    image: "",
  });

  const { id } = useParams();
  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((res) => {
      setSnack(res.data.payload);
    });
  }, [API, id]);

  const handleChange = (e) => {
    let value = e.target.value;
    setSnack({ ...snack, [e.target.id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Handling submit");
    editSnack();
  };

  const editSnack = () => {
    console.log("Entering editSnack()");
    axios
      .put(`${API}/snacks/${id}`, snack)
      .then((res) => {
        setSnack(res.data.payload);
      })
      .then(navigate("/snacks"))
      .catch((error) => {
        console.log(error.response.data.error);
      });
  };

  return (
    <div className="new">
      <form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="editName">Name</Form.Label>
          <Form.Control id="name" type="text" value={snack.name} onChange={handleChange} placeholder="Enter Snack Name Here" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label className="editName">Fiber</Form.Label>
          <Form.Control id="fiber" type="number" value={snack.fiber} onChange={handleChange} placeholder="Enter Amount of Fiber" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label className="editName">Protein</Form.Label>
          <Form.Control id="protein" type="number" value={snack.protein} onChange={handleChange} placeholder="Enter Amount of Protein" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label className="editName">Added Sugar</Form.Label>
          <Form.Control id="added_sugar" type="number" value={snack.added_sugar} onChange={handleChange} placeholder="Enter Amount of Added Sugar" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label className="editName">Image</Form.Label>
          <Form.Control id="image" type="text" value={snack.image} onChange={handleChange} placeholder="Enter Image URL" />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Save Edit
        </Button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Button variant="primary" type="submit">
         Cancel
        </Button>
        
      </form>
    </div>
  );
};
