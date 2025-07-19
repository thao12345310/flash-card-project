import Header from "./Header";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";

const AppLayout = ({
  currentUser,
  onLogout,
  isSidebarOpen,
  setIsSidebarOpen,
  onNewFolderClick,
}) => {
  return (
    <div className="flex h-screen bg-slate-50">
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          aria-hidden="true"
        ></div>
      )}

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        onNewFolderClick={onNewFolderClick}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          currentUser={currentUser}
          onLogout={onLogout}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto bg-slate-100 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default AppLayout;
