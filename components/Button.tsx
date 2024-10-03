// @ts-ignore
import { Link } from "react-scroll";
function Button() {
  return (
    <Link
    to="contact"
            smooth={true}
            duration={500}
    >
    <button
    type="button" 
    className={` px-4 py-3 outline-none text-[var(--dark)] dark:text-[var(--light)] bg-[var(--dark-bg)] dark:bg-[var(--light-bg)] text-[16px] font-semibold h-11 w-[180px] rounded transition-all duration-500 hover:scale-[1.03] `}
  >
    It&#39;s a great day!
  </button>
  </Link>
  )
}

export default Button