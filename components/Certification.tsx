"use client";

import Image from "next/image";
import star from "../public/images/dark/star.svg";

import { certifications, settings } from "@/Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface CertificationProps {
  changeTheme: boolean;
}
const Certification: React.FC<CertificationProps> = ({ changeTheme }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".certfiStart",
        start: "top center",
        end: "+=70%",
        scrub: 1,
        // markers:true
      },
    });

    tl.to(
      ".starCer",
      {
        opacity: 1,
        y: 0,
        x: 0,
        ease: "power3.out",
        duration: 0.3,
      },
      "key"
    );
  }, []);
  return (
    <div className="w-full px-[30px]  pt-[150px] md:pt-[120px]  mx-auto certifacesWrap">
      <div className="w-full max-w-[85%] flex flex-col mx-auto gap-5 md:gap-10">
        <div className="w-full flex justify-between items-start p-3">
          <Image
            src={star}
            alt=""
            className={`${
              changeTheme ? "brightness-100" : "brightness-0"
            } starCer opacity-5 translate-y-[-20px] translate-x-[-30px]`}
          />
          <h2 className="font-bebas font-semibold tracking-wider text-[20px] sm:text-[25px] text-[var(--light)] dark:text-[var(--dark)] -mt-[100px] w-auto text-center md:-mt-[0px]">
            Rhythm&apos;s certifications
          </h2>
          <Image
            src={star}
            alt=""
            className={`${
              changeTheme ? "brightness-100" : "brightness-0"
            } starCer opacity-5 translate-y-[-20px] translate-x-[-30px]`}
          />
        </div>
        <div className="mx-auto max-w-[99%]">
          <Slider
            {...settings}
            className="w-[95%]  mx-auto flex justify-center items-center text-center gap-[16px] cursor-pointer"
          >
            {certifications.map((item, i) => (
              <Image
                key={i}
                src={item.img}
                alt="certification"
                className="w-[100px] object-contain h-[100px] px-2 md:px-4 grayscale-[1] hover:grayscale-0 hover:scale-[1.01] hover:translate-y-[-5px] transition-all duration-300 ease-in-out sm:w-[150px] sm:h-[150px]"
              />
            ))}
          </Slider>
        </div>
        <div className="w-full flex justify-between items-start p-3">
          <Image
            src={star}
            alt=""
            className={`${
              changeTheme ? "brightness-100" : "brightness-0"
            } starCer opacity-5 translate-y-[20px] translate-x-[30px] `}
          />{" "}
          <Image
            src={star}
            alt=""
            className={`${
              changeTheme ? "brightness-100" : "brightness-0"
            } starCer opacity-5 translate-y-[20px] translate-x-[30px]`}
          />
        </div>
      </div>
    </div>
  );
};

export default Certification;
