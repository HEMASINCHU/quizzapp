import React, { useState } from "react";
import { QuizData } from "./Question";
import QuizzResult from "./Result";

function Quizzes() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const nextQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    updateScore();
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const updateScore = () => {
    if (selectedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
  };

  return (
    <div>
      <div className="quizz-container">
        {showResult ? (
          <QuizzResult
            score={score}
            totalScore={QuizData.length}
            tryAgain={resetAll}
          />
        ) : (
          <>
            <h2 style={{ textAlign: "center" }}>Quiz</h2>
            <div>
              <p>
                Question {currentQuestion + 1} of {QuizData.length}
              </p>
              <h1 style={{ fontSize: "18px" }}>
                {QuizData[currentQuestion].question}{" "}
              </h1>
            </div>
            <div>
              {QuizData[currentQuestion].options.map((option, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name="options"
                    value={i + 1}
                    checked={selectedOption === i + 1}
                    onChange={() => setSelectedOption(i + 1)}
                  />
                  {option}
                </label>
              ))}
            </div>

            <button
              onClick={prevQuestion}
              className={`btn-prev ${currentQuestion === 0 ? "disabled" : ""}`}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            {currentQuestion === QuizData.length - 1 ? (
              <button onClick={nextQuestion} className="btn-next">
                Submit
              </button>
            ) : (
              <button onClick={nextQuestion} className="btn-next">
                Next
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Quizzes;
