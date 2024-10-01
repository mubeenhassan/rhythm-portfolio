// "use client"
 
import * as React from "react"
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from "next-themes"
// import iconnight from '../public/images/dark/icon-night.svg'
// import Image from "next/image";

interface ToggleButtonProps {
  changeTheme: boolean; // changeTheme is a boolean
  setChangeTheme: React.Dispatch<React.SetStateAction<boolean>>; 
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ changeTheme, setChangeTheme }) => {
  const { theme, setTheme } = useTheme();
 
  React.useEffect(() => {
    
      setTheme('dark'); 
    
  }, []);

  const toggleMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    setChangeTheme(!changeTheme)
  };

  return (
    <div
      onClick={toggleMode}
      className={`relative w-16 h-8 rounded-full cursor-pointer transition-all duration-500 flex items-center  dark:bg-transparent bg-transparent border-2 border-[var(--light)] dark:border-[var(--dark)] p-[7]`}
    >
      <div
        className={`absolute w-6 h-6 rounded-full flex items-center justify-center transition-all duration-500 transform translate-x-8  dark:translate-x-1 bg-black dark:bg-white`}
      >
        {changeTheme ? (
          <FaSun className="text-yellow-500" />
        ) : (
          <FaMoon className="text-white" />
        )}
      </div>
    </div>
  );
};

export default ToggleButton;

  