import { useState } from "react";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // 🆕
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await registerUser({ name, email, phone, password }); // 🆕
      alert("Registered successfully 💖");
      navigate("/");
    } catch (err) {
      alert("Registration failed 😢");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100">
      
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-80 transition-all duration-500 hover:scale-105">
        
        <h2 className="text-3xl font-bold text-center text-purple-500 mb-6 animate-pulse">
          Register 
        </h2>

        {/* Name */}
        <input
          className="w-full p-2 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Email */}
        <input
          className="w-full p-2 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Phone 🆕 */}
        <input
          className="w-full p-2 mb-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
          placeholder="Phone"
          onChange={(e) => setPhone(e.target.value)}
        />

        {/* Password */}
        <input
          className="w-full p-2 mb-4 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-300 transition"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleRegister}
          className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white p-2 rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md">
          Register 
        </button>

        {/* Redirect */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <span
            className="text-purple-500 cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Login
          </span>
        </p>            
      </div>
    </div>
  );
}