import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Smile from "../../public/smile-svgrepo-com.svg";
import Aws from "../../public/aws (1).svg";
import Unity from "../../public/unity.svg";
import Net from "../../public/Visual_Studio_Icon_2019.svg";
import Graph from "../../public/GraphQL_Logo.svg";
import Typescript from "../../public/Typescript_logo_2020.svg";
import Languages from "../../public/coding-programming-language-svgrepo-com.svg";
import Agile from "../../public/bulb-svgrepo-com.svg";
import Code from "../../public/code-desktop-svgrepo-com.svg";


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
      <h1 className="font-bold mb-3 text-3xl text-center text-white pb-5">
        Skills
      </h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 text-[#c7c7c7]">
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4">
            <div className="p-5 flex items-start">
              <div className="mr-4">
              <Image src={Unity} alt="" width={300}></Image>

              </div>
              <div className="h-auto flex-grow">
                <h1 className="mt-4 font-semibold pb-2 text-center">Unity</h1>
                <span className="text-left">
                With 6 years of experience, including commercial work, I have a strong foundation in Unity. My portfolio showcases achievements like published games on Google Play and Steam, as well as VR Unity projects.
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4">
            <div className="p-5 flex items-start">
              <div className="mr-4">
              <Image src={Net} alt="" width={300}></Image>

              </div>
              <div className="h-auto flex-grow">
                <h1 className="mt-4 font-semibold pb-2 text-center">.Net</h1>
                <span className="text-left">
                As an individual developer, I have built front-end and back-end web apps and APIs using .NET. Some examples of usage would be building an API that has access to a database for my geo-location project.
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4">
            <div className="p-5 flex items-start">
              <div className="mr-4">
              <Image src={Graph} alt="" width={300}></Image>

              </div>
              <div className="h-auto">
                <h1 className="mt-4 text-lg pb-2 text-center">Frontend</h1>
                <span className="text-left">
                Proficient in front-end development, I create visually appealing and functional interfaces. Projects like hellosupermarket.co.uk and this portfolio demonstrate my skills in responsive and intuitive designs.
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4">
            <div className="p-5 flex items-start">
              <div className="mr-4">
              <Image src={Typescript} alt="" width={300}></Image>

              </div>
              <div className="h-auto">
                <h1 className="mt-4 font-semibold pb-2 text-center">Backend</h1>
                <span className="text-left">
                With expertise in backend development, I ensure seamless integration between front-end interfaces and powerful back-end systems. Projects like hellosupermarket.co.uk leverage GraphQL for real-time updates.
                </span>
              </div>
            </div>
          </div>

          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4">
            <div className="p-5 flex items-start">
              <div className="mr-4">
              <Image src={Aws} alt="" width={300}></Image>
              </div>
              <div className="h-auto">
                <h1 className="mt-4 font-semibold pb-2 text-center">
                  Cloud Services
                </h1>
                <span className="text-left">
                Experienced in AWS and Azure, I understand cloud services and their applications. I utilize serverless architecture, AWS Lambda functions, and efficient data management for secure and scalable solutions.
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4">
            <div className="p-5 flex items-start">
              <div className="mr-4">
              <Image src={Languages} alt="" width={300}></Image>
              </div>
              <div className="h-auto">
                <h1 className="mt-4 font-semibold pb-2 text-center">
                  Programming Languages
                </h1>
                <span className="text-left">
                Versatile in C#, Java, TypeScript, and Python, I select the most suitable language for each projects unique requirements. I deliver efficient and high-performance solutions tailored to specific needs.
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4">
            <div className="p-5 flex items-start">
              <div className="mr-4">
              <Image src={Agile} alt="" width={300}></Image>

              </div>
              <div className="h-auto">
                <h1 className="mt-4 font-semibold pb-2 text-center">Agile</h1>
                <span className="text-left">
                I follow Agile methodologies, including Scrum and test-driven development, for smooth project execution and collaboration. Extensive experience working independently and in teams ensures effective communication and continuous improvement.
                </span>
              </div>
            </div>
          </div>
          <div className="p-2 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4">
            <div className="p-5 flex items-start">
              <div className="mr-4">
              <Image src={Code} alt="" width={300}></Image>
              </div>
              <div className="h-auto">
                <h1 className="mt-4 font-semibold pb-2 text-center">
                  Frameworks
                </h1>
                <span className="text-left">
                Expertise extends to a wide range of frameworks. In Unity, I utilize frameworks like VRIF, ARCore, and XR for immersive experiences. In .NET development, I leverage frameworks for optimized solutions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
