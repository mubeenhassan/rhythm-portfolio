"use client";

import * as React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "next-themes";
import gsap from "gsap";

interface ToggleButtonProps {
  changeTheme: boolean; // changeTheme is a boolean
  setChangeTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  changeTheme,
  setChangeTheme,
}) => {
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark theme
    setTheme(savedTheme);
    setChangeTheme(savedTheme === "dark");
  }, [setTheme, setChangeTheme]);

  React.useEffect(() => {
    gsap.to(".iconWrap", {
      x: changeTheme ? "32px" : "2px",
      duration: 0.3,
      ease: "power3.inOut",
    });
  }, [changeTheme]);

  const toggleMode = () => {
    setTimeout(() => {
      const newTheme = theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme); // Save to local storage
      setTheme(newTheme);
      // setChangeTheme(!changeTheme);
    }, 300);
    setChangeTheme(!changeTheme);
  };

  return (
    <div
      onClick={toggleMode}
      className={`w-16 h-8 rounded-full cursor-pointer flex items-center bg-transparent border-2 border-[var(--light)] dark:border-[var(--dark)]`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transform iconWrap transition-transform duration-500 ease-in-out bg-black dark:bg-white`}
      >
        {changeTheme ? (
          <FaMoon className={`text-black`} />
        ) : (
          <FaSun className={`text-white`} />
        )}
      </div>
    </div>
  );
};

export default ToggleButton;
