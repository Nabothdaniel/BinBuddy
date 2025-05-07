import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firbase/firebase';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  FaSignOutAlt, FaCog, FaBell, FaSearch, FaUser, FaBars, FaTimes,
} from 'react-icons/fa';
import { HiOutlineViewGrid } from 'react-icons/hi';

import bgBanner from '../assets/main-bg.png'
import Footer from '../components/landingComponents/Footer';
import Header from '../components/Dashboard/Header';

const Dashboard = () => {
  const [setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
      toast.success('logged out succesfully')
    } catch (err) {
      console.error('Error logging out: ', err.message);
      toast.error('logout error')
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 object-cover " style={{ backgroundImage: `url(${bgBanner})` }}>
      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 bg-white shadow-lg border-r transform transition-transform duration-200 ease-in-out ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } md:relative md:translate-x-0 md:flex md:flex-col md:w-64`}
      >
        <div className="flex flex-col justify-between h-full p-4">
          <div>
            <div className="flex justify-between items-center mb-6">
              <Link to='/' className="text-2xl font-bold text-green-700">BinBuddy</Link>
              <button
                className="md:hidden text-gray-500"
                onClick={() => setSidebarOpen(false)}
              >
                <FaTimes />
              </button>
            </div>


            <nav className="space-y-4 text-gray-700 my-10 ">
              <Link to="/dashboard/home" className="flex items-center gap-3 hover:text-green-600">
                <HiOutlineViewGrid /> Dashboard
              </Link>
              <Link to="/dashboard/upload" className="flex items-center gap-3 hover:text-green-600">
                <FaUser /> Upload
              </Link>
              <Link to="/settings" className="flex items-center gap-3 hover:text-green-600">
                <FaCog /> Settings
              </Link>
            </nav>
          </div>

          <button onClick={handleLogout} className="flex items-center gap-2 text-red-500 hover:text-red-600">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Mobile Navbar */}
        <header className="md:hidden bg-white shadow-sm px-4 py-3 flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 text-xl"
          >
            <FaBars />
          </button>
          <Link to='/' className="text-lg font-bold text-green-700">Binbudy</Link >
          <div className="flex items-center gap-4">
            <FaBell className="text-gray-500" />
            <FaUser className="text-gray-500" />
          </div>
        </header>

        {/* Desktop Header */}
        <Header />

        {/* Body */}
        <main className="p-4 md:p-6 space-y-6">
          {/* Quick Actions */}


          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
