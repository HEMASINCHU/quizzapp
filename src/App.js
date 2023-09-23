import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import "./App.css";
import NavBar from "./navbar/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
