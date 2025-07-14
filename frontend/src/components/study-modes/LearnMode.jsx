import React, { useState, useMemo } from "react";

// ====================================================================================
// Mock Data: Dữ liệu mẫu cho bộ flashcard
// ====================================================================================
const mockFlashcardSet = {
  id: "set1",
  title: "React Hooks Basics",
  cards: [
    {
      id: "card1",
      term: "useState",
      definition:
        "A Hook that lets you add React state to function components.",
    },
    {
      id: "card2",
      term: "useEffect",
      definition:
        "A Hook that lets you perform side effects in function components.",
    },
    {
      id: "card3",
      term: "useContext",
      definition: "A Hook that lets you read context without a Consumer.",
    },
    {
      id: "card4",
      term: "useReducer",
      definition:
        "An alternative to useState, usually preferable for complex state logic.",
    },
  ],
};

const LearnMode = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
  };

  const currentCard = cards[currentIndex];

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-4 text-center">Learn Mode</h2>
      <div
        className="w-full h-64 border rounded-lg flex items-center justify-center p-6 cursor-pointer bg-blue-100"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <p className="text-2xl text-center text-slate-800">
          {isFlipped ? currentCard.definition : currentCard.term}
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleNext}
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Next Card
        </button>
      </div>
      <p className="text-center mt-2 text-sm text-slate-500">
        {currentIndex + 1} / {cards.length}
      </p>
    </div>
  );
};

export default LearnMode;
