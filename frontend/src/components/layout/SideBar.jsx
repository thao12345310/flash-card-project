import { X, Home, Library, Bell, Plus, BookOpen, Star } from "lucide-react";
import NavItem from "../common/NavItem";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <aside
      className={`
        fixed lg:relative lg:translate-x-0
        w-64 bg-white border-r border-slate-200
        flex-col flex-shrink-0 h-full
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        z-30
      `}
    >
      <div className="flex items-center justify-between px-4 border-b border-slate-200 h-16 flex-shrink-0">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white font-bold text-xl rounded-md p-2">
            Q
          </div>
          <span className="text-xl font-bold text-slate-800">Quizlet</span>
        </div>
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden text-slate-500 hover:text-slate-800"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem icon={<Home size={20} />} text="Home" active />
        <NavItem icon={<Library size={20} />} text="Your library" />
        <NavItem icon={<Bell size={20} />} text="Notifications" />

        <div className="pt-6">
          <h3 className="px-3 text-xs font-semibold uppercase text-slate-400 tracking-wider">
            Your folders
          </h3>
          <NavItem icon={<Plus size={20} />} text="New folder" isButton />
        </div>

        <div className="pt-6">
          <h3 className="px-3 text-xs font-semibold uppercase text-slate-400 tracking-wider">
            Start here
          </h3>
          <NavItem icon={<BookOpen size={20} />} text="Flashcards" />
          <NavItem icon={<Star size={20} />} text="Expert Solutions" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
