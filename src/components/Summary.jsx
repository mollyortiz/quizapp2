import React from "react";

export default function Summary({ score, total, data }) {
  return (
    <div>
      <h2>Quiz complete! 🎉 Summary:</h2>
      <p>
        Your score: {score} out of {total}
      </p>
      <h3>Review:</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <strong>Q{index + 1}:</strong> {item.question} <br />
            <strong>Correct Answer:</strong>{" "}
            {Array.isArray(item.correctAnswer)
              ? item.correctAnswer.map((i) => item.options[i]).join(", ")
              : item.options[item.correctAnswer]}
          </li>
        ))}
      </ul>
    </div>
  );
}
