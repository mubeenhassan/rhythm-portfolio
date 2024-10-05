import Image from "next/image";
import logo from "../public/logo.svg";
import light_logo from "../public/logo-light.svg";
import BottomNav from "./BottomNav";

interface BottomNavbarProps {
  changeTheme: boolean;
}
const BottomNavbar: React.FC<BottomNavbarProps> = ({ changeTheme }) => {
  return (
    <div
      className={`w-full   px-[30px] md:px-[70px] p-2 bg-[var(--dark-bg)] dark:bg-[var(--light-bg)] `}
    >
      <div className="mx-auto flex justify-between items-center">
        <div className="cursor-pointer">
          {changeTheme ? (
            <Image src={light_logo} alt="logo" priority />
          ) : (
            <Image src={logo} alt="logo" priority />
          )}
        </div>
        <BottomNav otherclass="hidden lg:flex justify-center items-center gap-6 font-semibold md:ml-[30px]" />
      </div>
    </div>
  );
};

export default BottomNavbar;
