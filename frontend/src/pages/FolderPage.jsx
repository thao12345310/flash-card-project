import { useParams } from "react-router-dom";
import { BookCopy } from "lucide-react";
const FolderPage = () => {
  const { folderName } = useParams();
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-8">{folderName}</h1>
      <div className="bg-white border-2 border-dashed border-slate-300 rounded-lg p-12 text-center">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
            <BookCopy size={32} className="text-blue-500" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          Let's start building your folder
        </h2>
        <button className="py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-700 font-semibold text-white">
          Add study materials
        </button>
      </div>
    </div>
  );
};

export default FolderPage;
