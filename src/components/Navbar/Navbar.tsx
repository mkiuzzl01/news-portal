"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", label: "সর্বশেষ" },
    { href: "/politics", label: "রাজনীতি" },
    { href: "/sports", label: "খেলা" },
    { href: "/entertainment", label: "বিনোদন" },
    { href: "/fashion", label: "জীবনযাপন" },
    { href: "/health", label: "স্বাস্থ" },
    { href: "/economy ", label: "ইকোনোমি" },
    { href: "/world news", label: "বিশ্ব খবর" },
    { href: "/local news", label: "স্থানীয়  খবর " },
  ];

  return (
    <nav className="bg-white shadow-lg">
      <div className="lg:w-3/4 m-auto">
        <div className="flex justify-between">
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-4 px-2 text-gray-500 hover:text-blue-500 transition duration-300 flex items-center space-x-2"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-500 hover:bg-blue-50 hover:text-blue-500 block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                >
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
