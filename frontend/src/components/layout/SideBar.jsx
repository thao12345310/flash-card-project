import {
  X,
  Home,
  Library,
  Bell,
  Plus,
  BookOpen,
  BookCopy,
  User,
  Star,
  Menu,
} from "lucide-react";

import { useLocation, Link } from "react-router-dom";
import NavItem from "../common/NavItem"; // Giả định bạn có component này

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, onNewFolderClick }) => {
  const location = useLocation();

  return (
    <aside
      className={`fixed lg:relative lg:translate-x-0 w-64 bg-white border-r border-slate-200 flex flex-col flex-shrink-0 h-full transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } z-30`}
    >
      <div className="h-16 flex items-center justify-start p-4 mb-4">
        {/* Nút menu 3 sọc đã được trả về đây */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-500 hover:text-slate-800"
        >
          <Menu size={24} />
        </button>
        <Link to="/" className="p-2 ml-2">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            Q
          </div>
        </Link>
      </div>
      <nav className="flex-1 px-4 space-y-1">
        <NavItem
          icon={<Home size={24} />}
          text="Home"
          to="/"
          active={location.pathname === "/"}
        />
        <NavItem
          icon={<Library size={24} />}
          text="Your library"
          to="/library"
          active={location.pathname === "/library"}
        />
        <NavItem icon={<Bell size={24} />} text="Notifications" />

        <div className="pt-6">
          <div className="border-t border-slate-200 mx-2"></div>
        </div>

        <div className="pt-4 space-y-1">
          <h3 className="px-3 mb-2 text-xs font-semibold uppercase text-slate-400">
            Your folders
          </h3>
          <NavItem
            icon={<Plus size={24} />}
            text="New folder"
            isButton={true}
            onClick={onNewFolderClick}
          />
        </div>

        <div className="pt-6">
          <h3 className="px-3 mb-2 text-xs font-semibold uppercase text-slate-400">
            Start here
          </h3>
          <NavItem
            icon={<BookCopy size={24} />}
            text="Flashcards"
            to="/create-set"
            active={location.pathname === "/create-set"}
          />
          <NavItem icon={<User size={24} />} text="Expert Solutions" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
