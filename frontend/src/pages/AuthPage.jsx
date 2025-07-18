import React, { useState } from "react";
import { Link } from "react-router-dom";

// ====================================================================================
// 1. Dữ liệu giả lập
// ====================================================================================
const mockUser = {
  email: "user@example.com",
  password: "password123",
  name: "Test User",
};

const AuthPage = ({ onLoginSuccess, isSignup = false }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isSignup) {
      // Logic cho trang Đăng ký
      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }
      // Trong ứng dụng thật, bạn sẽ gửi thông tin này đến server để tạo tài khoản.
      // Ở đây, chúng ta giả lập bằng cách tạo một user mới và đăng nhập.
      const newUser = { name, email, password };
      onLoginSuccess(newUser);
    } else {
      // Logic cho trang Đăng nhập
      if (email === mockUser.email && password === mockUser.password) {
        onLoginSuccess(mockUser);
      } else {
        setError("Invalid email or password. Please try again.");
      }
    }
  };

  const title = isSignup ? "Create your account" : "Log in";
  const buttonText = isSignup ? "Sign up" : "Log in";

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-slate-800">
          {title}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignup && (
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-700"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          {isSignup && (
            <div>
              <label
                htmlFor="confirm-password"
                className="text-sm font-medium text-slate-700"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {buttonText}
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-slate-500">
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <Link
            to={isSignup ? "/login" : "/signup"}
            className="font-medium text-blue-600 hover:text-blue-500 ml-1"
          >
            {isSignup ? "Log in" : "Sign up"}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default AuthPage;
