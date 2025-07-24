import { useState } from "react";
import LibraryListItem from "../components/common/LibraryListItem";
import TabButton from "../components/common/TabButton";
import { ChevronDown, Search } from "lucide-react";

const mockRecentSets = [
  {
    id: 1,
    title: "Test",
    termCount: 3,
    author: "quizlette400678410",
    isThisWeek: true,
  },
  {
    id: 2,
    title: "(Draft) OS - Chương 1, 2, 3, Test",
    termCount: 180,
    author: "you",
    isInProgress: true,
  },
];

const TABS = [
  "Flashcard sets",
  "Practice tests",
  "Expert solutions",
  "Folders",
  "Classes",
];

const LibraryPage = () => {
  const [activeTab, setActiveTab] = useState("Flashcard sets");

  const inProgressSets = mockRecentSets.filter((s) => s.isInProgress);
  const thisWeekSets = mockRecentSets.filter((s) => s.isThisWeek);

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-6">Your library</h1>

      <div className="border-b border-slate-200 flex">
        {TABS.map((tab) => (
          <TabButton
            key={tab}
            text={tab}
            active={tab === activeTab}
            onClick={() => setActiveTab(tab)}
          />
        ))}
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
        {activeTab === "Flashcard sets" && (
          <>
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
          </>
        )}

        {activeTab === "Practice tests" && (
          <div className="p-4 text-slate-600">No practice tests yet.</div>
        )}

        {activeTab === "Expert solutions" && (
          <div className="p-4 text-slate-600">
            No expert solutions available.
          </div>
        )}

        {activeTab === "Folders" && (
          <div className="p-4 text-slate-600">No folders created.</div>
        )}

        {activeTab === "Classes" && (
          <div className="p-4 text-slate-600">
            You haven't joined any classes.
          </div>
        )}
      </div>
    </div>
  );
};

export default LibraryPage;
