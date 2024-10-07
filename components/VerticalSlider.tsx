"use client";

import React, { useEffect, useRef } from "react";

import Image from "next/image";
import unordered from "../public/images/dark/unordered-dark.svg";
import unordered_light from "../public/images/light/unordered-light.svg";
import { experiences } from "@/Data";
import { useTheme } from "next-themes";

import "swiper/css";
import "swiper/css/pagination";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

gsap.registerPlugin(ScrollTrigger);

interface VerticalSliderProps {
  changeTheme: boolean;
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ changeTheme }) => {
  const { theme } = useTheme();

  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const container = scrollContainerRef.current;

  //   if (container && window.innerWidth > 750) {
  //     const items = gsap.utils.toArray(container.querySelectorAll(".expCon"));

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: container,
  //         start: "top top",
  //         end: () => `+=40%`,
  //         scrub: 2,
  //       },
  //     });

  //     tl.to(items, {
  //       y: "-220%",
  //       ease: "none",
  //     });
  //   }
  // }, []);

  return (
    <div className="">
      <div className="w-full mx-auto h-[1200px] overflow-hidden relative z-[10]">
        <Swiper
          direction={"vertical"}
          loop
          className="mySwiper h-full relative"
          slidesPerView={4}
        >
          {experiences.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex flex-col !h-[300px] overflow-hidden justify-center items-center mx-auto w-full"
            >
              <div
                className={`w-full h-full expCon flex flex-col justify-center items-center mx-auto`}
              >
                <div className="w-full h-full px-4 md:px-[30px] flex mx-auto">
                  <>
                    {changeTheme ? (
                      <div className="flex justify-center items-center flex-col md:ml-12 ml-0">
                        <Image src={unordered} alt="" />
                        <div className={`h-[300px] bg-foreground  w-[1px]`} />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center flex-col md:ml-12 ml-0">
                        <Image src={unordered_light} alt="" />

                        <div className={`h-[300px] bg-foreground  w-[1px]`} />
                      </div>
                    )}
                  </>
                  <div
                    className={`w-full  mt-[6px] md:mt-[10px] md:w-[80%] mx-auto flex flex-col max-h-[320px] h-full pb-[30px] md:pb-[50px] px-3`}
                  >
                    <div className="flex flex-col  md:flex-row gap-6 ">
                      <div className="w-full md:w-[50%] flex flex-col gap-2 md:gap-[25px] justify-start items-start">
                        <span className="text-[#5A5A5A] dark:text-[#B3B3B3] text-[14px] md:text-[14px] ">
                          {item.data}
                        </span>
                        <h1 className="text-[34px] leading-[38px] md:text-[44px] md:leading-[54px] max-w-[280px] md:max-w-[380px] font-bebas font-[700] text-[var(--light)] dark:text-[var(--dark)]">
                          {item.title}
                        </h1>
                      </div>
                      <div className="w-full md:w-[50%] gap-2 md:gap-[40px] flex flex-col justify-start items-start">
                        <span className="text-[var(--light)] dark:text-[var(--dark)] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] font-[400]">
                          {item.subtitle}
                        </span>
                        <p className="text-[#5A5A5A] dark:text-[#B3B3B3] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] line-clamp-4">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="h-[1px] md:h-[2px] w-full bg-[#454545] dark:bg-[#666666] mt-auto"></div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="bg-gradient-to-b from-transparent to-background absolute bottom-0  left-0 right-0 w-full h-[520px] z-[80] overlaySlides"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default VerticalSlider;
