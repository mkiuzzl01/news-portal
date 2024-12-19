"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Search,
  UserRound,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import logo from "@public/asset/dailyTimes24.png";
import { usePathname } from "next/navigation";

interface SocialLink {
  id: string;
  icon: React.ReactNode;
  link: string;
}

interface NavItem {
  href: string;
  label: string;
  nested?: Array<{ href: string; label: string }>;
}

const socialLinks: SocialLink[] = [
  { id: "01", icon: <Facebook size={20} />, link: "https://facebook.com" },
  { id: "02", icon: <Twitter size={20} />, link: "https://twitter.com" },
  { id: "03", icon: <Linkedin size={20} />, link: "https://linkedin.com" },
  { id: "04", icon: <Youtube size={20} />, link: "https://youtube.com" },
];

const navItems: NavItem[] = [
  { href: "/", label: "হোম" },
  { href: "/national", label: "জাতীয়" },
  { href: "/politics", label: "রাজনীতি" },
  { href: "/international", label: "আন্তর্জাতিক" },
  { href: "/sports", label: "খেলাধুলা" },
  { href: "/entertainment", label: "বিনোদন" },
  { href: "/economy", label: "অর্থনীতি" },
  { href: "/technology", label: "প্রযুক্তি" },
  { href: "/tourism", label: "পর্যটন" },
  {
    href: "/misc",
    label: "বিবিধ",
    nested: [
      { href: "/health", label: "স্বাস্থ্য" },
      { href: "/education", label: "শিক্ষা" },
      { href: "/religion", label: "ধর্ম" },
    ],
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname: string = usePathname();

  return (
    <nav className="bg-blue-700 py-3 shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Daily Times 24" width={120} height={50} />
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-6">
              {navItems.map((item) =>
                item.nested ? (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger className="text-white hover:text-gray-300">
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="bg-white rounded-md shadow-lg">
                      <ul className="p-4 grid gap-2">
                        {item.nested.map((nestedItem) => (
                          <ListItem
                            key={nestedItem.href}
                            title={nestedItem.label}
                            href={nestedItem.href}
                          />
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`text-white hover:text-gray-300 transition",
                         ${
                           pathname === item?.href && "border-b-2 border-white"
                         }`}
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              className="bg-white rounded-full pl-4 pr-10 py-2 text-gray-700 shadow-md focus:ring-2 focus:ring-blue-400"
              placeholder="Search..."
            />
            <button
              onClick={() => alert("Search clicked")}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-600 hover:text-blue-800"
            >
              <Search size={20} />
            </button>
          </div>

          {socialLinks.map((link) => (
            <Link key={link.id} href={link.link}>
              <div className="bg-white p-2 rounded-full shadow text-blue-600 hover:text-blue-800 transition">
                {link.icon}
              </div>
            </Link>
          ))}
          <div>
            <button
              onClick={() => alert("User clicked")}
              className="text-white"
            >
              <UserRound size={20} />
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-blue-600 text-white mt-2 rounded-lg shadow-lg">
          <ul className="space-y-2 py-4 px-6">
            {navItems.map((item) =>
              item.nested ? (
                <li key={item.href}>
                  <p className="font-semibold">{item.label}</p>
                  <ul className="ml-4 space-y-1">
                    {item.nested.map((nestedItem) => (
                      <li key={nestedItem.href}>
                        <Link
                          href={nestedItem.href}
                          className="text-gray-300 hover:underline"
                        >
                          {nestedItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block hover:underline text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  href: string;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ title, href, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className="block p-2 text-gray-800 hover:bg-blue-100 rounded"
          href={href}
          {...props}
        >
          {title}
        </a>
      </NavigationMenuLink>
    </li>
  )
);

ListItem.displayName = "ListItem";

export default Navbar;
