import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import Logo from '../../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMobileDropdownOpen(false); // Close dropdown when toggling menu
  };

  return (
    <nav className="w-full bg-transparent p-4">
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
          {isMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 bg-white/10 px-4 py-2 rounded shadow-md backdrop-blur-md text-white">
          <a href="#" className="hover:bg-white/20 hover:text-black px-3 py-1 rounded">Home</a>

          <div className="relative">
            <button
              onClick={() => setIsDesktopDropdownOpen(prev => !prev)}
              className="flex items-center hover:bg-white/20 hover:text-black px-3 py-1 rounded"
            >
              Dropdown <FiChevronDown className={`ml-2 transition-transform ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDesktopDropdownOpen && (
              <ul className="absolute mt-2 bg-white text-black rounded shadow-lg z-50 w-40">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Nested 1</a>
                </li>
              </ul>
            )}
          </div>

          <a href="#" className="hover:bg-white/20 hover:text-black px-3 py-1 rounded">Services</a>
          <a href="#" className="hover:bg-white/20 hover:text-black px-3 py-1 rounded">Pricing</a>
          <a href="#" className="hover:bg-white/20 hover:text-black px-3 py-1 rounded">Contact</a>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-black/70 text-white p-4 z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center  pb-2">
          <span className="text-xl font-semibold text-transparent">Menu</span>
          <button onClick={toggleMenu}>
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <ul className="mt-4 space-y-4">
          <li><a href="#" className="block hover:bg-emerald-700 px-4 py-2 rounded">Home</a></li>
          <li>
            <button
              onClick={() => setIsMobileDropdownOpen(prev => !prev)}
              className="w-full text-left flex items-center justify-between hover:bg-emerald-700 px-4 py-2 rounded"
            >
              Dropdown <FiChevronDown className={`transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isMobileDropdownOpen && (
              <ul className="pl-4 mt-2 space-y-2">
                <li><a href="#" className="block hover:bg-gray-600 px-2 py-1 rounded">Nested 1</a></li>
              </ul>
            )}
          </li>
          <li><a href="#" className="block hover:bg-emerald-700 px-4 py-2 rounded">Services</a></li>
          <li><a href="#" className="block hover:bg-emerald-700 px-4 py-2 rounded">Pricing</a></li>
          <li><a href="#" className="block hover:bg-emerald-700 px-4 py-2 rounded">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
