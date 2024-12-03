import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <main >
        <header>
          <Header />
          <nav>
            <Navbar></Navbar>
          </nav>
        </header>
        {children}
      </main>
      <footer></footer>
    </div>
  );
};

export default Layout;
