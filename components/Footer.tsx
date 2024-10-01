import { footerIcons } from "@/Data"
import ToggleButton from "./ToggleButton"


interface FooterProps {
  changeTheme: boolean; 
  setChangeTheme: React.Dispatch<React.SetStateAction<boolean>>; 
}
const Footer: React.FC<FooterProps> = ({ changeTheme, setChangeTheme }) => {
  return (
    <div className="w-full py-[90px] mx-auto">
    <div className="w-full max-w-[80%] mx-auto flex flex-col-reverse md:flex-row gap-6 md:gap-3 justify-center items-center">
      <div className="basis-full md:basis-[30%] flex flex-col gap-4 items-start  md:items-start mt-[60px] mr-[60px] md:mr-0">
        <ToggleButton  changeTheme={changeTheme} setChangeTheme={setChangeTheme}/>
        <p className="text-left font-montreal text-[14px] text-[var(--light)] dark:text-[var(--dark)] font-medium">© 2024 RHY. All rights reserved.</p>
      </div>
  
      <div className="basis-full md:basis-[60%] flex justify-center items-center">
        <div className=" grid grid-cols-1 md:grid-cols-2   gap-5">
          {footerIcons.map((icon, i) => (
            <a key={i} href={icon.link}>
              <div className="font-montreal flex items-center justify-center py-7 gap-2 px-5 border-1 w-[260px] max-w-[260px] md:w-[180px] lg:w-[230px] h-[44px] text-[14px] border-2 text-[var(--light)] border-[var(--light)] dark:border-[var(--dark)] dark:text-[var(--dark)] hover:scale-[1.09] transition-all duration-500">
                <span className="text-[17px]">{icon.icon}</span>
                <p className="font-montreal">{icon.name}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Footer