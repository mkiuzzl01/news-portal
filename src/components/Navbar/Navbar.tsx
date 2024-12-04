"use client";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Menu,
  X,
  Search,
  UserRound,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const socialLinks = [
  {
    id: "01",
    icon: <Facebook size={20} />,
    link: "https://facebook.com",
  },
  {
    id: "02",
    icon: <Twitter size={20} />,
    link: "https://twitter.com",
  },
  {
    id: "03",
    icon: <Linkedin size={20} />,
    link: "https://linkedin.com",
  },
  {
    id: "04",
    icon: <Youtube size={20} />,
    link: "https://youtube.com",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    alert("Modal on");
  };
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
    { href: "/local news", label: "স্থানীয় খবর " },
  ];

  return (
    <nav className="bg-[#E0CCBE] py-2 shadow-lg top-0 sticky">
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
                className="py-4 px-2 hover:text-blue-500 transition duration-300 flex items-center space-x-2"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* icons */}
          <div className="flex justify-center items-center gap-4">
            {socialLinks?.map((link) => (
              <div key={link?.id} className="bg-gray-200 p-2 rounded-full">
                <Link href={link?.link}>
                  <div>{link?.icon}</div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center gap-2 border-s-2 p-4">
            <button onClick={handleModal}>
              <Search />
            </button>
            <button onClick={handleModal}>
              <UserRound />
            </button>
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
