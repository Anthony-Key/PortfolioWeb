import Header from "@/components/Header";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import ReactGA from "react-ga";

interface Locations {
  name: string;
  previewImg: string;
  github: string;
}

const TravelHub: React.FC = () => {
  const locations: Locations[] = [
    {
      name: "Finland",
      previewImg:
        "https://raw.githubusercontent.com/Anthony-Key/PortfolioWeb/main/assets/travel/Finland/IMG_20230429_110716.jpg",
      github: "Finland",
    },
    {
      name: "Uk",
      previewImg:
        "https://raw.githubusercontent.com/Anthony-Key/PortfolioWeb/main/assets/travel/Uk/FB_IMG_1629978121329.jpg",
      github: "Uk",
    },
    {
      name: "Germany",
      previewImg:
        "https://github.com/Anthony-Key/PortfolioWeb/blob/main/assets/travel/germany/received_641634794369382.jpeg?raw=true",
      github: "germany",
    },
    {
      name: "Italy",
      previewImg:
        "https://raw.githubusercontent.com/Anthony-Key/PortfolioWeb/main/assets/travel/italy/IMG_20211015_161726.jpg",
      github: "italy",
    },
    {
      name: "Netherlands",
      previewImg:
        "https://raw.githubusercontent.com/Anthony-Key/PortfolioWeb/main/assets/travel/netherlands/IMG-20230514-WA0000.jpg",
      github: "netherlands",
    },
    {
      name: "Spain",
      previewImg:
        "https://raw.githubusercontent.com/Anthony-Key/PortfolioWeb/main/assets/travel/spain/IMG_20230304_125258.jpg",
      github: "spain",
    },
  ];

  useEffect(() => {
    console.log("GA Viewed.");
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <>
      <Header
        home={"/"}
        services={""}
        travelling={""}
        headerTitle={"Travel Hub"}
      />

      <div className="bg-[#1c223b] h-screen w-full flex flex-wrap justify-center pt-[10%]">
        {locations.map((location) => (
          <div
            key={0}
            className="p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          >
            <Link href={`/travelling?location=${location.github}`}>
              <div className="hover:bg-white hover:bg-opacity-5 rounded-3xl">
                <img
                  src={location.previewImg}
                  className="rounded-full w-64 h-64 object-cover mx-auto"
                />
              </div>
              <h2 className="text-white font-semibold text-center mt-3 text-xl">
                {location.name.toUpperCase()}
              </h2>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default TravelHub;
