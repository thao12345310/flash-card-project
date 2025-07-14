import { useState, useEffect } from "react";
// ====================================================================================
// CHẾ ĐỘ 3: KIỂM TRA (Test Mode)
// ====================================================================================
const TestMode = ({ cards }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const generatedQuestions = shuffleArray(cards).map((correctCard) => {
      const otherCards = cards.filter((card) => card.id !== correctCard.id);
      const distractors = shuffleArray(otherCards)
        .slice(0, 3)
        .map((card) => card.definition);
      const options = shuffleArray([correctCard.definition, ...distractors]);
      return {
        questionTerm: correctCard.term,
        correctAnswer: correctCard.definition,
        options: options,
      };
    });
    setQuestions(generatedQuestions);
  }, [cards]);

  const handleSelectOption = (option) => {
    setUserAnswers((prev) => ({ ...prev, [currentQuestionIndex]: option }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return questions.reduce((score, question, index) => {
      if (userAnswers[index] === question.correctAnswer) return score + 1;
      return score;
    }, 0);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="p-6 border rounded-lg bg-white shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Kết quả bài kiểm tra</h2>
        <p className="text-4xl font-bold mb-2">
          {Math.round((score / questions.length) * 100)}%
        </p>
        <p className="text-slate-600 mb-6">
          Bạn đã trả lời đúng {score} trên {questions.length} câu hỏi.
        </p>
        <button
          onClick={() => {
            setShowResults(false);
            setCurrentQuestionIndex(0);
            setUserAnswers({});
          }}
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Làm lại
        </button>
      </div>
    );
  }

  if (questions.length === 0) return <div>Đang tải bài kiểm tra...</div>;
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-4 border rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-bold mb-2">Chế độ Kiểm tra</h2>
      <p className="text-sm text-slate-500 mb-4">
        Câu hỏi {currentQuestionIndex + 1} / {questions.length}
      </p>
      <div className="w-full p-6 mb-6 border rounded-lg bg-slate-100">
        <p className="text-xl text-center text-slate-800 font-semibold">
          {currentQuestion.questionTerm}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectOption(option)}
            className={`p-4 border rounded-lg text-left transition-colors ${
              userAnswers[currentQuestionIndex] === option
                ? "bg-blue-500 border-blue-500 text-white"
                : "bg-white hover:bg-slate-50 hover:border-slate-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <button
          onClick={handleNextQuestion}
          disabled={!userAnswers[currentQuestionIndex]}
          className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {currentQuestionIndex < questions.length - 1 ? "Câu tiếp" : "Nộp bài"}
        </button>
      </div>
    </div>
  );
};

export default TestMode;
