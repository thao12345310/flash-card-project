import StudyItem from "../components/common/StudyItem";
import { Link } from "react-router-dom";
// Dữ liệu mẫu - có thể được lấy từ API trong tương lai
const studySetsData = [
  {
    type: "set",
    title: "Test",
    termCount: 3,
    author: "you",
    isDraft: false,
  },
  {
    type: "set",
    title: "Untitled flashcard set",
    termCount: 180,
    author: "you",
    isDraft: true,
  },
  {
    type: "folder",
    title: "OS - Chương 1, 2, 3, Test",
  },
  {
    type: "set",
    title: "OS - Chương 1, 2, 3",
    termCount: 177,
    author: "manhlamabc",
    isDraft: false,
  },
  {
    type: "set",
    title: "Quản trị học đại cương",
    termCount: 111,
    author: "quizlette3542323",
    isDraft: false,
  },
];

const HomePage = () => {
  return (
    <>
      <h2 className="text-lg font-semibold text-slate-800 mb-4">Recents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {studySetsData.map((item, index) => (
          <StudyItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};
export default HomePage;
