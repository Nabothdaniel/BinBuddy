import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbase/firebase";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import LoginIllustration from "../assets/svg/login-illustration.svg";
import { useNavigate } from "react-router-dom";

// image
import bgBannner from "../assets/main-bg.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in successfully!");
      navigate("/dashboard");
    } catch (error) {
      if (error.code === "auth/user-not-found") toast.error("User not found");
      else if (error.code === "auth/wrong-password") toast.error("Incorrect password");
      else toast.error("Login failed! Try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-gray-100"
      style={{ backgroundImage: `url(${bgBannner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Left: SVG Illustration */}
      <div className="hidden md:flex flex-1 justify-center items-center p-10">
        <img
          src={LoginIllustration}
          alt="Login Illustration"
          className="max-w-md h-[40rem] w-full my-10" // Add top and bottom margin
        />
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex justify-center items-center py-8 px-3">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Login to BinBuddy</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>


          <p className="text-center text-sm mt-4">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-green-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
