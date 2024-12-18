import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <nav className="sticky top-0 z-50">
        <Navbar />
      </nav>
      <main className="flex-grow">{children}</main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
