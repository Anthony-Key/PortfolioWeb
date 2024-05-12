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
        "https://github.com/Anthony-Key/PortfolioWeb/blob/main/assets/travel/finland/IMG_9644.JPG?raw=true",
      github: "finland",
    },
    {
      name: "Uk",
      previewImg:
        "https://github.com/Anthony-Key/PortfolioWeb/blob/main/assets/travel/uk/Screenshot_2022-05-18-19-19-33-484_com.miui.gallery.jpg?raw=true",
      github: "uk",
    },
    {
      name: "Croatia",
      previewImg:
        "https://github.com/Anthony-Key/PortfolioWeb/blob/main/assets/travel/croatia/440915898_2117788971922719_8813615629784179464_n.jpg?raw=true",
      github: "croatia",
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

      <div className="bg-[#1c223b] h-full p-[4%] w-full flex flex-wrap justify-center pt-[10%]">
        {locations.map((location) => (
          <div
            key={0}
            className="m-3 w-full min-w-[300px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
          >
            <Link href={`/travelling?location=${location.github}`}>
              <div className=" rounded-3xl">
                <img
                  src={location.previewImg}
                  className="hover:scale-105 rounded-full w-64 h-64 object-cover mx-auto border-2"
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
