// src/components/CreateSetPage.jsx

import { useState } from "react";
import TermCard from "../components/common/TermCard";

const CreateSetPage = () => {
  // State cho tiêu đề và mô tả
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // State cho danh sách các thẻ. Mỗi thẻ là một object.
  // Bắt đầu với 3 thẻ mặc định để dễ hình dung
  const [cards, setCards] = useState([
    { id: 1, term: "", definition: "" },
    { id: 2, term: "", definition: "" },
    { id: 3, term: "", definition: "" },
  ]);

  // Hàm xử lý khi nội dung của một thẻ thay đổi
  const handleCardChange = (id, field, value) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        return { ...card, [field]: value };
      }
      return card;
    });
    setCards(newCards);
  };

  // Hàm thêm một thẻ mới vào cuối danh sách
  const handleAddCard = () => {
    const newCard = {
      // Dùng timestamp để có id duy nhất đơn giản
      id: Date.now(),
      term: "",
      definition: "",
    };
    setCards([...cards, newCard]);
  };

  // Hàm xóa một thẻ dựa trên id
  const handleDeleteCard = (id) => {
    // Lọc ra các thẻ không có id trùng với id cần xóa
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  // Hàm xử lý khi submit form
  const handleSubmit = () => {
    // Validation đơn giản: tiêu đề không được trống
    if (!title.trim()) {
      alert("Vui lòng nhập tiêu đề cho học phần.");
      return;
    }

    // Lọc ra các thẻ có cả thuật ngữ và định nghĩa
    const filledCards = cards.filter(
      (card) => card.term.trim() && card.definition.trim()
    );

    if (filledCards.length < 2) {
      alert("Bạn cần ít nhất 2 thẻ có đầy đủ thuật ngữ và định nghĩa.");
      return;
    }

    const studySet = {
      title,
      description,
      cards: filledCards,
    };

    // Trong thực tế, bạn sẽ gửi 'studySet' này đến server
    console.log("Dữ liệu học phần:", studySet);
    alert("Học phần đã được tạo thành công! (Kiểm tra console log)");
  };

  return (
    <div className="bg-slate-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">
            Tạo học phần mới
          </h1>
          <button
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-slate-400"
            disabled={
              !title.trim() ||
              cards.filter((c) => c.term.trim() && c.definition.trim()).length <
                2
            }
          >
            Hoàn tất
          </button>
        </div>

        {/* Form thông tin chung */}
        <div className="bg-white p-5 rounded-lg shadow-md mb-6 space-y-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-slate-700"
            >
              TIÊU ĐỀ
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Nhập tiêu đề, ví dụ 'Từ vựng tiếng Anh chủ đề Công nghệ'"
              className="mt-1 w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-slate-700"
            >
              MÔ TẢ (TÙY CHỌN)
            </label>
            <textarea
              id="description"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Thêm mô tả..."
              className="mt-1 w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Danh sách các thẻ */}
        <div className="space-y-4">
          {cards.map((card, index) => (
            <TermCard
              key={card.id}
              index={index}
              card={card}
              onCardChange={handleCardChange}
              onDeleteCard={handleDeleteCard}
            />
          ))}
        </div>

        {/* Nút thêm thẻ */}
        <div className="mt-6">
          <button
            onClick={handleAddCard}
            className="w-full py-4 bg-white text-blue-600 font-bold rounded-lg shadow-md hover:bg-slate-50 text-center"
          >
            + THÊM THẺ
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateSetPage;
