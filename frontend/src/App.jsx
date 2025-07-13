import "./assets/styles/App.css";
import Sidebar from "./components/layout/SideBar";
import Header from "./components/layout/Header";
import AppRoutes from "./routes/AppRoutes"; // Thay vì HomePage
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

      {/* Overlay for mobile to close sidebar */}
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

        {/* Main content: render routes */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
};

export default App;
