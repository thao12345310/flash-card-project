import "./assets/styles/App.css";
import Sidebar from "./components/layout/SideBar";
import Header from "./components/layout/Header";
import { useState } from "react";
const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-slate-50 font-sans flex text-slate-800">
      {/* Sidebar Component */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Component */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/* Main content placeholder */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <h1 className="text-2xl font-bold text-slate-800">Welcome Back!</h1>
          <p className="text-slate-500 mt-2">
            Here's a look at your recent activity and study sets.
          </p>
          {/* Your main content like flashcard sets, folders, etc. will go here */}
          <div className="mt-8 p-8 border-2 border-dashed border-slate-300 rounded-xl bg-white">
            <p className="text-center text-slate-500">
              Main content area for flashcards
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
