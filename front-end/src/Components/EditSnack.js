import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export const EditSnack = ({ API }) => {
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
  });

  const handleChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
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
        <button>Submit</button>
      </form>
    </div>
  );
};
