import LearnMode from "../components/study-modes/LearnMode";
import WriteMode from "../components/study-modes/WriteMode";
import TestMode from "../components/study-modes/TestMode";
import { useState } from "react";

// ====================================================================================
// Dữ liệu mẫu (Mock Data)
// Bạn có thể thay đổi dữ liệu này để tạo bộ flashcard của riêng mình.
// ====================================================================================
const mockFlashcardSet = {
  id: "set1",
  title: "Các khái niệm cơ bản trong JavaScript",
  cards: [
    {
      id: "card1",
      term: "Variable",
      definition: 'Một "hộp chứa" được đặt tên để lưu trữ dữ liệu.',
    },
    {
      id: "card2",
      term: "Function",
      definition: "Một khối code được thiết kế để thực hiện một tác vụ cụ thể.",
    },
    {
      id: "card3",
      term: "Array",
      definition:
        "Một đối tượng đặc biệt có thể chứa nhiều giá trị trong một biến duy nhất.",
    },
    {
      id: "card4",
      term: "Object",
      definition: "Một tập hợp các cặp key-value (khóa-giá trị).",
    },
    {
      id: "card5",
      term: "Promise",
      definition:
        "Một đối tượng đại diện cho việc hoàn thành (hoặc thất bại) của một hoạt động bất đồng bộ.",
    },
    {
      id: "card6",
      term: "Arrow Function",
      definition: "Một cú pháp ngắn gọn hơn để viết biểu thức hàm.",
    },
  ],
};

export default function StudyPage() {
  const [studyMode, setStudyMode] = useState("learn");
  const flashcardSet = mockFlashcardSet;

  const studyModes = {
    learn: <LearnMode cards={flashcardSet.cards} />,
    write: <WriteMode cards={flashcardSet.cards} />,
    test: <TestMode cards={flashcardSet.cards} />,
  };

  const CurrentStudyComponent = studyModes[studyMode];

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          {flashcardSet.title}
        </h1>
        <div className="flex border-b mb-6">
          {Object.keys(studyModes).map((mode) => (
            <button
              key={mode}
              onClick={() => setStudyMode(mode)}
              className={`capitalize px-4 py-2 font-semibold transition-colors outline-none ${
                studyMode === mode
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        <div>{CurrentStudyComponent}</div>
      </div>
    </div>
  );
}
