const LibraryListItem = ({ title, termCount, author }) => (
  <div className="bg-white border-b border-slate-200 p-4 flex items-center gap-4 hover:bg-slate-50 cursor-pointer">
    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
      <BookCopy className="text-blue-600" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <div className="text-sm text-slate-500 flex items-center gap-4 mt-1">
        <span>{termCount} Terms</span>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-teal-500 rounded-full text-xs text-white flex items-center justify-center font-bold">
            T
          </div>
          <span>{author}</span>
        </div>
      </div>
    </div>
  </div>
);

const TabButton = ({ text, active }) => (
  <button
    className={`px-4 py-3 font-semibold transition-colors ${
      active
        ? "text-blue-600 border-b-2 border-blue-600"
        : "text-slate-500 hover:text-slate-800"
    }`}
  >
    {text}
  </button>
);

const LibraryPage = () => {
  const inProgressSets = mockRecentSets.filter((s) => s.isInProgress);
  const thisWeekSets = mockRecentSets.filter((s) => s.isThisWeek);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Your library</h1>

      <div className="border-b border-slate-200">
        <TabButton text="Flashcard sets" active />
        <TabButton text="Practice tests" />
        <TabButton text="Expert solutions" />
        <TabButton text="Folders" />
        <TabButton text="Classes" />
      </div>

      <div className="py-4 flex justify-between items-center">
        <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-md bg-white text-slate-700 font-semibold hover:bg-slate-50">
          <span>Recent</span>
          <ChevronDown size={16} />
        </button>
        <div className="relative w-full max-w-xs">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            placeholder="Search flashcards"
            className="w-full border border-slate-300 rounded-md py-2 pl-10 pr-4"
          />
        </div>
      </div>

      <div>
        {inProgressSets.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xs font-bold uppercase text-slate-500 mb-2 px-4">
              IN PROGRESS
            </h2>
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              {inProgressSets.map((set) => (
                <LibraryListItem key={set.id} {...set} />
              ))}
            </div>
          </div>
        )}

        {thisWeekSets.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase text-slate-500 mb-2 px-4">
              THIS WEEK
            </h2>
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              {thisWeekSets.map((set) => (
                <LibraryListItem key={set.id} {...set} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
