"use client"

import { useEffect } from "react";
import VerticalSlider from "./VerticalSlider";
import { useTheme } from "next-themes";


import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceProps {
  changeTheme: boolean;
}
const Experience: React.FC<ExperienceProps> = ({ changeTheme }) => {
  const { theme } = useTheme();

  useEffect(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.experience',
          start: "top 0",
          end: "+=500px",
          scrub: 1, 
          // markers:true
        },
      })

      tl.to(".expG", {
        y: 20, // slight vertical movement
        x: 10, // slight horizontal movement
        ease: "power1.out",
      });
    
  }, []);

  return (
    <div className="experience w-full h-auto py-[30px] px-[20px]">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-full mx-auto h-auto flex flex-col justify-center items-center tracking-[2.1vw] relative text-[15vw] md:text-[18vw] font-semibold font-bebas transform scale-y-[1.1] mb-12 text-start text-[var(--light)] dark:text-[var(--dark)]  mt-[70px] lg:mt-10">
          <h1 className="relative z-50 expG">EXPERIENCE</h1>
          <h1
            className="absolute expG bottom-4 sm:bottom-[22px] md:bottom-8 lg:bottom-[30px] "
            style={
              changeTheme
                ? {
                    WebkitTextStroke: "2px #191919",
                    color: "#030712",
                  }
                : {
                    WebkitTextStroke: "2px #dddddd",
                    color: "#fff",
                  }
            }
          >
            EXPERIENCE
          </h1>
          <h1
            className="absolute expG bottom-[7px] sm:bottom-[10px] md:bottom-3 lg:bottom-[15px] "
            style={
              changeTheme
                ? {
                    WebkitTextStroke: "2px #191919",
                    color: "#030712",
                  }
                : {
                    WebkitTextStroke: "2px #dddddd",
                    color: "#fff",
                  }
            }
          >
            EXPERIENCE
          </h1>
        </div>
        <div className="expSlide">
          <VerticalSlider changeTheme={changeTheme} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
