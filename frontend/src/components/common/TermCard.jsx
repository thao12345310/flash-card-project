// src/components/TermCard.jsx

import { Trash2 } from "lucide-react";

const TermCard = ({ index, card, onCardChange, onDeleteCard }) => {
  return (
    <div className="p-5 bg-white rounded-lg shadow-md flex items-start gap-4">
      <div className="text-lg font-bold text-slate-500 pt-3">{index + 1}</div>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Term Input */}
        <div>
          <label
            htmlFor={`term-${card.id}`}
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            THUẬT NGỮ
          </label>
          <textarea
            id={`term-${card.id}`}
            rows="2"
            value={card.term}
            onChange={(e) => onCardChange(card.id, "term", e.target.value)}
            placeholder="Nhập thuật ngữ"
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Definition Input */}
        <div>
          <label
            htmlFor={`definition-${card.id}`}
            className="block text-sm font-medium text-slate-700 mb-1"
          >
            ĐỊNH NGHĨA
          </label>
          <textarea
            id={`definition-${card.id}`}
            rows="2"
            value={card.definition}
            onChange={(e) =>
              onCardChange(card.id, "definition", e.target.value)
            }
            placeholder="Nhập định nghĩa"
            className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
      <button
        onClick={() => onDeleteCard(card.id)}
        className="text-slate-500 hover:text-red-600 pt-3"
        aria-label="Xóa thẻ"
      >
        <Trash2 size={24} />
      </button>
    </div>
  );
};

export default TermCard;
