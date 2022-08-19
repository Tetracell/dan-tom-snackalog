import React from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

//Components
import { NewSnack } from "./Components/NewSnack";
import { EditSnack } from "./Components/EditSnack";
import { ShowSnack } from "./Components/ShowSnack";
import { NavBar } from "./Components/NavBar";
import { Snacks } from "./Components/Snacks";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Snacks API={API_URL} />} />
        <Route path="/snack/:id" element={<ShowSnack />} />
        <Route path="/new" element={<NewSnack />} />
        <Route path="/snack/:id/edit" element={<EditSnack />} />
      </Routes>
    </div>
  );
}

export default App;
