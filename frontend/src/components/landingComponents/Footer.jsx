import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div>
          <div className="flex items-center mb-2">
            <img src={Logo} alt="binbuddy logo" className="w-26 h-16 object-cover"/>
          </div>
          <p className="text-[15px] md:text-[17px]">
            Your smart waste sorting assistant. Make recycling easy, efficient, and fun!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-600">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/about" className="hover:underline hover:text-green-600">About Us</a></li>
            <li><a href="/how-it-works" className="hover:underline hover:text-green-600">How It Works</a></li>
            <li><a href="/contact" className="hover:underline hover:text-green-600">Contact</a></li>
            <li><a href="/privacy" className="hover:underline hover:text-green-600">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-green-600">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-green-700"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-green-700"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-green-700"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-900">
        &copy; {new Date().getFullYear()} BinBuddy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
