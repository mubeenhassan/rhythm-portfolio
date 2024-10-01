import Image from "next/image";
import withme from "../public/images/dark/withme-text-dark.svg";
import { skillsItems } from "@/Data";

interface SkillsProps {
  changeTheme: boolean; 
}
const Skills: React.FC<SkillsProps> = ({ changeTheme }) => {

  return (
    <div className="services w-full h-full pt-[100px] mx-auto">
      <div className=" w-full px-[30px] md:px-[40px] flex flex-col items-center justify-center gap-2 lg:flex-row mx-auto ">
        <div className="basis-[50%] flex flex-col justify-center items-center w-full  h-full p-6 mx-auto">
          <div
            className={`w-[100%] max-w-[800px] h-[550px] max-h-[750px] sm:h-[650px] flex flex-col justify-center items-center p-6 bg-[url('/images/light/globe-light.svg')] bg-contain bg-center bg-no-repeat dark:bg-[url('/images/dark/globe-dark.svg')] `}
          >
            <div className="w-[80%] max-w-[400px] sm:w-[600px] bg-[url('/images/dark/WRK-text-dark.svg')] dark:bg-[url('/images/dark/WRK-text-dark.svg')] bg-contain bg-center bg-no-repeat flex items-center justify-center">
              <div className=" w-[125px] h-[125px] sm:w-[200px] sm:h-[200px] md:w-[200px] md:h-[200px] lg:w-[220px] lg:h-[220px] bg-[url('/images/light/caricature.webp')] dark:bg-[url('/images/dark/caricature.webp')] bg-contain bg-center bg-no-repeat mr-2 sm:mr-6 mt-8 sm:mt-0 md:mt-[20px] lg:mt-[40px] "></div>
            </div>
            <Image
              src={withme}
              alt="withme"
              className=" w-[80%] max-w-[300px] sm:-ml-[70px] "
            />
          </div>
        </div>
        <div className="basis-[50%] w-full flex justify-center items-center mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {skillsItems.map((skill, i) => {
              return (
                <div
                  key={i}
                  className="group mx-auto w-[90%] h-[140px] sm:max-w-[340px] xl:w-[290px] sm:h-[180px] lg:h-[240px] xl:h-[185px] flex flex-col justify-center items-start border dark:border-gray-800 shadow-lg p-3 leading-tight xl:p-6
             
             hover:bg-[var(--dark-bg)] dark:hover:bg-[var(--light-bg)] 
             transition-all duration-500 hover:scale-[1.07] cursor-pointer"
                >
                  <h2
                    className="font-montreal text-[24px] font-semibold xl:mb-2 text-[var(--light)] dark:text-[var(--dark)] 
                group-hover:text-[var(--dark)] dark:group-hover:text-[var(--light)] mb-2 lg:mb-0"
                  >
                    {skill.title}
                  </h2>
                  <p
                    className="font-montreal text-[15px] text-[var(--light)] dark:text-[var(--dark)] 
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
}

export default Skills;
