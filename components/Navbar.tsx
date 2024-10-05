"use client";

import Image from "next/image";
import logo from "../public/logo.svg";
import light_logo from "../public/logo-light.svg";
// @ts-ignore
import { Link } from "react-scroll";
import { useTheme } from "next-themes";
import { FiArrowUpRight } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleButton from "./ToggleButton";
import Nav from "./Nav";
import NavIcon from "./NavIcon";
import { useEffect, useState } from "react";
import { footerIcons, navItems } from "@/Data";
import { IoClose } from "react-icons/io5";
import gsap from "gsap";

interface NavbarProps {
  changeTheme: boolean;
  setChangeTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ changeTheme, setChangeTheme }) => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    gsap.to(".workBgAnim", {
      x: 5,
      y: -20,
      scale: 1,
      opacity: 1,
      yoyo: true,
      repeat: -1,
      ease: "power3.inOut",
      duration: 1,
    });
  }, []);
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
        <Nav otherclass="hidden lg:flex justify-center items-center gap-12 font-semibold" />

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
            className={`fixed top-0 flex flex-col justify-between transition-all duration-500 ease-in-out overflow-hidden ${
              showMenu ? "right-0" : "right-[-100%]"
            } bottom-0 bg-background text-foreground z-[999] w-full h-full `}
          >
            <div className="workBgAnim scale-[0.99] opacity-90 bg-[url('/images/light/globe-light.svg')] bg-cover bg-center bg-no-repeat dark:bg-[url('/images/dark/globe-dark.svg')] absolute w-full h-full inset-0"></div>

            <div>
              <div className="bg-background relative z-[90] flex items-center justify-between text-foreground px-8 py-3">
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
              <div className="flex items-center justify-center flex-col gap-5 mt-[10vh]">
                <nav>
                  <ul className="flex flex-col items-center justify-center gap-8">
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
                    className=" text-[22px] tracking-wider font-bebas font-semibold flex justify-center items-center gap-4  cursor-pointer mt-8 mr-2 hover:scale-[1.08] transition-all duration-500 "
                  >
                    <FiArrowUpRight />
                    <p>CONTACT</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="mb-[100px]">
              <div className="flex items-center justify-center gap-6 mt-[40px]">
                {footerIcons.map((icon, i) => (
                  <a key={i} href={icon.link}>
                    <div className="flex items-center justify-center py-4 w-[50px] h-[50px] px-4 border-1 text-[23px] tracking-wider border-[0.7px] text-[var(--light)] border-[var(--light)] dark:border-[var(--dark)] dark:text-[var(--dark)] hover:scale-[1.05] transition-all duration-500">
                      <span className="text-[17px]">{icon.icon}</span>
                      {/* <p className="font-bebas">{icon.name}</p> */}
                    </div>
                  </a>
                ))}
              </div>
              <div className="w-full flex justify-center items-center mt-[40px] mb-3">
                <ToggleButton
                  changeTheme={changeTheme}
                  setChangeTheme={setChangeTheme}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
