import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import HomePage from "../pages/HomePage";
import CreateSetPage from "../pages/CreateSetPage";
import StudyPage from "../pages/StudyPage";
import AuthPage from "../pages/AuthPage";
import FolderPage from "../pages/FolderPage";
import UserProfilePage from "../pages/UserProfilePage";
import { useState } from "react";
import NewFolderModal from "../components/common/NewFolderModal";
import LibraryPage from "../pages/LibraryPage";
const AppRoutes = ({
  currentUser,
  onLoginSuccess,
  onLogout,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const [isNewFolderModalOpen, setIsNewFolderModalOpen] = useState(false);

  return (
    <div>
      <Routes>
        {/* Các trang dùng layout chung */}
        <Route
          element={
            <AppLayout
              currentUser={currentUser}
              onLogout={onLogout}
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              onNewFolderClick={() => setIsNewFolderModalOpen(true)}
            />
          }
        >
          <Route path="/" element={<HomePage currentUser={currentUser} />} />
          <Route path="/create-set" element={<CreateSetPage />} />
          <Route path="/study" element={<StudyPage />} />
          <Route
            path="/profile"
            element={<UserProfilePage currentUser={currentUser} />}
          />
          <Route path="/folder/:folderName" element={<FolderPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Route>

        {/* Các trang không dùng layout chung */}
        <Route
          path="/login"
          element={
            currentUser ? (
              <Navigate to="/" />
            ) : (
              <AuthPage onLoginSuccess={onLoginSuccess} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            currentUser ? (
              <Navigate to="/" />
            ) : (
              <AuthPage onLoginSuccess={onLoginSuccess} isSignup />
            )
          }
        />
      </Routes>
      <NewFolderModal
        isOpen={isNewFolderModalOpen}
        onClose={() => setIsNewFolderModalOpen(false)}
      />
    </div>
  );
};

export default AppRoutes;
