import { useState, useEffect } from 'react';
import { auth } from '../firbase/firebase';  // Import your Firebase auth
import { signOut } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);  // Listen to auth state changes
    return () => unsubscribe();  // Cleanup when component unmounts
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate('/login'); // Redirect to login page
    } catch (err) {
      console.error('Error logging out: ', err.message);
    }
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-5 h-screen">
        <Link to='/' className="text-2xl font-bold mb-5">Dashboard</Link>
        <ul>
          <li className="mb-4">
            <a href="/" className="text-lg">Home</a>
          </li>
          <li className="mb-4">
            <a href="/profile" className="text-lg">Profile</a>
          </li>
          <li className="mb-4">
            <a href="/settings" className="text-lg">Settings</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold">Welcome, {user ? user.displayName : 'User'}!</h1>
          <button 
            onClick={handleLogout} 
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">User Information</h2>
          {user ? (
            <div>
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>Name:</strong> {user.displayName || 'No name provided'}</p>
              <p><strong>UID:</strong> {user.uid}</p>
            </div>
          ) : (
            <p>Loading user info...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
