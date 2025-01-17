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
    { "https://www.youtube.com/embed/BL-PhVhNKPs": "2021 04 07 10 18 17" },
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
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto">
        <h1 className="mb-3 text-3xl text-left text-black">
          Projects & Videos
        </h1>
        <h3 className="text-left pb-5 text-black">
          Each video and screenshot has work that I have done in the past alone
          or with a team of developers.
        </h3>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="bg-black max-w-6xl w-full bg-opacity-5 rounded-lg p-6 space-y-6">
          <a
            href="https://www.traveltrekker.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="Screenshot 2024-08-13 215957.png"
                alt="Website that I built using TypeScript, GraphQL, Tailwind, and React"
                className="w-[120px] h-[100px] rounded-lg mr-4 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Travel Trekker</h3>
                <p className="text-gray-600">
                  A travelling website that provides attractions all around the
                  world. This uses Typescript, React, NextJS, Graphql &
                  Terraform.
                </p>
              </div>
            </div>
          </a>
          <a
            href="https://hellosupermarket.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="screen.jpg"
                alt="Website that I built using TypeScript, GraphQL, Tailwind, and React"
                className="w-[120px] h-[100px] rounded-lg mr-4 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Hello Supermarket</h3>
                <p className="text-gray-600">
                  A website built using TypeScript, GraphQL, Tailwind, and
                  React. It showcases a modern, responsive design for an online
                  supermarket.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://anthony-key.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="screen2.jpg"
                alt="Portfolio Website"
                className="w-[120px] h-[100px] rounded-lg mr-4 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Portfolio</h3>
                <p className="text-gray-600">
                  My personal portfolio, showcasing projects, skills, and
                  experience in web development. Built with a focus on clean
                  design and usability.
                </p>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/Anthony-Key/Recipme"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="flex items-center bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src="screen3.jpg"
                alt="Recipme Project"
                className="w-[120px] h-[100px] rounded-lg mr-4 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">Recipme</h3>
                <p className="text-gray-600">
                  A project hosted on GitHub, Recipme is a recipe-sharing
                  platform that demonstrates my ability to integrate various web
                  technologies.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 text-[#c7c7c7]">
          {youtubeUrls.map((url, index) => {
            const [urlKey, urlValue] = Object.entries(url)[0];
            return (
              <div
                key={index}
                ref={(ref) => (elementRefs.current[index] = ref)}
                className="opacity-0 rounded-2xl border-b-4 flex justify-center md:justify-start items-center "
              >
                <iframe
                  className="rounded-lg"
                  width="280"
                  height="280"
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
    </div>
  );
}
