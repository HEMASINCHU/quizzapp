import Card from "./Card";
import { data } from "./data";

const Cards = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>List of Quizzes</h1>
      <div className="cards">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
};
export default Cards;
