"use client";
import About from "@/components/About";
import BottomNavbar from "@/components/BottomNavbar";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";
import { useEffect, useState } from "react";
import face from "/public/images/face.svg";
import gsap from "gsap";

export default function Home() {
  const [changeTheme, setChangeTheme] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),
    });
    if (window.innerWidth > 768) {
      tl.to(".loadAnimation", {
        rotate: "-10deg",
        duration: 0.33,
        yoyo: true,
        repeat: 5,
        ease: "power3.inOut",
      }).to(".loadAnimation", {
        x: -200,
        duration: 0.76,
        ease: "back",
      });
    }
    if (window.innerWidth < 768) {
      tl.to(".loadAnimation", {
        rotate: "-10deg",
        duration: 0.3,
        yoyo: true,
        repeat: 5,
        ease: "power3.inOut",
      }).to(".loadAnimation", {
        x: -100,
        duration: 0.76,
        ease: "back",
      });
    }
  }, []);

  return (
    <main className="font-neue wrapperr">
      {loading ? (
        <div className="bg-background loadWrap text-foreground h-screen w-full  flex md:items-center justify-center ">
          <Image
            src={face}
            alt="Face"
            width={500}
            height={500}
            className="relative loadAnimation z-[90] mt-[20vh] md:mt-mt-[8vh] w-[80px] h-[100px] md:h-[250px] md:w-[190px] lg:w-[17vw] lg:h-[25vw]"
          />
        </div>
      ) : (
        <div>
          <Navbar changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
          <Hero changeTheme={changeTheme} />
          <Services changeTheme={changeTheme} />
          <Experience changeTheme={changeTheme} />
          <About />
          <Certification changeTheme={changeTheme} />
          <Contact />
          <BottomNavbar changeTheme={changeTheme} />
          <Footer changeTheme={changeTheme} setChangeTheme={setChangeTheme} />
        </div>
      )}
    </main>
  );
}
