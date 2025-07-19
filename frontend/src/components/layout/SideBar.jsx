import {
  X,
  Home,
  Library,
  Bell,
  Plus,
  BookOpen,
  Star,
  Menu,
} from "lucide-react";
import NavItem from "../common/NavItem"; // Giả định bạn có component này

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, onNewFolderClick }) => {
  return (
    <aside
      className={`
        fixed lg:relative lg:translate-x-0
        w-64 bg-white border-r border-slate-200
        flex flex-col flex-shrink-0 h-full
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        z-30
      `}
    >
      {/* THAY ĐỔI: Sửa lại phần đầu của sidebar để giống với ảnh */}
      <div className="flex items-center gap-4 p-4">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-slate-500 hover:text-slate-800"
        >
          <Menu size={28} />
        </button>
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.73c0 .27.16.58.67.5A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
          </svg>
        </div>
      </div>

      {/* THAY ĐỔI: Giao diện các mục menu và thêm đường kẻ ngang */}
      <nav className="flex-1 px-4 py-2 space-y-1">
        {/* Lưu ý: Để có giao diện active như ảnh, bạn cần chỉnh sửa trong component NavItem */}
        <NavItem icon={<Home size={24} />} text="Home" active />
        <NavItem icon={<Library size={24} />} text="Your library" />
        <NavItem icon={<Bell size={24} />} text="Notifications" />

        <div className="pt-4">
          <div className="border-t border-slate-200 mx-2"></div>
        </div>

        <div className="pt-4 space-y-1">
          <h3 className="px-3 pb-2 text-sm font-semibold text-slate-800">
            Your folders
          </h3>
          <NavItem
            icon={<Plus size={24} />}
            text="New folder"
            isButton
            onClick={onNewFolderClick}
          />
        </div>

        <div className="pt-4">
          <div className="border-t border-slate-200 mx-2"></div>
        </div>

        <div className="pt-4 space-y-1">
          <h3 className="px-3 pb-2 text-sm font-semibold text-slate-800">
            Start here
          </h3>
          <NavItem icon={<BookOpen size={24} />} text="Flashcards" />
          <NavItem icon={<Star size={24} />} text="Expert Solutions" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
