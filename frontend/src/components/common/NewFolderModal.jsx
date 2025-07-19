import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Folder } from "lucide-react";
const NewFolderModal = ({ isOpen, onClose }) => {
  const [folderName, setFolderName] = useState("");
  const navigate = useNavigate();

  const handleCreate = () => {
    if (!folderName.trim()) return;
    onClose();
    navigate(`/folder/${folderName.trim()}`);
    setFolderName("");
  };

  if (!isOpen) return null;

  return (
    // THAY ĐỔI: Lớp nền mờ và sáng hơn
    <div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 w-full max-w-sm">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 flex items-center justify-center bg-slate-100 rounded-full">
            <Folder size={32} className="text-slate-500" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-center text-slate-800 mb-4">
          Name your folder
        </h3>
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="e.g. Biology Unit 3"
          className="w-full border border-slate-300 rounded-md p-3 text-center focus:ring-2 focus:ring-blue-500 outline-none"
          autoFocus
        />
        <div className="flex gap-4 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-2 px-4 rounded-md bg-slate-200 hover:bg-slate-300 font-semibold text-slate-700"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={!folderName.trim()}
            className="flex-1 py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 font-semibold text-white disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewFolderModal;
