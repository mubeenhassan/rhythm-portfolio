"use client";

import { spaceItems } from "@/Data";
import CountUp from "react-countup";
import { TiPlus } from "react-icons/ti";
import Button from "./Button";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

function About() {
  const [startCounting, setStartCounting] = useState(false);

  return (
    <div className="about w-full px-[30px] mt-[84px] md:mt-[120px] ">
      <div className="w-full flex flex-col gap-7 lg:gap-3 lg:flex-row items-center justify-center ">
        <div className="basis-[48%] flex flex-col gap-6 px-4 justify-center md:items-center lg:justify-start lg:items-start mb-[40px] lg:mb-0">
          <h1 className="text-[42px] font-bebas font-semibold text-left w-full text-[var(--light)] dark:text-[var(--dark)]">
            About Me
          </h1>
          <p className=" text-[16px] tracking-wider text-[var(--light)] dark:text-[var(--dark)]">
            New page in my book comes the moment I met my soulmate, a lady of
            similar interests and views of the world as mine.
          </p>
          <p className=" text-[16px] tracking-wider  text-[var(--light)] dark:text-[var(--dark)]">
            Rifah Tashfia is an SQA Engineer and the reason I decided to leave
            the strenuous waters of freelancing and indulge in a permanent job
            at a position in NewsCred (now Welcome). within 7 days as a Front
            End Developer.
          </p>
          <div className="flex justify-start items-center max-w-[300px] gap-9">
            <div className="flex justify-center items-center gap-1">
              <VisibilitySensor
                active={!startCounting}
                onChange={(isVisible: boolean) => {
                  if (isVisible) {
                    setStartCounting(true);
                  }
                }}
                delayedCall
              >
                <div>
                  {startCounting ? (
                    <CountUp
                      start={0}
                      end={16}
                      duration={2}
                      className="text-[60px] font-bebas font-semibold text-[var(--light)] dark:text-[var(--dark)] "
                    />
                  ) : (
                    <h4 className="text-[60px] font-bebas font-semibold text-[var(--light)] dark:text-[var(--dark)] ">
                      0
                    </h4>
                  )}
                </div>
              </VisibilitySensor>

              <TiPlus className="text-[21px] font-extrabold text-[var(--light)] dark:text-[var(--dark)] " />
            </div>
            <p className="text-[20px] font-bebas text-[var(--light)] dark:text-[var(--dark)] tracking-wider font-medium">
              Years Experience
            </p>
          </div>
          <Button />
        </div>
        <div className="basis-[48%] flex justify-center items-center ">
          <div className="p-5">
            <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full border-2 border-[#dddddd] relative flex justify-center items-center p-8 dark:border-[#191919]">
              <div className="w-[200px] h-[200px] md:w-[290px] md:h-[290px] rounded-full border-2 border-[#dddddd] flex justify-center items-center p-5 dark:border-[#191919]">
                <div className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] rounded-full border-2 border-[#dddddd] flex justify-center items-center p-6 dark:border-[#191919]">
                  <h2 className="font-semibold font-bebas text-center text-[15px] md:text-[17px] tracking-wider">
                    WORKED WITH
                  </h2>
                  {spaceItems.map((item, i) => (
                    <div
                      key={i}
                      className={`absolute w-[60px] h-[60px] text-[10px] font-bebas font-medium md:text-[17px] md:w-[95px] md:h-[95px] text-[var(--light)] dark:text-[var(--dark)] border-2 border-[#dddddd] dark:border-[#191919] bg-background rounded-full text-center flex justify-center items-center ${
                        i === 0 && "top-[0px] left-10 md:top-[30px] md:left-2"
                      } ${i === 1 && "top-10 right-0 md:top-9 md:right-0"} ${
                        i === 2 && "bottom-3 left-5 md:bottom-0 md:left-7"
                      } ${
                        i === 3 && "bottom-20 right-11 md:bottom-20 md:right-20"
                      }`}
                    >
                      {item.tilte}
                    </div>

                  ))}
                  <div className="top-[-10px] left-[150px] md:top-[-15px] md:left-[200px] absolute w-[25px] h-[25px] md:w-[30px] md:h-[30px] border-2 border-[#dddddd] dark:border-[#191919] bg-background rounded-full"></div>
                  <div className="top-[150px] left-[50px] md:top-[250px] md:left-[70px] absolute w-[25px] h-[25px] md:w-[30px] md:h-[30px] border-2 border-[#dddddd] dark:border-[#191919] bg-background rounded-full"></div>
                  <div className="bottom-[50px] right-[18px] md:bottom-[80px] md:right-[25px] absolute w-[25px] h-[25px] md:w-[30px] md:h-[30px] border-2 border-[#dddddd] dark:border-[#191919] bg-background rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certfiStart h-0 w-0 opacity-0"></div>
    </div>
  );
}

export default About;
