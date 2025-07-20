import { Link } from "react-router-dom";
// Navigation Item for the Sidebar
const NavItem = ({ icon, text, active, isButton, onClick, to }) => {
  const baseClasses =
    "flex items-center w-full text-left p-3 rounded-lg transition-colors duration-200";
  const activeClasses = active
    ? "bg-blue-100 text-blue-600 font-semibold"
    : "text-slate-600 hover:bg-slate-100";

  const finalClasses = `${baseClasses} ${activeClasses}`;

  const content = (
    <>
      {icon}
      <span className="ml-3 text-sm font-semibold">{text}</span>
    </>
  );

  if (isButton) {
    return (
      <button onClick={onClick} className={finalClasses}>
        {content}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={finalClasses}>
        {content}
      </Link>
    );
  }

  return (
    <a href="#" className={finalClasses}>
      {content}
    </a>
  );
};
export default NavItem;
