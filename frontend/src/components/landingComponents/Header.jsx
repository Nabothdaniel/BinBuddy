import { useState } from 'react';
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiHome,
  FiSettings,
  FiInfo,
  FiPhone,
  FiLayers,
  FiDollarSign,
  FiList,
} from 'react-icons/fi';
import { FaAudible } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { LuLockKeyholeOpen } from "react-icons/lu";
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileDropdownOpen(false); // Close dropdown when toggling menu
  };

  return (
    <nav className="w-full md:w-auto bg-transparent p-4 md:py-[0.3rem] md:fixed md:top-0 left-0 right-4  md:bg-black md:z-[999]">
      {/* Inner Container */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#">
          <img src={Logo} className="h-[3rem] object-cover" alt="BinBuddy logo" />
        </a>

        {/* Hamburger for mobile */}
        <button
          type="button"
          className="md:hidden flex items-center p-2 w-10 h-10 justify-center text-gray-900 rounded-full hover:bg-gray-300"
          onClick={toggleMenu}
        >
          <FiMenu className="w-5 h-5" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 md:sahdow-sm bg-white/10 px-4 py-2 rounded shadow-md backdrop-blur-md text-white">
          <a href="#home" className="hover:bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2">
            <FiHome /> Home
          </a>
          <a href="#how-it-works" className="hover:bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2">
            <FiSettings /> How It Works
          </a>
          <a href="#Features" className="hover:bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2">
            <FaAudible /> Features
          </a>
          <a href="#why-choose-us" className="hover:bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2">
            <FiInfo /> Why Choose Us
          </a>


          <div className="relative">
            <button
              onClick={() => setIsDesktopDropdownOpen(prev => !prev)}
              className="hover:bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2"
            >
              <FiList /> Extra
              <FiChevronDown className={`ml-1 transition-transform ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDesktopDropdownOpen && (
              <ul className="absolute mt-2 bg-black/70 text-white rounded shadow-lg z-50 w-40 px-3 py-2">
                <li>
                  <a href="#developers" className=" hover:bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2">
                    <IoPersonOutline /> Developers
                  </a>
                </li>
                <li>
                  <a href="#waitlist" className=" hover:bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2">
                    <LuLockKeyholeOpen /> WaitList
                  </a>
                </li>

              </ul>
            )}

          </div>
          <Link to="/login" className="bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2">
            Login
          </Link>
          <Link to="/signup" className="bg-white/20 hover:text-green-400 hover:duration-250 px-3 py-1 rounded flex items-center gap-2">
            Signup
          </Link>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed md:hidden inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />

      {/* Mobile Sidebar */}
      <div
        className={`md:hidden block fixed  top-0 right-0 h-full w-64 bg-black/70 text-white p-4 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} backdrop-blur-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center pb-2">
          <span className="text-xl font-semibold text-transparent">Menu</span>
          <button onClick={toggleMenu}>
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <ul className="mt-4 space-y-4">
          <li>
            <a href="#home" className="hover:bg-emerald-700 px-4 py-2 rounded flex items-center gap-2">
            <FiHome /> Home
            </a>
          </li>
        
          <li>
            <a href="#how-it-works" className="hover:bg-emerald-700 px-4 py-2 rounded flex items-center gap-2">
            <FiSettings /> How It Works
            </a>
          </li>
          <li>
            <a href="#Features" className="hover:bg-emerald-700 px-4 py-2 rounded flex items-center gap-2">
            <FaAudible /> Features
            </a>
          </li>
          <li>
            <a href="#why-choose-us" className="hover:bg-emerald-700 px-4 py-2 rounded flex items-center gap-2">
            <FiInfo /> Why Choose Us
            </a>
          </li>
          <li>
            <button
              onClick={() => setIsMobileDropdownOpen(prev => !prev)}
              className="w-full text-left flex items-center justify-between hover:bg-emerald-700 px-4 py-2 rounded"
            >
              <span className="flex items-center gap-2"><FiList /> Extra</span>
              <FiChevronDown className={`transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li>
                  <a href="#developers" className="hover:bg-gray-600 px-2 py-1 rounded flex items-center gap-2">
                  <IoPersonOutline /> Developers
                  </a>
                </li>
                <li>
                  <a href="#waitlist" className="hover:bg-gray-600 px-2 py-1 rounded flex items-center gap-2">
                  <LuLockKeyholeOpen /> WaitList
                  </a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="mt-36 flex  flex-col gap-4">
        <Link to="/login" className="bg-white/20 hover:bg-emerald-700 text-white text-center hover:duration-250 px-3 py-2 rounded w-full">
            Login
          </Link>
          <Link to="/signup" className="bg-white/20 hover:bg-emerald-700 text-white text-center hover:duration-250 px-3 py-2 rounded ">
            Signup
          </Link>
        </div>
      </div>

    </nav>
  );
};

export default Header;
