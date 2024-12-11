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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import logo from "@public/asset/dailyTimes24.png";

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
  const pathname = usePathname();

  const handleModal = () => {
    alert("Modal on");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { href: "/", label: "হোম " },
    { href: "/bangladesh", label: "বাংলাদেশে " },
    { href: "/international", label: "আন্তর্জাতিক" },
    { href: "/politics", label: "রাজনীতি" },
    { href: "/economy", label: "অর্থনীতি" },
    { href: "/technology", label: "প্রযুক্তি" },
    { href: "/sports", label: "খেলাধুলা" },
    { href: "/environment", label: "পরিবেশ" },
    { href: "/entertainment", label: "বিনোদন" },
  ];

  return (
    <nav className="bg-blue-500 py-2 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
            {/* logo */}
            <div className="lg:hidden block">
              <Image
                src={logo?.src}
                alt="dailyTimes24"
                width={100}
                height={100}
                placeholder="blur"
                blurDataURL={logo?.src}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`${
                  pathname === item?.href ? "border-b-2 border-b-black" : ""
                } flex justify-between items-center gap-4`}
              >
                <span className="text-white">{item.label}</span>
              </Link>
            ))}
          </div>
          {/* Icons */}
          <div className="hidden lg:flex justify-center items-center gap-4">
            {socialLinks?.map((link) => (
              <div key={link?.id} className="bg-blue-100 p-2 rounded-full">
                <Link href={link?.link}>
                  <div className="text-blue-900">{link?.icon}</div>
                </Link>
              </div>
            ))}
          </div>

          {/* Search and User Buttons */}
          <div className="flex justify-between items-center gap-2 border-s-2 p-4">
            <button onClick={handleModal} className="text-white">
              <Search />
            </button>
            <button onClick={handleModal} className="text-white">
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
                  className={`${
                    pathname === item?.href ? "border-b-2 border-red-400" : ""
                  } flex justify-between items-center gap-4`}
                >
                  <span className="text-white">{item.label}</span>
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
