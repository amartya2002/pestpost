"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import MobileNav from './mobile-nav/MobileNav';

const navData = {
  logo: {
    text: "Company Logo",
    link: "/"
  },
  links: [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Services", href: "/services" },
    { title: "Contact", href: "/contact" }
  ],
  buttons: [
    { text: "Get a quote", href: "/signin" }
  ]
};

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-stone-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href={navData.logo.link} className="text-black font-bold text-xl">{navData.logo.text}</a>
          </div>
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {navData.links.map((link, index) => (
                <a key={index} href={link.href} className="text-black hover:text-red-500 duration-300 px-3 py-2 rounded-md text-sm font-medium">{link.title}</a>
              ))}
            </div>
          </div>
          {/* Buttons */}
          <div className="hidden md:flex md:items-center md:ml-6">
            {navData.buttons.map((button, index) => (
              <a key={index} href={button.href} className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm py-2 px-4 rounded shadow">{button.text}</a>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            {/* <button onClick={toggleMobileMenu} className="text-black hover:bg-gray-700 inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
            </button> */}
            <MobileNav/>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navData.links.map((link, index) => (
            <a key={index} href={link.href} className="text-black hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">{link.title}</a>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            {navData.buttons.map((button, index) => (
              <a key={index} href={button.href} className="bg-[#CC092F] hover:bg-gray-100 text-white py-2 px-4 shadow">{button.text}</a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
