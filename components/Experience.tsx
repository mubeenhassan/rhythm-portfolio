"use client";

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
    gsap.to(".expG", {
      opacity: 1,
      ease: "bounce.in",
      duration: 0.4,
      delay: 0,
      y: 0,
      x: 0,
      stagger: 0.01,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".experience",
        start: "top 0",
        end: "+=500px",
        scrub: 1,
      },
    });

    tl.to(".expG", {
      y: 20,
      x: 10,
      ease: "power1.out",
    });
  }, []);

  return (
    <div className="experience w-full overflow-hidden h-auto px-[20px] mt-[84px] md:mt-[120px]">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-full mx-auto h-auto mb-[48px] md:mb-[84px] flex flex-col justify-center items-center tracking-[2.1vw] relative text-[21.8vw] ml-[0.4vw] font-semibold font-bebas transform scale-y-[1.1] text-start text-[var(--light)] dark:text-[var(--dark)]">
          <h1 className="relative z-50 expG">EXPERIENCE</h1>
          <h1
            className="absolute expG bottom-4 sm:bottom-[22px] md:bottom-8 lg:bottom-[30px] "
            style={
              changeTheme
                ? {
                    WebkitTextStroke: "2px #191919",
                    color: "#000000",
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
                    color: "#000000",
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
