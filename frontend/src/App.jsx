import "./assets/styles/App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"; // Thay vì HomePage
import { useState } from "react";

const mockUser = {
  email: "user@example.com",
  password: "password123",
  name: "Test User",
};

export default function App() {
  const [currentUser, setCurrentUser] = useState(mockUser);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLoginSuccess = (user) => setCurrentUser(user);
  const handleLogout = () => setCurrentUser(null);

  return (
    <BrowserRouter>
      <AppRoutes
        currentUser={currentUser}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </BrowserRouter>
  );
}
