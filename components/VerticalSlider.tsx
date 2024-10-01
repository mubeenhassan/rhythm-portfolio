import React from "react";
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
  return (
    <div className="w-full max-w-[98%] h-[900px] mx-auto overflow-y-hidden mt-10">
      {" "}
      <Slider {...settings} className=" mx-auto cursor-pointer">
        {experiences.map((item, index) => (
          <div
            key={index}
            className=" w-full max-[95%] flex flex-col justify-center items-center mx-auto"
          >
            <div className="w-full max-[90%] px-4 md:px-[30px] flex gap-3 mx-auto">
              <>
                {changeTheme ? (
                  <div className="flex justify-center items-center flex-col md:ml-14 ml-4">
                    <Image src={unordered} alt="" />
                    <Image
                      src={line}
                      alt=""
                      className="h-[260px] md:h-[290px]"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center flex-col md:ml-14 ml-4">
                    <Image src={unordered_light} alt="" />
                    <Image
                      src={line_light}
                      alt=""
                      className="h-[260px] md:h-[290px]"
                    />
                  </div>
                )}
              </>
              <div className="w-full max-w-[80%] md:w-[75%] mx-auto flex flex-col gap-6 md:flex-row max-h-[340px] py-[40px] md:py-[60px] px-3 border-b-2 border-b-gray-500 -mt-[65px] ">
                {/* Left Column */}
                <div className="w-full md:w-[50%] flex flex-col gap-2 md:gap-3 justify-start items-start mt-7 md:mt-0">
                  <span className="text-gray-600 dark:text-gray-400 text-[16px] md:text-[18px] font-montreal">
                    {item.data}
                  </span>
                  <h1 className="text-[24px] md:text-[34px] max-w-[280px] md:max-w-[380px] font-montreal font-semibold text-[var(--light)] dark:text-[var(--dark)]">
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
      </Slider>
    </div>
  );
};

export default VerticalSlider;
