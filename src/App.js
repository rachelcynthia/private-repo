import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
