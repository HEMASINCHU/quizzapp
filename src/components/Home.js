import Cards from "../card/Cards";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Cards />
      <Link className="nav-link" to="quizz">
        Quizz works
      </Link>
    </>
  );
};
export default Home;
