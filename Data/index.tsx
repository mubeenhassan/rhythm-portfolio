import { describe } from "node:test";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import cer1 from '../public/images/cert-1.svg'

export const navItems=[
    {
        name:'Home',
        link:'/'
    },
    {
        name:'Services',
        link:'services'
    },
    {
        name:'Experience',
        link:'experience'
    },
    {
        name:'About Me',
        link:'about'
    }
] 
export const navIcons=[
    {
        icon:<FaFacebookF />,
        link:''
    },
    {
        icon:<FaInstagram />,
        link:''
    },
    {
        icon:<FaLinkedinIn />,
        link:''
    },
    {
        icon:<FaGithub />,
        link:''
    }
] 
export const skillsItems=[
    {
        title:'Infrastructure',
        des:'If you are wondering about super secure, fast, easy to manage infrastructure within budget — I can architect it.'
    },
    {
        title:'Security audits',
        des:'My multi-point review will make your system, applications, or site secure – the attackers have no chance against me.'
    },
    {
        title:'UX/UI design',
        des:'I make clean user experience with minimal designs. If you decide on a more complicated design, there are plenty of talented people who can do that.'
    },
    {
        title:'Speed optimization',
        des:'Sluggish site? My inspection will identify each speedbump on your site. After that, we can work together to fix all of them.'
    },
    {
        title:'Complex migrations',
        des:'Feel stuck on a platform you hate? I will move your site to the platform you love. Yes, I know, it sounds complicated, but I know how to do it.'
    },
    {
        title:'Advanced solutions',
        des:'Producing quality software is an art and science at the same time. Let’s build you a super-secure and speedy product with the features you need.'
    },
    
] 

export const experiences=[
    {
        data:'September 2015 - November 2017',
        title:'OLIVINE LIMITED',
        subtitle:'Full Stack Software Engineer',
        description:`At Bulk Studio, I was responsible for supportin organization'ssuccess by analyzing the Envato marketplace and implementing unique ideas to enhance the design and development
        of its products.`
    },
    {
        data:'September 2015 - November 2017',
        title:'OLIVINE LIMITED',
        subtitle:'Full Stack Software Engineer',
        description:`At Bulk Studio, I was responsible for supportin organization'ssuccess by analyzing the Envato marketplace and implementing unique ideas to enhance the design and development
        of its products.`
    },
    {
        data:'September 2015 - November 2017',
        title:'OLIVINE LIMITED',
        subtitle:'Full Stack Software Engineer',
        description:`At Bulk Studio, I was responsible for supportin organization'ssuccess by analyzing the Envato marketplace and implementing unique ideas to enhance the design and development
        of its products.`
    },
    {
        data:'September 2015 - November 2017',
        title:'OLIVINE LIMITED',
        subtitle:'Full Stack Software Engineer',
        description:`At Bulk Studio, I was responsible for supportin organization'ssuccess by analyzing the Envato marketplace and implementing unique ideas to enhance the design and development
        of its products.`
    },
    {
        data:'September 2015 - November 2017',
        title:'OLIVINE LIMITED',
        subtitle:'Full Stack Software Engineer',
        description:`At Bulk Studio, I was responsible for supportin organization'ssuccess by analyzing the Envato marketplace and implementing unique ideas to enhance the design and development
        of its products.`
    },
    {
        data:'September 2015 - November 2017',
        title:'OLIVINE LIMITED',
        subtitle:'Full Stack Software Engineer',
        description:`At Bulk Studio, I was responsible for supportin organization'ssuccess by analyzing the Envato marketplace and implementing unique ideas to enhance the design and development
        of its products.`
    },
    {
        data:'September 2015 - November 2017 Last',
        title:'OLIVINE LIMITED',
        subtitle:'Full Stack Software Engineer',
        description:`At Bulk Studio, I was responsible for supportin organization'ssuccess by analyzing the Envato marketplace and implementing unique ideas to enhance the design and development
        of its products.`
    },
]

export const spaceItems=[
    {
        tilte:'SQUARE UP',
        otherclass:'-top-[20px] left-[20px]'
    },
    {
        tilte:'EPSON',
        otherclass:'top-3'
    },
    {
        tilte:'VALLEY',
        otherclass:'top-6'
    },
    {
        tilte:'DIRECTV',
        otherclass:'top-10'
    },
]

export const settings = {
    dots: false,
    slidesToShow: 6, 
    slidesToScroll: 1,
    autoplay: false,
    arrows: false, 
    infinite: false,
    cssEase: "ease-in-out",
    speed: 500,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6, 
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.3, 
        },
      },
      
    ],
  };

  export const certifications=[
    {
        img:cer1
    },
    {
        img:cer1
    },
    {
        img:cer1
    },
    {
        img:cer1
    },
    {
        img:cer1
    },
    {
        img:cer1
    },
    {
        img:cer1
    },
    
]

export const footerIcons=[
    {
        icon:<FaFacebookF />,
        name:'FACKBOOK',
        link:''
    },
    {
        icon:<FaInstagram />,
        name:'INSTAGRAM',
        link:''
    },
    {
        icon:<FaLinkedinIn />,
        name:'LINKEDIN',
        link:''
    },
    {
        icon:<FaGithub />,
        name:'GITHUB',
        link:''
    }
]