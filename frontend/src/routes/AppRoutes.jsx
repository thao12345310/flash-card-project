import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AppLayout from "../components/layout/AppLayout";
import Header from "../components/layout/Header";
import AuthPage from "../pages/AuthPage";

// ====================================================================================
// 6. AppRoutes Component (Giả lập file AppRoutes.jsx)
//    Component này nhận các hàm và state từ App.jsx qua props
// ====================================================================================
const AppRoutes = ({
  currentUser,
  onLoginSuccess,
  onLogout,
  setIsSidebarOpen,
}) => {
  return (
    <Routes>
      {/* Các trang có layout chung (Header) */}
      <Route
        path="/"
        element={
          <AppLayout>
            <Header
              currentUser={currentUser}
              onLogout={onLogout}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <HomePage currentUser={currentUser} />
          </AppLayout>
        }
      ></Route>

      {/* Các trang không có layout chung */}
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
