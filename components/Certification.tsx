import Image from "next/image"
import star from '../public/images/dark/star.svg'

import { certifications, settings, spaceItems } from "@/Data"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CertificationProps {
    changeTheme: boolean; 
  }
const Certification: React.FC<CertificationProps> = ({ changeTheme }) => {

  return (
    <div className="w-full px-[30px] py-[40px] mx-auto">
        <div className="w-full max-w-[85%] flex flex-col mx-auto gap-10">
            <div className="w-full flex justify-between items-start p-3">
                {changeTheme?(
                    <Image src={star} alt=""/>

                ):(
                    <Image src={star} alt="" />
                )}
                <h2 className="font-montreal font-semibold tracking-wider text-[20px] sm:text-[22px] text-[var(--light)] dark:text-[var(--dark)] -mt-[100px] w-auto text-center md:-mt-[0px]">Rhythm's certifications</h2>
                {changeTheme?(
                    <Image src={star} alt=""/>

                ):(
                    <Image src={star} alt="" />
                )}
            </div>
            <div className="mx-auto max-w-[99%]">
            <Slider {...settings} className="w-[95%]  mx-auto flex justify-center items-center text-center gap-4 cursor-pointer">
        {certifications.map((item, i) => (
            <Image key={i} src={item.img} alt='certification'className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"/>
               
        
        ))}
      </Slider>
            </div>
            <div className="w-full flex justify-between items-start p-3">
                {changeTheme?(
                    <Image src={star} alt=""/>

                ):(
                    <Image src={star} alt="" />
                )}
                
                {changeTheme?(
                    <Image src={star} alt=""/>

                ):(
                    <Image src={star} alt="" />
                )}
            </div>
        </div>
    </div>
  )
}

export default Certification