"use client";

// import { ReactNode, useEffect, useState } from "react";
import { ReactNode, useEffect } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import {store} from "@/redux/store";

const Providers = ({ children }: { children: ReactNode }) => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem("theme") === "dark";
    // setIsDarkMode(darkMode);
    document.documentElement.classList.toggle("dark", darkMode);
  }, []);

  // const toggleDarkMode = () => {
  //   const newTheme = !isDarkMode ? "dark" : "light";
  //   setIsDarkMode(!isDarkMode);
  //   localStorage.setItem("theme", newTheme);
  //   document.documentElement.classList.toggle("dark", !isDarkMode);
  // };

  return (
    <ReduxProvider store={store}>
      <SessionProvider>
        {/* <button onClick={toggleDarkMode} className="fixed bottom-4 right-4">
          Toggle Dark Mode
        </button> */}
        {children}
      </SessionProvider>
    </ReduxProvider>
  );
};

export default Providers;
