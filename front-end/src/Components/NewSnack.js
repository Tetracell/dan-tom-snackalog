import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const NewSnack = ({ API }) => {
  const navigate = useNavigate();
  const [snack, setSnack] = useState({
    name: "",
    fiber: null,
    protein: null,
    added_sugar: null,
    is_healthy: null,
    image: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    setSnack({ ...snack, [e.target.id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeSnack();
  };

  const makeSnack = () => {
    axios
      .post(`${API}/snacks`, snack)
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
          <Form.Label>Name</Form.Label>
          <Form.Control id="name" type="text" value={snack.name} onChange={handleChange} placeholder="Enter Snack Name Here" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Fiber</Form.Label>
          <Form.Control id="fiber" type="number" value={snack.fiber} onChange={handleChange} placeholder="Enter Amount of Fiber" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Protein</Form.Label>
          <Form.Control id="protein" type="number" value={snack.protein} onChange={handleChange} placeholder="Enter Amount of Protein" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Added Sugar</Form.Label>
          <Form.Control id="added_sugar" type="number" value={snack.added_sugar} onChange={handleChange} placeholder="Enter Amount of Added Sugar" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Image</Form.Label>
          <Form.Control id="image" type="text" value={snack.image} onChange={handleChange} placeholder="Enter Image URL" />
        </Form.Group>
        <br />
        <Button className="butt" variant="primary" type="submit">
          Make New Snack
        </Button>
      </form>
    </div>
  );
};


