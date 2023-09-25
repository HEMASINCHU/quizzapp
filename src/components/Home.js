import Cards from "../card/Cards";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
const Home = () => {
  const { Id } = useParams();
  return (
    <>
      {Id}
      <Cards />
      <br />
      <Outlet />
    </>
  );
};
export default Home;
