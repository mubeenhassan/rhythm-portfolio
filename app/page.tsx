'use client'
import About from "@/components/About";
import BottomNavbar from "@/components/BottomNavbar";
import Certification from "@/components/Certification";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { useState } from "react";

export default function Home() {

  const [changeTheme,setChangeTheme]=useState(true)


  return (
    <main className="font-montreal">
    <div>
      <Navbar changeTheme={changeTheme} setChangeTheme={setChangeTheme}/>
      <Services changeTheme={changeTheme}/>
      <Experience changeTheme={changeTheme}/>
      <About/>
      <Certification changeTheme={changeTheme}/>
      <Contact/>
      <BottomNavbar changeTheme={changeTheme}/>
      <Footer changeTheme={changeTheme} setChangeTheme={setChangeTheme}/>
    </div>
    </main>
  );
}
