import LearnMode from "../components/study-modes/LearnMode";
import WriteMode from "../components/study-modes/WriteMode";

export default function StudyPage() {
  const [studyMode, setStudyMode] = useState("learn"); // 'learn', 'write'
  const flashcardSet = mockFlashcardSet;

  // Ánh xạ tên chế độ với component tương ứng
  // Dễ dàng thêm chế độ mới ở đây
  const studyModes = {
    learn: <LearnMode cards={flashcardSet.cards} />,
    write: <WriteMode cards={flashcardSet.cards} />,
    // test: <TestMode cards={flashcardSet.cards} />, // Thêm chế độ mới ở đây
  };

  const CurrentStudyComponent = studyModes[studyMode];

  return (
    <div className="bg-slate-50 min-h-screen p-4 sm:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">
          {flashcardSet.title}
        </h1>

        {/* Tabs để chọn chế độ học */}
        <div className="flex border-b mb-6">
          {Object.keys(studyModes).map((mode) => (
            <button
              key={mode}
              onClick={() => setStudyMode(mode)}
              className={`capitalize px-4 py-2 font-semibold transition-colors ${
                studyMode === mode
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Hiển thị component của chế độ học đã chọn */}
        <div>{CurrentStudyComponent}</div>
      </div>
    </div>
  );
}
