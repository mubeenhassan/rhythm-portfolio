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
import { navItems } from "@/Data";

interface NavbarProps {
  changeTheme: boolean;
  setChangeTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ changeTheme, setChangeTheme }) => {
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
            className="flex justify-center items-center gap-2  cursor-pointer font-semibold hover:scale-[1.07] transition-all duration-500 font-montreal"
          >
            <FiArrowUpRight />
            <p>CONTACT</p>
          </Link>
        </div>

        {/* mobilemenu */}
        <div className="lg:hidden">
          <Sheet>
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
                </div>

                {/* <Nav  otherclass="flex justify-center items-center gap-12 flex-col  mt-[120px] pt-[70px] font-semibold" /> */}

                <nav>
                  <ul >
                    {navItems.map((item, i) => (
                      <li
                        className=" text-[19px] cursor-pointer dark:text-[var(--dark)] transition-all duration-500 hover:scale-[1.07]"
                        key={i}
                      >
                        <Link
                          className="font-medium font-montreal"
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
                    className=" text-[22px] font-semibold flex justify-center items-center gap-2  cursor-pointer mt-11 mr-2 hover:scale-[1.08] transition-all duration-500 font-montreal"
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
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
