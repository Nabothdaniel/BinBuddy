import { useState, useEffect } from 'react';
import { auth } from '../firbase/firebase';
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { FaRecycle, FaUser, FaCog, FaSignOutAlt, FaTrash } from 'react-icons/fa';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (err) {
      console.error('Error logging out: ', err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="bg-green-700 text-white w-full md:w-1/4 p-5 flex flex-col space-y-6 md:min-h-screen">
        <Link to="/" className="text-2xl font-bold">BinBuddy</Link>
        <nav className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2 hover:text-green-200">
            <FaRecycle /> Home
          </Link>
          <Link to="/profile" className="flex items-center gap-2 hover:text-green-200">
            <FaUser /> Profile
          </Link>
          <Link to="/settings" className="flex items-center gap-2 hover:text-green-200">
            <FaCog /> Settings
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-left hover:text-red-300"
          >
            <FaSignOutAlt /> Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-green-50 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold text-green-800 mb-2 sm:mb-0">
            Hello, {user ? user.displayName || 'User' : '...'} 👋
          </h1>
          <p className="text-gray-600 text-sm">Welcome to your BinBuddy dashboard</p>
        </div>

        {/* User Info */}
        <section className="bg-white p-4 rounded-xl shadow-md mb-6">
          <h2 className="text-xl font-semibold text-green-700 mb-3">Your Info</h2>
          {user ? (
            <ul className="text-gray-700 space-y-1">
              <li><strong>Email:</strong> {user.email}</li>
              <li><strong>Name:</strong> {user.displayName || 'No name provided'}</li>
              <li><strong>User ID:</strong> {user.uid}</li>
            </ul>
          ) : (
            <p>Loading...</p>
          )}
        </section>

      </main>
    </div>
  );
};

export default Dashboard;
