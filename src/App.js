import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NavBar from "./navbar/Navbar";
import "./App.css";
import Cards from "./card/Cards";
import Quizz from "./card/Quizz";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />}>
          <Route path="cards" element={<Cards />} />
          <Route path="quizz" element={<Quizz />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
