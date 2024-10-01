import { navIcons } from "@/Data";
import { useTheme } from "next-themes";
type NavIconProps = {
  otherclass: string; // Define the expected prop types
};
function NavIcon() {
    const { theme } = useTheme();
  return (
    <div className="flex justify-center items-center gap-4 mt-[60px]">
                  {navIcons.map((icon, i) => {
                    return (
                      <a key={i} href={icon.link}>
                        <div
                          className={`font-montreal flex items-center justify-center p-2  border-1 w-[44px] h-[44px] text-[20px] border-2 text-[var(--light)] border-[var(--light)] dark:border-[var(--dark)] dark:text-[var(--dark)] hover:scale-[1.09] transition-all duration-500`}
                        >
                          {icon.icon}
                        </div>
                      </a>
                    );
                  })}
                </div>
  )
}

export default NavIcon