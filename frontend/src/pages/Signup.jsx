import { useState } from 'react';
import { auth, googleProvider } from '../firbase/firebase';
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import SignupIllustration from "../assets/SVG/login-illustration.svg"; // Replace with your SVG if available
import  googleLogo from "../assets/google-logo.png"
import bgBannner from "../assets/main-bg.png";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, {
                displayName: username
            });
            setSuccess('Signup successful! You can now log in.');
            setEmail('');
            setPassword('');
            setUsername('');
            navigate("/login");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = async () => {
        setError('');
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/dashboard"); // Adjust redirect path as needed
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div
            className="min-h-screen flex flex-col md:flex-row bg-gray-100"
            style={{ backgroundImage: `url(${bgBannner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Left: Illustration */}
            <div className="hidden md:flex flex-1 justify-center items-center p-10">
                <img
                    src={SignupIllustration}
                    alt="Signup Illustration"
                    className="max-w-md h-[40rem] w-full my-10"
                />
            </div>

            {/* Right: Signup Form */}
            <div className="flex-1 flex justify-center items-center py-8 px-3">
                <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm">
                    <h2 className="text-2xl font-bold text-center text-green-600 mb-6">Sign Up for BinBuddy</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-semibold text-gray-700">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                                required
                                placeholder='danny123'
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder='john@gmail.com'
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                placeholder='eg. 12345678'
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className=" cursor-pointer w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            {loading ? "Signing Up..." : "Sign Up"}
                        </button>
                    </form>

                    {/* Google Signup Button */}
                    <div className="mt-4">
                        <button
                            onClick={handleGoogleSignup}
                            className=" cursor-pointer w-full py-3 border border-gray-300 flex items-center justify-center gap-2 rounded-lg hover:bg-gray-100 transition"
                        >
                            <img src={googleLogo} alt="Google" className="h-5 w-5" />
                            <span className="text-sm font-medium text-gray-700">Sign up with Google</span>
                        </button>
                    </div>

                    {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                    {success && <p className="mt-4 text-green-500 text-center">{success}</p>}

                    <p className="text-center text-sm mt-4">
                        Already have an account?{" "}
                        <Link to="/login" className="text-green-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
