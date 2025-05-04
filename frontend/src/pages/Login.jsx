import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firbase/firebase";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash,FaSpinner } from "react-icons/fa";
import LoginIllustration from "../assets/svg/login-illustration.svg";
import bgBannner from "../assets/main-bg.png";
import GoogleLogo from "../assets/google-logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Validate fields
    let valid = true;
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      valid = false;
    }
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      valid = false;
    }

    if (!valid) return;

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

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Google login failed");
      console.log(error.message)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row bg-gray-100"
      style={{ backgroundImage: `url(${bgBannner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Left: Illustration */}
      <div className="hidden md:flex flex-1 justify-center items-center p-10">
        <img src={LoginIllustration} alt="Login Illustration" className="max-w-md h-[40rem] w-full my-10" />
      </div>

      {/* Right: Login Form */}
      <div className="flex-1 flex justify-center items-center py-8 px-3">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Login to BinBuddy</h2>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) setEmailError(""); // Clear error on change
                }}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  emailError ? "border-red-500 focus:ring-red-500" : "focus:ring-green-500"
                }`}
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) setPasswordError(""); // Clear error on change
                }}
                className={`w-full px-3 py-2 border rounded-lg pr-10 focus:outline-none focus:ring-2 ${
                  passwordError ? "border-red-500 focus:ring-red-500" : "focus:ring-green-500"
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <button
  type="submit"
  disabled={loading}
  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
>
  {loading ? (
    <>
      <FaSpinner className="animate-spin h-5 w-5" />
      Signing in...
    </>
  ) : (
    "Login"
  )}
</button>
          </form>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t w-full" />
            <span className="mx-2 text-gray-400">or</span>
            <div className="border-t w-full" />
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full border border-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition"
          >
            <img src={GoogleLogo} alt="Google logo" className="w-5 h-5" />
            Continue with Google
          </button>

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
