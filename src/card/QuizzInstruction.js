import { useNavigate } from "react-router-dom";
import React from "react";

const QuizzInstruction = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    padding: "5px 10px",
    borderRadius: "10px",
    margin: "10px 20px 5px",
  };

  return (
    <div className="quiz-instruction-container">
      <h4 className="quiz-instruction-title">List of Quizz Instructions</h4>
      <ol className="quiz-instruction-list">
        <li>
          The quizzes consist of questions carefully designed to help you
          self-assess your comprehension of the information presented on the
          topics covered in the module.{" "}
        </li>
        <li>
          Each question in the quiz is of multiple-choice or "true or false"
          format.
        </li>
        <li>
          After responding to a question, click on the "Next Question" button at
          the bottom to go to the next question.{" "}
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
      <input type="checkbox" /> I agree to Terms and Conditions
      <br />
      <button
        className="quiz-instruction-button"
        style={buttonStyle}
        onClick={() => navigate("/quizzes")}
      >
        Start
      </button>
    </div>
  );
};

export default QuizzInstruction;
