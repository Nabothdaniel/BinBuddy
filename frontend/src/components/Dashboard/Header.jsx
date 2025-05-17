import { useState, useEffect, useRef } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell, FaChevronDown } from 'react-icons/fa';


export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const auth = getAuth();

  // Fetch user from Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          name: firebaseUser.displayName || 'User',
          avatar: firebaseUser.photoURL || '',
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, [auth]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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

  const getInitials = (name) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  return (
    <header className="w-full sticky top-0 right-0 left-0  bg-white px-4 md:px-8 py-4 flex justify-between items-center  z-10 md:z-50">
      {/* Search (Desktop) */}
      <div className="hidden md:flex items-center w-full max-w-md bg-gray-100 px-3 py-2 rounded-full">
        <FaSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search by name or date of prompt..."
          className="bg-transparent outline-none w-full text-sm text-gray-700"
        />
      </div>

      {/* Mobile Search */}
      <div className="md:hidden">
        <button onClick={() => navigate('/search')}>
          <FaSearch className="text-gray-600 text-xl" />
        </button>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4 ml-4 relative" ref={dropdownRef}>
    

        <Link to='/dashboard/notifications' className="relative">
          <FaBell className="text-gray-600 text-lg" />
          <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-2.5 h-2.5" />
        </Link>

        {/* Profile */}
        {user && (
          <div
            className="flex items-center space-x-2 cursor-pointer relative"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt="User avatar"
                className="w-9 h-9 rounded-full object-cover"
              />
            ) : (
              <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-purple-500 to-indigo-500">
                {getInitials(user.name)}
              </div>
            )}
            <p className="text-sm font-medium text-gray-700">{user.name}</p>
            <FaChevronDown
              className={`text-gray-600 text-sm transition-transform duration-300 ${
                dropdownOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        )}

        {/* Dropdown */}
        <div
          className={`absolute top-16 right-0 bg-white border shadow-lg rounded-md py-2 w-40 transition-all duration-300 z-[1000] ${
            dropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
          }`}
        >
          <Link to='/dashboard/profile' className="w-full block text-left px-4 py-2 text-sm hover:bg-gray-100">Profile</Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
