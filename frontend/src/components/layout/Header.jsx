import { Menu, Search, Plus } from "lucide-react";
import { Link } from "react-router-dom";

// ====================================================================================
// 2. Header Component
//    Hiển thị khác nhau dựa trên trạng thái đăng nhập
// ====================================================================================
const Header = ({ currentUser, onLogout, setIsSidebarOpen }) => {
  const isLoggedIn = !!currentUser;

  return (
    <header className="bg-white border-b border-slate-200 h-16 flex items-center z-10 flex-shrink-0">
      <div className="flex items-center justify-between w-full px-4">
        <div className="flex items-center gap-4">
          {isLoggedIn && (
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-slate-500 hover:text-slate-800"
            >
              <Menu size={24} />
            </button>
          )}
          <div className="relative hidden md:block">
            <Search
              size={20}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              type="text"
              placeholder="Search for flashcards"
              className="w-64 lg:w-96 bg-slate-100 border-transparent rounded-full py-2 pl-10 pr-4 outline-none focus:bg-white focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          {isLoggedIn ? (
            <>
              <Link to="/create-set">
                <button className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                  <Plus size={20} />
                  <span className="hidden md:inline">Create</span>
                </button>
              </Link>
              <button className="hidden sm:block bg-yellow-400 text-yellow-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-500 transition-colors">
                Upgrade
              </button>
              <button
                onClick={onLogout}
                className="w-10 h-10 flex items-center justify-center bg-teal-500 text-white font-bold rounded-full"
                title="Click to Logout"
              >
                {currentUser.name.charAt(0).toUpperCase()}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="font-semibold text-slate-600 hover:text-blue-600 transition-colors px-4 py-2"
              >
                Log in
              </Link>
              <Link
                to="/signup"
                className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
