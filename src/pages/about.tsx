import React from "react";
import Box from "@/components/Box";
import SoftwareLogosImg from "../../public/MissionImage.svg";
import Header from "@/components/Header";

export default function About() {
  return (
    <>
      <Header
        home={"/#"}
        services={"#services"}
        technologies={"#technologies"}
      />
      <div className="flex flex-col items-center bg-gradient-to-b from-[#0e111f] to-[#1c223b] h-screen p-52">
        <div className="w-full max-w-6xl">
          <Box
            title={"Coming soon..."}
            description={`As of 05/06/2023 this is in development. Stay tuned :)`}
            reverse={true}
            img={SoftwareLogosImg}
            alt={"Travelling"}
          />
        </div>
      </div>
    </>
  );
}
