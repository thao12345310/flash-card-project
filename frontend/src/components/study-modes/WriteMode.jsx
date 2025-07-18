import React, { useState, useMemo } from "react";

const WriteMode = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState(null); // 'correct', 'incorrect', or null

  const currentCard = cards[currentIndex];

  const checkAnswer = () => {
    if (inputValue.toLowerCase() === currentCard.definition.toLowerCase()) {
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
  };

  const handleNext = () => {
    setFeedback(null);
    setInputValue("");
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Write Mode</h2>
      <div className="w-full h-32 border rounded-lg flex items-center justify-center p-6 bg-slate-100">
        <p className="text-2xl text-center text-slate-800">
          {currentCard.term}
        </p>
      </div>
      <div className="mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type the definition here..."
          className={`w-full p-3 border rounded-lg outline-none transition-all ${
            feedback === "correct"
              ? "border-green-500 bg-green-50"
              : feedback === "incorrect"
              ? "border-red-500 bg-red-50"
              : "border-slate-300"
          }`}
        />
        {feedback && (
          <p
            className={`mt-2 text-sm ${
              feedback === "correct" ? "text-green-600" : "text-red-600"
            }`}
          >
            {feedback === "correct"
              ? "Correct!"
              : `Correct answer: ${currentCard.definition}`}
          </p>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={feedback ? handleNext : checkAnswer}
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {feedback ? "Next Card" : "Check Answer"}
        </button>
      </div>
    </div>
  );
};

export default WriteMode;
