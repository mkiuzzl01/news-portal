import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div>
        <header>
          <Header />
          <nav>
            <Navbar></Navbar>
          </nav>
        </header>
        <main className="min-h-[calc(100vh-490px)]">{children}</main>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
