import FirstQ from "./FirstQ";
import { questions } from "./questions";

const Quizzes = () => {
  return (
    <>
      <div>
        {questions.map((item, index) => (
          <FirstQ key={index} data={item} />
        ))}
      </div>
      <button style={{ margin: "10px", padding: "5px 10px" }}>Previous</button>
      <button style={{ padding: "5px 10px" }}>Next</button>
    </>
  );
};
export default Quizzes;
