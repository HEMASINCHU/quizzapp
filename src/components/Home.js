import Cards from "../card/Cards";
import { Link, Outlet } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Cards />
      <Link className="nav-link" to="quizz">
        Quizz works
      </Link>
      <br />
      <Outlet />
    </>
  );
};
export default Home;
