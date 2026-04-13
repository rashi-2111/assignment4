import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/forgot-password",
        { email }
      );

      navigate(`/reset/${res.data.token}`); // for testing
    } catch (err) {
      alert("Error sending reset link 😢");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-80">

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-6 animate-pulse">
          Forgot Password 
        </h2>

        {/* Input */}
        <input
          type="email"
          placeholder="Enter email"
          className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white p-2 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md"
        >
          Send Reset Link
        </button>

        {/* Back to login */}
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