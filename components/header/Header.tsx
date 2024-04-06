"use client";
import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const navLinks = [
    { title: "Features", href: "#_" },
    { title: "About", href: "#_" },
  ];

  return (
    <div className="justify-center w-full mx-auto bg-gray-100">
      <div className="flex flex-col w-full px-8 py-2 mx-auto md:px-12 md:items-center md:justify-between md:flex-row lg:px-32 max-w-7xl">
        <div className="flex flex-row items-center justify-between text-black">
          <a
            className="inline-flex items-center gap-3 text-xl font-bold tracking-tight text-black"
            href="/"
          >
            <span> ❖ </span>
            <span>Windstatic</span>
          </a>
          <button
            title="Toggle"
            className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
            onClick={handleToggle}
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {open ? (
                <>
                  <path
                    className="hidden"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6"
                  />
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </>
              ) : (
                <>
                  <path
                    className="inline-flex"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                  <path
                    className="hidden"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </>
              )}
            </svg>
          </button>
        </div>
        <nav
          className={`flex-col items-center flex-grow ${
            open ? "flex" : "hidden"
          } gap-3 p-4 px-5 text-sm font-medium text-gray-500 md:px-0 md:pb-0 md:flex md:justify-start md:flex-row lg:p-0 md:mt-0`}
        >
          {navLinks.map((link, title) => (
            <Link
              className="hover:text-black focus:outline-none focus:text-gray-500 md:ml-auto"
              href={link}
            >
              {title}
            </Link>
          ))}

          <a
            className="inline-flex items-center justify-center w-full h-8 gap-3 px-5 py-3 text-xs font-medium text-white duration-200 bg-gray-900 rounded-lg md:w-auto hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-black"
            href="#_"
            role="button"
          >
            Button
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
