import React, { useEffect, useRef } from "react";

export default function FadeInOnScroll() {
  const elementRefs = useRef<Array<HTMLDivElement | null>>([]);

  const youtubeUrls = [
    { "https://www.youtube.com/embed/-vCIvz4wbeQ": "Worlds platform" },
    { "https://www.youtube.com/embed/72ieHThXbXI": "Orientation" },
    {
      "https://www.youtube.com/embed/91MRk1_8KGE":
        "ScreenRecording 2022 06 07 10 24 58",
    },
    { "https://www.youtube.com/embed/fBCQ7YzMNLw": "Module2" },
    { "https://www.youtube.com/embed/QA_bTUDs58Q": "Two" },
    { "https://www.youtube.com/embed/_BX6EU4jXQk": "Factory Wrong" },
    { "https://www.youtube.com/embed/tNEwbIzz878": "Factory FireSpreading" },
    {
      "https://www.youtube.com/embed/52TWUcULHKw":
        "Factory Practical Extinguish",
    },
    { "https://www.youtube.com/embed/TAVvBzdgXlU": "2021 04 07 10 18 17" },
    { "https://www.youtube.com/embed/VAKX_fUzZq8": "Steam" },
    {
      "https://www.youtube.com/embed/VCtfYf0Z0iA":
        "Doggo Jumper Gameplay Trailer",
    },
    { "https://www.youtube.com/embed/PGbTUVB-PAA": "Multiplayer Test" },
  ];

  useEffect(() => {
    const options = {
      root: null as Element | null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("fade-in");
          }, 200 * index);
        }
      });
    }, options);

    elementRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      elementRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="w-full bg-[#1c223b]">
      <h1 className="font-bold mb-3 text-3xl text-center text-white">
        Projects & Videos
      </h1>
      <h2 className="text-gray-400 text-center pb-5 text-2xl font-bold">
        All projects are built from the ground up without any templates.
      </h2>
      <h2 className="text-white text-center pb-5 text-2xl font-bold">Unity</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 text-[#c7c7c7]">
          {youtubeUrls.map((url, index) => {
            const [urlKey, urlValue] = Object.entries(url)[0];
            return (
              <div
                key={index}
                ref={(ref) => (elementRefs.current[index] = ref)}
                className="opacity-0 p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105"
              >
                <iframe
                  width="560"
                  height="315"
                  src={urlKey}
                  title={urlValue}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            );
          })}
        </div>
      </div>

      <h2 className="text-white text-center pb-5 text-2xl font-bold">
        Website Projects (Typescript, React, Graphql & Tailwind)
      </h2>
      <div className="flex flex-wrap justify-center">
        <a href="https://hellosupermarket.co.uk">
          <img
            className="border-white border-2 rounded-3xl mx-auto mr-4  w-[530px] h-[350px]"
            src="screen.jpg"
            width="530"
            height="400"
            alt="Website that I built using typescript, graphql, tailwind and react"
          ></img>
        </a>

        <a href="https://anthony-key.co.uk">
          <img
            className="border-white border-2 rounded-3xl mx-auto mr-4 w-[530px] h-[350px]"
            src="screen2.jpg"
            width="530"
            height="400"
            alt="Link to portfolio"
          ></img>
        </a>
      </div>
    </div>
  );
}
