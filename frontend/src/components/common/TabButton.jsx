const TabButton = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 -mb-px font-semibold border-b-2 ${
        active
          ? "border-blue-500 text-blue-600"
          : "border-transparent text-slate-500 hover:text-slate-700"
      }`}
    >
      {text}
    </button>
  );
};

export default TabButton;
