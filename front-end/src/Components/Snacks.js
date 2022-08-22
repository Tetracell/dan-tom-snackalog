import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React from "react";
import axios from "axios";
import { SnackItem } from "./SnackItem";
import "../CSS/allSnacks.css";

export const Snacks = ({ API }) => {
  const [snacks, setSnacks] = React.useState([]);
  React.useEffect(() => {
    axios.get(`${API}/snacks`).then((res) => {
      setSnacks(res.data.payload);
    });
  }, [API, snacks]);
  return (    
  <div id="allSnacks" className="allSnacks snackOverflow ">
    {snacks.map((snack) => {
          return <SnackItem snack={snack} />;
        })}
    </div>
  );
};

