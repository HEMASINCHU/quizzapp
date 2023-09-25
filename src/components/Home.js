import Cards from "../card/Cards";
import { useParams } from "react-router-dom";
const Home = () => {
  const { Id } = useParams();
  return (
    <>
      {Id}
      <Cards />
    </>
  );
};
export default Home;
