import React from "react";

const Result = ({ onPrevious, onNext, isFirstQuestion, isLastQuestion }) => {
  return (
    <div className="result-container">
      <button
        onClick={onPrevious}
        disabled={isFirstQuestion}
        className={isFirstQuestion ? "disabled-button" : ""}
      >
        Previous
      </button>
      <button onClick={onNext} disabled={isLastQuestion}>
        Next
      </button>
    </div>
  );
};

export default Result;
