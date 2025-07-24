import { BookCopy } from "lucide-react";
const LibraryListItem = ({ title, termCount, author }) => (
  <div className="bg-white border-b border-slate-200 p-4 flex items-center gap-4 hover:bg-slate-50 cursor-pointer">
    <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg">
      <BookCopy className="text-blue-600" />
    </div>
    <div className="flex-1">
      <h3 className="font-semibold text-slate-800">{title}</h3>
      <div className="text-sm text-slate-500 flex items-center gap-4 mt-1">
        <span>{termCount} Terms</span>
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-teal-500 rounded-full text-xs text-white flex items-center justify-center font-bold">
            T
          </div>
          <span>{author}</span>
        </div>
      </div>
    </div>
  </div>
);

export default LibraryListItem;
