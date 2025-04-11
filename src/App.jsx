import React, { useState } from "react";
import Question from "./components/Question.jsx";
import Summary from "./components/Summary.jsx";

const data = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "London", "Paris", "Madrid"],
    correctAnswer: 2,
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "22"],
    correctAnswer: 1,
  },
  {
    question: "True or False: The sky is blue.",
    options: ["True", "False"],
    correctAnswer: 0,
  },
  {
    question: "Select all prime numbers:",
    options: ["2", "3", "4", "5"],
    correctAnswer: [0, 1, 3],
  },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {currentIndex < data.length ? (
        <Question data={data[currentIndex]} onAnswer={handleAnswer} />
      ) : (
        <Summary score={score} total={data.length} data={data} />
      )}
    </div>
  );
}
