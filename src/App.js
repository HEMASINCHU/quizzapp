import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import NavBar from "./navbar/Navbar";
import Cards from "./card/Cards";
import QuizzInstruction from "./card/QuizzInstruction";

import "./App.css";
import Quizzes from "./questions/Quizzes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home/:id" element={<Home />}>
          <Route path="cards/:userId" element={<Cards />} />
        </Route>
        <Route path="quizz-instruction" element={<QuizzInstruction />} />
        <Route path="quizzes" element={<Quizzes />} />
      </Routes>
    </div>
  );
}

export default App;
