import React from "react";

function QuizzResult({ score, totalScore, tryAgain }) {
  return (
    <>
      <div className="show-score">
        Your Score:{score}/ {totalScore}
      </div>
      <button id="next-button" onClick={tryAgain}>
        Try Again
      </button>
    </>
  );
}

export default QuizzResult;
