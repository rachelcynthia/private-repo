import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
