import React from "react";
import Hero from "@/components/Hero";
import Box from "@/components/Box";
import SoftwareLogosImg from "../../public/groupproject.svg";
import FlipCard from "@/components/FlipCard";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import VideoCards from "@/components/VideoCards";

export default function Home() {
  return (
    <>
      <Header home={"#home"} services={"#projects"} technologies={"/about"} />

      <Hero />

      <section id="skills" className="bg-[#1c223b]"></section>

      <div className="w-full">
        <FlipCard />
      </div>

      <section id="projects" className="bg-[#1c223b]"></section>
      <div className="w-full">
        <VideoCards />
      </div>

      <div className="flex flex-col items-center bg-[#1c223b]">
        <div className="w-full max-w-6xl">
          <Contact />
        </div>
      </div>
    </>
  );
}
