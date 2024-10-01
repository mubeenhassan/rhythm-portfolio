import { Link } from "react-scroll";
import { navItems } from "@/Data";

interface NavProps {
  otherclass?: string; // otherclass is an optional string prop
}

const Nav: React.FC<NavProps> = () => {
  return (
    <nav >
      <ul className={`grid grid-cols-2 md:grid-cols-4  gap-x-7 gap-y-3 `}>
        {navItems.map((item, i) => (
          <li
            className=" text-[15px] sm:text-[19px] cursor-pointer text-[var(--dark)] dark:text-[var(--light)] transition-all duration-500 hover:scale-[1.07] font-semibold "
            key={i}
          >
            <Link
              className="font-semibold font-montreal"
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
  );
};

export default Nav;
