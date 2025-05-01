import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
//import { FaChevronRight } from 'react-icons/fa';

import Logo from '../../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={Logo}
            className="h-[3rem] w-26"
            alt="BinBuddy logo"
          />
        </a>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <FiMenu className="w-5 h-5" />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 z-40 w-64 h-full  bg-white/80 rounded-l-md   text-black backdrop-blur-md transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
            <span className="text-xl font-semibold text-gray-900 dark:text-black">Menu</span>
            <button
              type="button"
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-200 hover:text-red-500"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          <ul className="flex flex-col p-4 space-y-2">
            <li>
              <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-500">
                Home
              </a>
            </li>
            <li>
              <button
                className="flex justify-between items-center w-full px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleDropdown}
              >
                Dropdown <FiChevronDown className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Nested dropdown logic */}
              {isDropdownOpen && (
                <ul className="pl-6 mt-2 space-y-1">
                  <li>
                    <a href="#" className="block px-2 py-1 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      Nested 1
                    </a>
                  </li>
                  {/* Add more nested items here */}
                </ul>
              )}
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop Menu */}
        <div className="hidden w-full md:block md:w-auto " id="navbar-multi-level">
          <ul className="flex flex-col   mt-4 bg-white/10  text-black rounded-sm py-2 px-4 shadow-md md:flex-row md:gap-10 md:mt-0 backdrop-blur-md">
            <li>
              <a
                href="#"
                className="block py-[5px] px-3 text-white hover:bg-white/20 hover:text-black rounded-sm md:bg-transparent md:text-white "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <button
                className="flex items-center justify-between w-full  py-[5px] px-3 text-white hover:bg-white/20 hover:text-black"
                onClick={toggleDropdown}
              >
                Dropdown <FiChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Dropdown content */}
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded z-50">
                  <li>
                    <a
                      href="#"
                      className="block  w-full  py-[5px] px-3 text-white hover:bg-white/20 hover:text-black"
                    >
                      Nested 1
                    </a>
                  </li>
                  {/* Add more dropdown items here */}
                </ul>
              )}
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between w-full rounded-md  py-[5px] px-3 text-white hover:bg-white/20 hover:text-black"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between w-full rounded-md  py-[5px] px-3 text-white hover:bg-white/20 hover:text-black"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center justify-between w-full rounded-md  py-[5px] px-3 text-white hover:bg-white/20 hover:text-black"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;