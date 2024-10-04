"use client";

import Image from "next/image";
import logo from "../public/logo.png";
import light_logo from "../public/light-logo.png";
// @ts-ignore
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { FiArrowUpRight } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleButton from "./ToggleButton";
import Nav from "./Nav";
import NavIcon from "./NavIcon";
import { useState } from "react";
import { footerIcons, navItems } from "@/Data";
import { IoClose } from "react-icons/io5";

interface NavbarProps {
  changeTheme: boolean;
  setChangeTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ changeTheme, setChangeTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`w-full   px-[30px] md:px-[60px] py-3 `}>
      {/* desktop */}
      <div className="mx-auto flex justify-between items-center">
        <div className="cursor-pointer">
          {changeTheme ? (
            <Image src={logo} alt="logo" priority />
          ) : (
            <Image src={light_logo} alt="logo" priority />
          )}
        </div>
        <Nav otherclass="hidden lg:flex justify-center items-center gap-6 font-semibold" />

        <div className="hidden lg:block">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="flex justify-center text-[22px] tracking-wider font-bebas items-center gap-2  cursor-pointer font-semibold hover:scale-[1.07] transition-all duration-500"
          >
            <FiArrowUpRight />
            <span className="">CONTACT</span>
          </Link>
        </div>

        {/* mobilemenu */}
        <div className="lg:hidden">
          <GiHamburgerMenu
            onClick={() => setShowMenu(true)}
            className={`text-[26px] hover:scale-[1.05] transition-all duration-500`}
          />

          <div
            className={`fixed top-0 flex flex-col transition-all duration-300 ease-in-out overflow-hidden ${
              showMenu ? "right-0" : "right-[-100%]"
            } bottom-0 bg-background text-foreground z-[999] w-full h-full bg-[url('/images/light/globe-light-menu.svg')] bg-cover bg-center dark:bg-[url('/images/dark/globe-dark-menu.svg')] `}
          >
            <div className="bg-background flex items-center justify-between text-foreground px-8 py-4">
              <div className="">
                {changeTheme ? (
                  <Image src={logo} alt="logo" priority />
                ) : (
                  <Image src={light_logo} alt="logo" priority />
                )}
              </div>
              <IoClose
                onClick={() => setShowMenu(false)}
                className={`text-[32px] hover:scale-[1.05] transition-all duration-500`}
              />
            </div>
            <div className="flex items-center justify-center flex-col gap-5 mt-[15vh]">
              <nav>
                <ul className="flex flex-col items-center justify-center gap-5">
                  {navItems.map((item, i) => (
                    <li
                      className=" text-[23px] cursor-pointer tracking-wider dark:text-[var(--dark)] transition-all duration-500 hover:scale-[1.07]"
                      key={i}
                    >
                      <Link
                        className="font-medium font-bebas"
                        to={item.link}
                        smooth={true}
                        duration={500}
                      onClick={() => setShowMenu(false)}

                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="">
                <Link
                  to="contact"
                  onClick={() => setShowMenu(false)}
                  smooth={true}
                  duration={500}
                  className=" text-[22px] tracking-wider font-bebas font-semibold flex justify-center items-center gap-2  cursor-pointer mt-11 mr-2 hover:scale-[1.08] transition-all duration-500 font-montreal"
                >
                  <FiArrowUpRight />
                  <p>CONTACT</p>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-[30px]">
              {footerIcons.map((icon, i) => (
                <a key={i} href={icon.link}>
                  <div className="flex items-center justify-center py-4 px-4 border-1 text-[18px] tracking-wider border-2 text-[var(--light)] border-[var(--light)] dark:border-[var(--dark)] dark:text-[var(--dark)] hover:scale-[1.05] transition-all duration-500">
                    <span className="text-[17px]">{icon.icon}</span>
                    {/* <p className="font-bebas">{icon.name}</p> */}
                  </div>
                </a>
              ))}
            </div>
            <div className="w-full flex justify-center items-center mt-[50px] mb-3">
              <ToggleButton
                changeTheme={changeTheme}
                setChangeTheme={setChangeTheme}
              />
            </div>
          </div>
          {/* <Sheet>
            <SheetTrigger className="">
              <GiHamburgerMenu
                className={`text-[26px] hover:scale-[1.05] transition-all duration-500`}
              />
            </SheetTrigger>
            
            <SheetContent>
              
              <div
                className={`w-full h-[80%]  mt-[40px] bg-[url('/images/light/globe-light-menu.svg')] bg-cover bg-center dark:bg-[url('/images/dark/globe-dark-menu.svg')] `}
              >
                <div className="absolute top-3 ">
                  {changeTheme ? (
                    <Image src={logo} alt="logo" priority />
                  ) : (
                    <Image src={light_logo} alt="logo" priority />
                  )}
                </div> */}

          {/* <Nav  otherclass="flex justify-center items-center gap-12 flex-col  mt-[120px] pt-[70px] font-semibold" /> */}

          {/* <nav>
                  <ul >
                    {navItems.map((item, i) => (
                      <li
                        className=" text-[19px] cursor-pointer tracking-wider dark:text-[var(--dark)] transition-all duration-500 hover:scale-[1.07]"
                        key={i}
                      >
                        <Link
                          className="font-medium font-bebas"
                          to={item.link}
                          smooth={true}
                          duration={500}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="">
                  <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className=" text-[22px] tracking-wider font-bebas font-semibold flex justify-center items-center gap-2  cursor-pointer mt-11 mr-2 hover:scale-[1.08] transition-all duration-500 font-montreal"
                  >
                    <FiArrowUpRight />
                    <p>CONTACT</p>
                  </Link>
                </div>
                <NavIcon />

                <div className="w-full flex justify-center items-center mt-[50px] mb-3">
                  <ToggleButton
                    changeTheme={changeTheme}
                    setChangeTheme={setChangeTheme}
                  />
                </div>
                <div className="w-full bg-[rgba(0,0,0,0.1)] backdrop-blur-[1px] h-[90px]"></div>
              </div>
            </SheetContent>
          </Sheet> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
