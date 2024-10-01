

import VerticalSlider from "./VerticalSlider";
import { useTheme } from "next-themes";

interface ExperienceProps {
  changeTheme: boolean;
}
const Experience: React.FC<ExperienceProps> = ({ changeTheme }) => {
  const { theme } = useTheme();
  return (
    <div className="experience w-full h-auto py-[30px] px-[20px]">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-full mx-auto h-auto flex flex-col justify-center items-center relative  mt-[70px] lg:mt-10">
          <h1 className=" z-50 text-[13vw] md:text-[15vw] font-semibold mx-auto font-montreal transform scale-y-150 mb-12 text-start text-[var(--light)] dark:text-[var(--dark)] tracking-tight ">
            EXPERIENCE
          </h1>
          <h1
            className="absolute bottom-4 sm:bottom-[22px] md:bottom-8 lg:bottom-10 text-[13vw] md:text-[15vw] font-semibold mx-auto font-montreal transform scale-y-150 mb-12 text-start text-[var(--light)] dark:text-[var(--dark)] tracking-tight "
            style={
              changeTheme
                ? {
                    WebkitTextStroke: "1px gray",
                    color: "transparent",
                  }
                : {
                    WebkitTextStroke: "1px #EAE4DD",
                    color: "transparent",
                  }
            }
          >
            EXPERIENCE
          </h1>
          <h1
            className="absolute bottom-[7px] sm:bottom-[10px] md:bottom-3 lg:bottom-4 text-[13vw] md:text-[15vw] font-semibold mx-auto font-montreal transform scale-y-150 mb-12 text-start text-[var(--light)] dark:text-[var(--dark)] tracking-tight "
            style={
              changeTheme
                ? {
                    WebkitTextStroke: "1px gray",
                    color: "transparent",
                  }
                : {
                    WebkitTextStroke: "1px #EAE4DD",
                    color: "transparent",
                  }
            }
          >
            EXPERIENCE
          </h1>
        </div>
        <div>
          <VerticalSlider changeTheme={changeTheme} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
