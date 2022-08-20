import React from "react";
import { Routes, Route } from "react-router-dom";


//Components
import { NewSnack } from "./Components/NewSnack";
import { EditSnack } from "./Components/EditSnack";
import { ShowSnack } from "./Components/ShowSnack";
import { NavBar } from "./Components/NavBar";
import { Snacks } from "./Components/Snacks";
import { Home } from "./Components/Home";

const API_URL = process.env.REACT_APP_API_URL;

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snacks" element={<Snacks API={API_URL} />} />
        <Route path="/snacks/:id" element={<ShowSnack API={API_URL} />} />
        <Route path="/snacks/new" element={<NewSnack API={API_URL} />} />
        <Route path="/snacks/:id/edit" element={<EditSnack API={API_URL} />} />
      </Routes>
    </div>
  );
}

export default App;
