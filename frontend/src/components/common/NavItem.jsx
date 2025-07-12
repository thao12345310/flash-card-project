// Navigation Item for the Sidebar
const NavItem = ({ icon, text, active, isButton }) => {
  const baseClasses =
    "flex items-center w-full text-left p-3 rounded-lg transition-colors duration-200";
  const activeClasses = active
    ? "bg-blue-100 text-blue-600 font-semibold"
    : "text-slate-600 hover:bg-slate-100";
  const buttonClasses = isButton ? "text-slate-600 hover:bg-slate-100" : "";

  return (
    <a href="#" className={`${baseClasses} ${activeClasses} ${buttonClasses}`}>
      {icon}
      <span className="ml-3">{text}</span>
    </a>
  );
};

export default NavItem;
