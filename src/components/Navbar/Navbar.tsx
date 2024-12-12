"use client";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
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

type SocialLink = {
  id: string;
  icon: JSX.Element;
  link: string;
};

const socialLinks: SocialLink[] = [
  { id: "01", icon: <Facebook size={20} />, link: "https://facebook.com" },
  { id: "02", icon: <Twitter size={20} />, link: "https://twitter.com" },
  { id: "03", icon: <Linkedin size={20} />, link: "https://linkedin.com" },
  { id: "04", icon: <Youtube size={20} />, link: "https://youtube.com" },
];

type NavItem = {
  href: string;
  label: string;
  nested?: NavItem[];
};

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
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();

  return (
    <nav className="bg-blue-500 py-2 shadow-lg text-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          {/* Mobile*/}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="outline-none mobile-menu-button text-white text-lg"
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

          {/* Desktop */}
          <div className="hidden md:flex items-center space-x-3 relative">
            <NavigationMenu>
              <NavigationMenuList className="space-x-4">
                {navItems.map((item) =>
                  item.nested ? (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
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
                          className={`${
                            pathname === item?.href
                              ? "border-b-2 border-b-white"
                              : ""
                          } text-white`}
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

          {/* Icons for Social Links */}
          <div className="hidden lg:flex justify-center items-center gap-4">
            {socialLinks.map((link) => (
              <div key={link.id} className="bg-blue-100 p-2 rounded-full">
                <Link href={link.link}>
                  <div className="text-blue-900">{link.icon}</div>
                </Link>
              </div>
            ))}
          </div>

          {/* Search and User Buttons */}
          <div className="flex justify-between items-center gap-2 border-s-2 p-4">
            <button onClick={() => alert("Modal on")} className="text-white">
              <Search />
            </button>
            <button onClick={() => alert("Modal on")} className="text-white">
              <UserRound />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-transform duration-300 ease-in-out ${
            isOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          {isOpen && (
            <div className="px-2 pt-2 pb-3 space-y-4 space-x-4">
              {navItems.map((item) =>
                item.nested ? (
                  <div key={item.href} className="block">
                    <Link href={item.href} className="text-white font-bold">
                      {item.label}
                    </Link>
                    {item.nested.map((nestedItem) => (
                      <Link
                        key={nestedItem.href}
                        href={nestedItem.href}
                        className="block pl-4 text-gray-300 hover:bg-blue-600 transition-colors duration-200"
                      >
                        {nestedItem.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                      pathname === item?.href ? "border-b-2 border-b-white" : ""
                    } text-white`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

type ListItemProps = {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default Navbar;
