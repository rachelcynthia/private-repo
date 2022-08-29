import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
