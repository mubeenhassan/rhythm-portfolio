"use client";

import React, { useEffect, useRef } from "react";
import star from "../public/images/dark/star.svg";
import Image from "next/image";
import { FaXmark } from "react-icons/fa6";
import face from "/public/images/face.svg";
import Button from "./Button";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Hero = ({ changeTheme }: { changeTheme: boolean }) => {
  const handRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (handRef.current) {
      gsap.to(handRef.current, {
        rotation: 14,
        y: -2,
        repeat: 20,
        yoyo: true,
        ease: "power1.inOut",
        duration: 0.3,
        delay: 0.5,
      });
    }

    gsap.to(".outlineTxtHero", {
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
        trigger: ".wrapperr",
        start: "top 0%",
        end: "+=60%",
        scrub: 1,
      },
    });

    tl.to(
      ".starSky",
      {
        opacity: 1,
        y: 0,
        x: 0,
        ease: "power3.out",
        duration: 0.3,
      },
      "key"
    ).to(
      ".starSkyT",
      {
        opacity: 1,
        y: 0,
        x: 0,
        ease: "power3.out",
        duration: 0.3,
      },
      "key"
    ).to(
      ".faceHero",
      {
        rotate: -6,
        repeat:3,
        yoyo:true,
        ease: "power3.out",
        duration: 0.3,
      },
      "key"
    ).to(
      ".outlineTxtHero",
      {
        y: 15, 
        x: 8,
        ease: "power1.out",
      },
      "key"
    );
  }, []);

  return (
    <div className="w-full overflow-hidden px-[30px] md:px-[60px] py-[30px]">
      <div className="w-full h-full flex flex-col">
        <div className="flex w-full justify-between gap-4 mb-6">
          <div className="text-[18px] flex relative z-[90] md:text-[29px] min-w-[200px] translate-y-[10px]">
            <div ref={handRef} className="">
              👋
            </div>{" "}
            Hello, I’m
          </div>
          <div className="w-full flex items-center justify-between">
            <Image
              src={star}
              alt="Star"
              className={`w-[15px] h-[15px] object-contain md:w-[30px] translate-y-[-30px] md:h-[30px] opacity-5 ${
                changeTheme ? "brightness-100" : "brightness-0"
              } starSkyT`}
            />
            <Image
              src={star}
              alt="Star"
              className={`w-[15px] h-[15px] object-contain md:w-[30px] translate-y-[-20px] md:h-[30px] opacity-5 ${
                changeTheme ? "brightness-100" : "brightness-0"
              } starSkyT`}
            />
            <Image
              src={star}
              alt="Star"
              className={`w-[15px] h-[15px] object-contain md:w-[30px] translate-y-[15px] md:h-[30px] opacity-5 ${
                changeTheme ? "brightness-100" : "brightness-0"
              } starSkyT`}
            />
            <Image
              src={star}
              alt="Star"
              className={`starSkyT w-[15px] h-[15px] md:flex hidden object-contain md:w-[30px] translate-y-[-15px] md:h-[30px] opacity-5 ${
                changeTheme ? "brightness-100" : "brightness-0"
              }`}
            />
          </div>
        </div>
        <div className="flex justify-between items-end  -mt-[5vw]">
          <div className="relative text-[20vw] md:text-[18vw] select-none  h-[24vw] md:h-[18vw] tracking-[1.5vw] font-bebas text-[var(--light)] dark:text-[var(--dark)]">
            <h1 className="relative z-50 ">RHYTHM</h1>
            <h1
              className="absolute  outlineTxtHero opacity-0 translate-x-[-4vw] translate-y-[2vw] bottom-[3vw] left-[4.4vw] md:left-[2vw] h-[24vw] md:h-[18vw] sm:bottom-[22px] md:bottom-8 lg:bottom-[12px] z-[30]"
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
              RHYTHM
            </h1>
            <h1
              className="absolute outlineTxtHero opacity-0 translate-x-[-4vw] translate-y-[2vw] bottom-[5.2vw] left-[7vw] md:left-[3vw] h-[24vw] md:h-[18vw] sm:bottom-[10px] md:bottom-3 lg:bottom-[28px] z-[20]"
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
              RHYTHM
            </h1>
          </div>
          <div
            className={`flex flex-col gap-1 md:gap-3 ${
              changeTheme ? "text-white" : "text-black"
            }`}
          >
            <FaXmark />
            <FaXmark />
            <FaXmark />
            <FaXmark />
          </div>
        </div>

        <div className="flex justify-between items-start -mt-[30px]">
          <div
            className={`hidden md:flex gap-3 mt-[100px] ml-[10px] ${
              changeTheme ? "text-white" : "text-black"
            }`}
          >
            <FaXmark />
            <FaXmark />
            <FaXmark />
            <FaXmark />
          </div>
          <div className="flex ">
            <Image
              src={face}
              alt="Face"
              width={500}
              height={500}
              className="relative faceHero z-[90] w-[80px] h-[100px] md:h-[250px] md:w-[190px] lg:w-[17vw] lg:h-[25vw] mt-[10px] -mr-[20px] md:-mt-[1.5vw] object-contain md:mr-[-50px]"
            />

            <div className="relative text-[20vw] md:text-[18vw] select-none  h-[24vw] md:h-[18vw] tracking-[1.5vw] font-bebas text-[var(--light)] dark:text-[var(--dark)]">
              <h1 className="relative z-50 ">SHARIAR</h1>
              <h1
                className="absolute outlineTxtHero opacity-0 translate-x-[4vw] translate-y-[2vw] top-[2.5vw] left-[-4.4vw] md:left-[-1.7vw] h-[24vw] md:h-[18vw] sm:top-[22px] md:top-8 lg:top-[12px] z-[30]"
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
                SHARIAR
              </h1>
              <h1
                className="absolute outlineTxtHero opacity-0 translate-x-[4vw] translate-y-[2vw] top-[5vw] left-[-7vw] md:left-[-3vw] h-[24vw] md:h-[18vw] sm:top-[10px] md:top-3 lg:top-[28px] z-[20]"
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
                SHARIAR
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 md:mt-0 mt-[8vw]">
          <Image
            src={star}
            alt="Star"
            className={`w-[15px] hidden md:inline-block h-[15px] object-contain md:w-[30px] translate-y-[100px] md:h-[30px] opacity-5 ${
              changeTheme ? "brightness-100" : "brightness-0"
            } starSky`}
          />
          <Image
            src={star}
            alt="Star"
            className={`w-[15px] h-[15px] object-contain md:w-[30px] translate-y-[100px] md:h-[30px] opacity-5 ${
              changeTheme ? "brightness-100" : "brightness-0"
            } starSky`}
          />
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
