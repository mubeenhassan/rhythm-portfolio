import Image from "next/image";
import experience_title from "../public/images/dark/experience-title-dark.svg";
import experience_title_light from "../public/images/light/experience-title-light.svg";

import VerticalSlider from "./VerticalSlider";
import { useTheme } from "next-themes";


interface ExperienceProps {
  changeTheme: boolean; 
}
const Experience: React.FC<ExperienceProps> = ({ changeTheme }) => {
  const {theme} =useTheme()
  return (
    <div className="experience w-full h-auto py-[30px] px-[20px]">
      <div className="w-full flex flex-col gap-4 items-center justify-center">
        <div className="w-full mx-auto h-auto flex justify-center items-center">
          {changeTheme?(
            <Image
            src={experience_title}
            alt="experience"
            className="w-full mx-3"
          />
          ):(
            <Image
            src={experience_title_light}
            alt="experience"
            className="w-full mx-3"
          />
          )}
          
        </div>
        <div>
          <VerticalSlider changeTheme={changeTheme}/>
         {/* <div className="w-full px-[30px] flex gap-3 mx-auto ">
            <div className="flex justify-center items-center flex-col ml-8">
                <Image src={unordered} alt=""/>
                <Image src={line} alt="" className="h-[290px]"/>

            </div>
         <div className=" w-[75%] mx-auto flex flex-col gap-6 md:flex-row max-h-[300px]  py-[60px] px-3 border-b-2 border-b-gray-500 -mt-[65px]">
            <div className="w-full md:w-[50%] flex flex-col gap-2 md:gap-3 justify-start items-start ">
              <span className="text-gray-400 text-[18px] font-montreal">September 2015 - November 2017</span>
              <h1 className="text-[34px] max-w-[380px] font-montreal font-semibold text-[var(--light)] dark:text-[var(--dark)] ">OLIVINE LIMITED</h1>
            </div>
            <div className="w-full md:w-[50%] gap-2 md:gap-6  flex flex-col justify-start items-start ">
              <span className="text-[var(--light)] dark:text-[var(--dark)] text-[20px] font-medium">Full Stack Software Engineer</span>
              <p className="text-[var(--light)] dark:text-[var(--dark)] text-[15px] line-clamp-4 ">
                At Bulk Studio, I was responsible for supporting the
                organization's success by analyzing the Envato marketplace and
                implementing unique ideas to enhance the design and development
                of its products.
              </p>
            </div>
          </div>
         </div> */}
        
        
         
        </div>
      </div>
    </div>
  );
}

export default Experience;
