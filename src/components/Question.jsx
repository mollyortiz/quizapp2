import React, { useState } from "react";

export default function Question({ data, onAnswer }) {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const isMultipleAnswer = Array.isArray(data.correctAnswer);

  const handleOptionClick = (index) => {
    if (isMultipleAnswer) {
      setSelectedOptions(
        (prev) =>
          prev.includes(index)
            ? prev.filter((i) => i !== index) // deselect if already selected
            : [...prev, index] // add to selection
      );
    } else {
      setSelectedOptions([index]); // single selection as array
    }
  };

  const handleNextQuestion = () => {
    if (isMultipleAnswer) {
      const correctAnswers = data.correctAnswer;
      const isCorrect =
        selectedOptions.length === correctAnswers.length &&
        selectedOptions.every((answer) => correctAnswers.includes(answer));

      onAnswer(isCorrect);
    } else {
      onAnswer(selectedOptions[0] === data.correctAnswer);
    }
    setSelectedOptions([]);
  };

  return (
    <div>
      <h2>{data.question}</h2>
      <div style={{ marginTop: "10px" }}>
        {data.options.map((option, index) => (
          <button
            key={index}
            style={{
              margin: "5px",
              padding: "10px",
              backgroundColor: selectedOptions.includes(index)
                ? "lightblue"
                : "",
            }}
            onClick={() => handleOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        style={{ marginTop: "20px", padding: "10px" }}
        data-testid="next-question"
      >
        Next
      </button>
    </div>
  );
}
