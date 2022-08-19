import React from "react";
import axios from "axios";
import { SnackItem } from "./SnackItem";

export const Snacks = ({ API }) => {
  const [snacks, setSnacks] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API}/snacks`).then((res) => {
      setSnacks(res.data.payload);
    });
  }, [API]);
  return (
    <div>
      {snacks.map((snack) => {
        return <SnackItem snack={snack}/>
      })}
    </div>
  );
};
