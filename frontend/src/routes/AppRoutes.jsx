import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateSetPage from "../pages/CreateSetPage";
import StudyPage from "../pages/StudyPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-set" element={<CreateSetPage />} />
      <Route path="/study" element={<StudyPage />} />
      {/* Thêm các route khác ở đây nếu cần */}
    </Routes>
  );
};

export default AppRoutes;
