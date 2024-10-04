// @ts-ignore
import { Link } from "react-scroll";
function Button() {
  return (
    <Link to="contact" smooth={true} duration={500}>
      {/* <button
    type="button" 
    className={` px-4 py-3 outline-none  text-[16px] font-semibold h-11 w-[180px] rounded `}
  >
    It&#39;s a great day!
  </button> */}
      <button className="text-[var(--dark)] dark:text-[var(--light)] bg-[var(--dark-bg)] transition-all duration-500 hover:scale-[1.02]  dark:bg-[var(--light-bg)] relative z-[90]  py-[8px] md:py-[12px] px-[20px] md:px-[24px] max-w-[200px] md:max-w-[220px] font-neue-bold w-full text-center flex items-center justify-center cursor-pointer">
        Let&apos;s Work Together
      </button>
    </Link>
  );
}

export default Button;
