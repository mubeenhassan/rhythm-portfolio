// @ts-ignore
import { Link } from "react-scroll";
import { navItems } from "@/Data";

interface NavProps {
  otherclass?: string; 
}

const Nav: React.FC<NavProps> = ({ otherclass=' '}) => {
  return (
    <nav >
      <ul className={`  ${otherclass}`}>
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
  );
};

export default Nav;
