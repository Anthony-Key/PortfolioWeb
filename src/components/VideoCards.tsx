import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Smile from "../../public/smile-svgrepo-com.svg";
import Agile from "../../public/speed-svgrepo-com.svg";
import Smart from "../../public/bulb-svgrepo-com.svg";
import Communication from "../../public/comments-svgrepo-com.svg";

export default function FadeInOnScroll() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = elementRef.current;
    const options = {
      root: null as Element | null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [elementRef]);
  return (
    <div className=" w-full bg-[#1c223b] fade-in-element" ref={elementRef}>
      <h1 className="font-bold mb-3 text-3xl text-center text-white ">
        Project Videos
      </h1>
      <h2 className="text-gray-400 text-center pb-5">Pick a video that looks interesting to you.</h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 text-[#c7c7c7]">
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/-vCIvz4wbeQ" title="ScreenRecording 2022 02 08 17 34 54" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/72ieHThXbXI" title="orientation" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/91MRk1_8KGE" title="ScreenRecording 2022 06 07 10 24 58" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fBCQ7YzMNLw" title="module2" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/TAVvBzdgXlU" title="2021 04 07 10 18 17" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VAKX_fUzZq8" title="steam" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/VCtfYf0Z0iA" title="Doggo Jumper Gameplay Trailer" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 flex justify-center md:justify-start items-center hover:scale-105">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/PGbTUVB-PAA" title="multiplayer test" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>          </div>
        </div>
      </div>
    </div>
  );
}
