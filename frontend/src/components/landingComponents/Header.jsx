import { useState } from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
//import { FaChevronRight } from 'react-icons/fa';

import Logo from '../../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          className={`fixed top-0 right-0 z-40 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Menu</span>
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
              <a href="#" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Home
              </a>
            </li>
            <li>
              <button className="flex justify-between items-center w-full px-4 py-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                Dropdown <FiChevronDown />
              </button>
              {/* Nested dropdown logic can be added here */}
              <ul>
                <li>
                  <a href="#">nested 1</a>
                </li>
              </ul>
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
        <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500"
              >
                Dropdown <FiChevronDown className="ml-2" />
              </button>
              {/* Add dropdown content here */}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500"
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