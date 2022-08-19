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
    editSnack();
  };

  const editSnack = () => {
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
    <div>
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={snack.name}
          required
        ></input>
        <label for="fiber">Fiber</label>
        <input
          type="number"
          id="fiber"
          onChange={handleChange}
          value={snack.fiber}
        ></input>
        <label for="protein">Protein</label>
        <input
          type="number"
          id="protein"
          onChange={handleChange}
          value={snack.protein}
        ></input>
        <label for="added_sugar">Added Sugar</label>
        <input
          type="number"
          id="added_sugar"
          onChange={handleChange}
          value={snack.added_sugar}
        ></input>
        <label for="image">Image</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={snack.image}
        ></input>
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <button>Delete</button>
      </form>
    </div>
  );
};
