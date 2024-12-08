"use client";
import BreakingNews from "@/util/BreakingNews";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

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

const Footer = () => {
  return (
    <footer>
      <div className="sticky bottom-0 z-50">
        <BreakingNews />
      </div>
      <div className="bg-[#141E46] text-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Top Section: Logo and Social Links */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <div>
              <h1 className="text-3xl font-extrabold text-white">
                Daily Time <span className="text-red-500">24</span>
              </h1>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-red-500 p-2 rounded-full transition-all"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Middle Section: Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-red-500">
                    সর্বশেষ
                  </Link>
                </li>
                <li>
                  <Link href="/politics" className="hover:text-red-500">
                    রাজনীতি
                  </Link>
                </li>
                <li>
                  <Link href="/sport" className="hover:text-red-500">
                    খেলা
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/life" className="hover:text-red-500">
                    জীবনযাপন
                  </Link>
                </li>
                <li>
                  <Link href="/health" className="hover:text-red-500">
                    স্বাস্থ
                  </Link>
                </li>
                <li>
                  <Link href="/economy" className="hover:text-red-500">
                    ইকোনোমি
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/world" className="hover:text-red-500">
                    বিশ্ব খবর
                  </Link>
                </li>
                <li>
                  <Link href="/local" className="hover:text-red-500">
                    স্থানীয় খবর
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li>ফোন: 0123456789</li>
                <li>ই-মেইল: demo@gmail.com</li>
                <li>ঠিকানা: ব্লক এ, বসুন্ধরা আবাসিক, </li>
                <li>ভাটারা,ঢাকা-১২১২</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Footer Info */}
          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Daily Time 24. All Rights
              Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
