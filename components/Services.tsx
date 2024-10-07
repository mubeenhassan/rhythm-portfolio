"use client";
import Image from "next/image";
import { skillsItems } from "@/Data";
import face from "../public/images/dark/caricature.webp";
import face_light from "../public/images/light/caricature.webp";
import { useEffect } from "react";
import gsap from "gsap";
interface SkillsProps {
  changeTheme: boolean;
}
const Skills: React.FC<SkillsProps> = ({ changeTheme }) => {
  useEffect(() => {
    gsap.to(".workBgAnim", {
      x: 5,
      y: -20,
      scale: 1,
      opacity: 1,
      yoyo: true,
      repeat: -1,
      ease: "power3.inOut",
      duration: 1,
    });
  }, []);

  return (
    <div className="services w-full h-full mx-auto md:mt-[120px]">
      <div className=" w-full md:px-[40px] flex flex-col items-center justify-center gap-2 lg:flex-row mx-auto ">
        <div className="basis-[50%] flex flex-col justify-center items-center w-full  h-full md:p-6 mx-auto">
          <div
            className={`w-[100%] max-w-[800px] h-[550px] max-h-[750px] sm:h-[600px] flex flex-col justify-center items-center md:p-6  relative`}
          >
            <div className="workBgAnim scale-[0.99] opacity-90 bg-[url('/images/light/globe-light.svg')] bg-contain bg-center bg-no-repeat dark:bg-[url('/images/dark/globe-dark.svg')] absolute w-full h-full inset-0"></div>
            <pre className="text-[28vw] tracking-[2.5vw] md:text-[180px] md:tracking-[20px] font-semibold font-bebas relative text-[var(--light)] dark:text-[var(--dark)]">
              W RK
            </pre>
            {changeTheme ? (
              <Image
                src={face}
                alt=""
                className="w-[25vw] h-[34vw] md:w-[190px] md:h-[240px] absolute mr-[40px] md:-mt-[67px] -mt-12"
              />
            ) : (
              <Image
                src={face_light}
                alt=""
                className="w-[25vw] h-[32vw] md:w-[190px] md:h-[225px] absolute mr-[40px] md:-mt-[67px] -mt-12"
              />
            )}

            <p className=" relative  text-[15vw] tracking-[3px] translate-y-[-8vw] md:translate-y-[-80px] md:mr-[60px] md:text-[100px] md:tracking-[8px] font-semibold font-bebas text-[var(--light)] dark:text-[var(--dark)] ">
              WITH ME
            </p>
          
          </div>
        </div>
        <div className="basis-[50%] -mt-[30px] md:mt-0 w-full flex justify-center px-[30px] md:px-0 items-center mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-3">
            {skillsItems.map((skill, i) => {
              return (
                <div
                  key={i}
                  className="group mx-auto h-[140px] sm:max-w-[360px] w-full sm:h-[180px] lg:h-[240px] xl:h-[185px] flex flex-col justify-center items-start  p-3 leading-tight xl:p-6
             
             hover:bg-[var(--dark-bg)] dark:hover:bg-[var(--light-bg)] 
             transition-all duration-300 hover:scale-[1.04] cursor-pointer"
                >
                  <h2
                    className=" text-[24px] font-bebas font-semibold xl:mb-2 text-[var(--light)] dark:text-[var(--dark)] 
                group-hover:text-[var(--dark)] dark:group-hover:text-[var(--light)] mb-2 lg:mb-0"
                  >
                    {skill.title}
                  </h2>
                  <p
                    className=" text-[15px] text-[var(--light)] dark:text-[var(--dark)] 
               group-hover:text-[var(--dark)] dark:group-hover:text-[var(--light)] leading-tight"
                  >
                    {skill.des}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
