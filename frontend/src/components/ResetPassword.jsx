import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ResetPassword() {
  const { token } = useParams(); // 🔑 token from URL
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleReset = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match 😢");
      return;
    }

    try {
      await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        { password }
      );

      alert("Password updated successfully 💖");
      navigate("/"); // back to login
    } catch (err) {
      alert("Error resetting password 😢");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-80">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-6 animate-pulse">
          Reset Password 
        </h2>

        {/* New Password */}
        <input
          type="password"
          placeholder="New Password"
          className="w-full p-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleReset}
          className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white p-2 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md"
        >
          Update Password
        </button>

        {/* Back */}
        <p className="text-center mt-4 text-sm">
          <span
            onClick={() => navigate("/")}
            className="text-purple-500 cursor-pointer hover:underline"
          >
            Back to Login
          </span>
        </p>
      </div>
    </div>
  );
}