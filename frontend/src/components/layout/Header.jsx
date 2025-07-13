import { Menu, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ setIsSidebarOpen }) => {
  return (
    <header className="bg-white border-b border-slate-200 p-4 z-10">
      <div className="flex items-center justify-between">
        {/* Left side: Search bar */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden text-slate-500 hover:text-slate-800"
          >
            <Menu size={24} />
          </button>
          <div className="relative hidden md:block">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search for flashcards"
              className="w-64 lg:w-96 bg-slate-100 border border-transparent focus:bg-white focus:border-blue-500 rounded-full py-2 pl-10 pr-4 transition-colors outline-none"
            />
          </div>
        </div>

        {/* Right side: Actions & User Profile */}
        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/create-set">
            <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
              <Plus size={20} />
              <span className="hidden md:inline">Create</span>
            </button>
          </Link>
          <button className="hidden sm:block bg-yellow-400 text-yellow-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">
            Upgrade: free 7-day trial
          </button>
          <button className="w-10 h-10 flex items-center justify-center bg-teal-500 text-white font-bold rounded-full">
            T
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
