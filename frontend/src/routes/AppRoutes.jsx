import { Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import HomePage from "../pages/HomePage";
import CreateSetPage from "../pages/CreateSetPage";
import StudyPage from "../pages/StudyPage";
import AuthPage from "../pages/AuthPage";

const AppRoutes = ({
  currentUser,
  onLoginSuccess,
  onLogout,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  return (
    <Routes>
      {/* Các trang dùng layout chung */}
      <Route
        element={
          <AppLayout
            currentUser={currentUser}
            onLogout={onLogout}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        }
      >
        <Route path="/" element={<HomePage currentUser={currentUser} />} />
        <Route path="/create-set" element={<CreateSetPage />} />
        <Route path="/study" element={<StudyPage />} />
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
  );
};

export default AppRoutes;
