import { useState } from "react";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await loginUser({ email, password });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch {
      alert("Login failed 😢");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-80 hover:scale-105 transition">

        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6 animate-pulse">
          Login 
        </h2>

        <input
          className="w-full p-2 mb-3 border rounded-xl focus:ring-2 focus:ring-pink-300"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mb-4 border rounded-xl focus:ring-2 focus:ring-purple-300"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white p-2 rounded-xl hover:from-pink-500 hover:to-purple-500">
          Login 
        </button>

        <p className="text-center mt-3 text-sm">
          <span onClick={() => navigate("/forgot")} className="text-purple-500 cursor-pointer hover:underline">
            Forgot Password?
          </span>
        </p>

        <p className="text-center mt-2 text-sm">
          No account?{" "}
          <span onClick={() => navigate("/register")} className="text-purple-500 cursor-pointer hover:underline">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}