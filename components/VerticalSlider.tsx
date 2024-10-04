"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import unordered from "../public/images/dark/unordered-dark.svg";
import line from "../public/images/dark/line-dark.svg";
import unordered_light from "../public/images/light/unordered-light.svg";
import line_light from "../public/images/light/line-light.svg";
import { experiences } from "@/Data";
import { useTheme } from "next-themes";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface VerticalSliderProps {
  changeTheme: boolean;
}
const VerticalSlider: React.FC<VerticalSliderProps> = ({ changeTheme }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
  };
  const { theme } = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;

    if (container && window.innerWidth > 750) {
      const items = gsap.utils.toArray(container.querySelectorAll(".expCon"));

      // GSAP Timeline with ScrollTrigger
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: () => `+=40%`,
          scrub: 2,
        },
      });

      tl.to(items, {
        y: "-220%",
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="h-[110%]">
      <div
        ref={scrollContainerRef}
        className="w-full max-w-[98%] mx-auto md:max-h-[1200px] overflow-y-hidden no-scrollbar mt-10 relative z-[10]"
      >
        {/* <div className="sticky z-[20] inset-0 w-full h-full"></div>{" "} */}
        {/* <Slider {...settings} className=" mx-auto cursor-pointer"> */}
        {experiences.map((item, index) => (
          <div
            key={index}
            className=" w-full expCon max-[95%] flex flex-col justify-center items-center mx-auto"
          >
            <div className="w-full max-[90%] px-4 md:px-[30px] flex gap-3 mx-auto">
              <>
                {changeTheme ? (
                  <div className="flex justify-center items-center flex-col md:ml-12 ml-0">
                    <Image src={unordered} alt="" />
                    <div
                      // src={line}
                      // alt=""
                      className="h-[300px] bg-foreground  w-[1px] md:h-[230px]"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center flex-col md:ml-12 ml-0">
                    <Image src={unordered_light} alt="" />
                    {/* <Image
                      src={line_light}
                      alt=""
                      className="6md:h-[230px]"
                    /> */}
                       <div
                      // src={line}
                      // alt=""
                      className="h-[300px] bg-foreground  w-[1px] md:h-[230px]"
                      // className="h-[230px] bg-gradient-to-b from-background via-backgrfrom-background to-transparent  w-[1px] md:h-[230px]"
                    />
                  </div>
                )}
              </>
              <div className="w-full max-w-[80%] md:w-[75%] mx-auto flex flex-col gap-6 md:flex-row max-h-[320px] py-[30px] pt-0 md:py-[30px] px-3 border-b-[1px] md:border-b-2 border-b-[#191919]">
                {/* Left Column */}
                <div className="w-full md:w-[50%] flex flex-col gap-2 md:gap-3 justify-start items-start mt-7 md:mt-0">
                  <span className="text-gray-600 dark:text-gray-400 text-[16px] md:text-[18px] ">
                    {item.data}
                  </span>
                  <h1 className="text-[24px] md:text-[34px] max-w-[280px] md:max-w-[380px] font-bebas tracking-wide font-semibold text-[var(--light)] dark:text-[var(--dark)]">
                    {item.title}
                  </h1>
                </div>
                <div className="w-full max-w-[80%] md:w-[50%] gap-2 md:gap-6 flex flex-col justify-start items-start">
                  <span className="text-[var(--light)] dark:text-[var(--dark)] text-[16px] md:text-[20px] font-medium">
                    {item.subtitle}
                  </span>
                  <p className="text-[var(--light)] dark:text-[var(--dark)] text-[14px] md:text-[15px] line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default VerticalSlider;
