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
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={snack.name}
        ></input>
        <input
          type="number"
          id="fiber"
          onChange={handleChange}
          value={snack.fiber}
        ></input>
        <input
          type="number"
          id="protein"
          onChange={handleChange}
          value={snack.protein}
        ></input>
        <input
          type="number"
          id="added_sugar"
          onChange={handleChange}
          value={snack.added_sugar}
        ></input>
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
