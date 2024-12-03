import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <nav>
        
      </nav>
      {children}
    </main>
  );
};

export default Layout;
