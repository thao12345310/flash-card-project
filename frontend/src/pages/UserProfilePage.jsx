import { Navigate } from "react-router-dom";
const UserProfilePage = ({ currentUser }) => {
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800">Profile</h1>
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 flex items-center justify-center bg-teal-500 text-white text-3xl font-bold rounded-full">
            {currentUser.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="text-2xl font-bold">{currentUser.name}</h2>
            <p className="text-slate-500">{currentUser.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
