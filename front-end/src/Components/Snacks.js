import React from "react";
import axios from "axios";

export const Snacks = ({ API }) => {
  const [snacks, setSnacks] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setSnacks(res.data);
      })
      .then(console.log(snacks));
  }, [API, snacks]);

  return <div>Snacks</div>;
};
