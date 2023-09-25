import { useNavigate } from "react-router-dom";
const QuizzInstruction = () => {
  const navigate = useNavigate();
  return (
    <>
      <ol>
        <h4>List of Quizz Instructions</h4>
        <li>
          The quizzes consists of questions carefully designed to help you
          self-assess your comprehension of the information presented on the
          topics covered in the module.{" "}
        </li>
        <li>
          Each question in the quiz is of multiple-choice or "true or false"
          format.
        </li>
        <li>
          After responding to a question, click on the "Next Question" button at
          the bottom to go to the next questino.{" "}
        </li>
        <li>
          If you select an incorrect response for a question, you can try again
          until you get the correct response.
        </li>
        <li>
          The total score for the quiz is based on your responses to all
          questions.
        </li>
      </ol>
      <input type="checkbox" /> I agree Terms and conditions
      <br />
      <button
        style={{
          padding: "5px 10px",
          borderRadius: "10px",
          margin: "10px 20px 5px",
        }}
        onClick={() => navigate("/quizzes")}
      >
        Start
      </button>
    </>
  );
};
export default QuizzInstruction;
