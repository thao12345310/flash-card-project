import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateSetPage from "../pages/CreateSetPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-set" element={<CreateSetPage />} />
      {/* Thêm các route khác ở đây nếu cần */}
    </Routes>
  );
};

export default AppRoutes;
