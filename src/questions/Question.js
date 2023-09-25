import React, { useState } from "react";

const Question = ({ questionData }) => {
  const { question, options } = questionData;
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <h3>{question}</h3>
      <form>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Question;
