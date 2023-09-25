import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const questions = [
    {
      question: "Which of the following command is used to create a React app?",
      options: [
        "npx create-react-app appname",
        "npm install",
        "react install",
        "npm install create",
      ],
      correctAnswerIndex: 0,
    },
    {
      question:
        "What is the default port number on which the React application runs?",
      options: ["4000", "3000", "2000", "5000"],
      correctAnswerIndex: 1,
    },
    {
      question: "What does 'JS' stand for?",
      options: ["Javascript", "MongoDB", "React", "Typescript"],
      correctAnswerIndex: 0,
    },
    // Add a fourth question
    {
      question: "What is JSX?",
      options: [
        "JavaScript XML",
        "React's version of HTML",
        "Just a string",
        "None of the above",
      ],
      correctAnswerIndex: 1,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [totalScore, setTotalScore] = useState(0);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswer = (selectedOption) => {
    const isCorrect =
      questions[currentQuestion].correctAnswerIndex ===
      questions[currentQuestion].options.indexOf(selectedOption);

    if (currentQuestion === questions.length - 1) {
      if (isCorrect) {
        setTotalScore((prevScore) => prevScore + 1);
      }
      setSubmitted(true);
    } else {
      handleNext();
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      <h2 className="quiz-title">Quiz</h2>
      <div className="question-card">
        <p className="question-number">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        <Question
          questionData={questions[currentQuestion]}
          onAnswer={handleAnswer}
          submitted={submitted}
        />
        {currentQuestion === questions.length - 1 ? (
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        ) : (
          <Result
            onPrevious={handlePrevious}
            onNext={handleNext}
            isFirstQuestion={currentQuestion === 0}
            isLastQuestion={currentQuestion === questions.length - 1}
          />
        )}
      </div>
      {submitted && (
        <div>
          <p className="total-score">
            Total Score: {totalScore} out of {questions.length}
          </p>
        </div>
      )}
    </div>
  );
};

export default Quiz;
