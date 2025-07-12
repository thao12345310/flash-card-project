import { Copy, User, Folder } from "lucide-react";
// Component cho từng mục (bộ thẻ hoặc thư mục)
const StudyItem = ({ item }) => {
  const isSet = item.type === "set";

  // Lớp CSS cơ bản cho item
  const baseClasses =
    "bg-white p-5 rounded-lg border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all duration-200 flex items-center gap-5 cursor-pointer";

  return (
    <div className={baseClasses}>
      {/* Icon */}
      <div
        className={`
          flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg
          ${isSet ? "bg-blue-100 text-blue-600" : "bg-slate-200 text-slate-600"}
          ${item.isDraft ? "opacity-50" : ""}
        `}
      >
        {isSet ? <Copy size={24} /> : <Folder size={24} />}
      </div>

      {/* Nội dung */}
      <div className="flex-grow">
        <h3 className="font-semibold text-slate-900 truncate">{item.title}</h3>
        {isSet ? (
          <div className="text-sm text-slate-500 mt-1 flex items-center flex-wrap gap-x-2">
            {item.isDraft && (
              <span className="font-semibold text-yellow-600">Draft</span>
            )}
            <span>{item.termCount} terms</span>
            <span className="hidden sm:inline">・</span>
            <div className="flex items-center gap-1.5">
              <User size={14} />
              <span>by {item.author}</span>
            </div>
          </div>
        ) : (
          <p className="text-sm text-slate-500 mt-1">Folder</p>
        )}
      </div>
    </div>
  );
};

export default StudyItem;
