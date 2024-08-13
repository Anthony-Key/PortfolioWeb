import React, { useEffect } from "react";
import Hero from "@/components/Hero";
import FlipCard from "@/components/FlipCard";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import VideoCards from "@/components/VideoCards";
import ReactGA from "react-ga";

export default function Home() {
  const TRACKING_ID = "UA-198816685-1";

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    console.log("GA Initialised.");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <section id="home" className="bg-white"></section>

      <Header home={"#home"} services={"#projects"} travelling={"/travelhub"} />

      <Hero />

      <section id="skills" className="bg-white"></section>

      <div className="w-full">
        <FlipCard />
      </div>

      <section id="projects" className="bg-white"></section>
      <div className="w-full">
        <VideoCards />
      </div>

      <div className="flex flex-col items-center bg-white">
        <div className="w-full max-w-6xl">
          <Contact />
        </div>
      </div>
    </>
  );
}
