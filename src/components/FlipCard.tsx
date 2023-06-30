import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Smile from "../../public/smile-svgrepo-com.svg";
import Agile from "../../public/speed-svgrepo-com.svg";
import Smart from "../../public/bulb-svgrepo-com.svg";
import Communication from "../../public/comments-svgrepo-com.svg";
import Aws from "../../public/aws (1).svg";
import Unity from "../../public/unity.svg";
import Net from "../../public/Visual_Studio_Icon_2019.svg";
import Graph from "../../public/GraphQL_Logo.svg";
import Typescript from "../../public/Typescript_logo_2020.svg";
import Languages from "../../public/coding-programming-language-svgrepo-com.svg";
import Agile2 from "../../public/bulb-svgrepo-com.svg";
import Code from "../../public/code-desktop-svgrepo-com.svg";

export default function FadeInOnScroll() {
  const elementRefs = useRef<Array<HTMLDivElement | null>>([]);

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
          }, 200 * index); // Adjust the delay as needed (in milliseconds)
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
        Skills & Knowledge
      </h1>
      <h2 className="text-[#c0c1c2] text-center pb-5"></h2>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 text-[#c7c7c7]">
          <div
            className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 hover:scale-105"
            ref={(ref) => (elementRefs.current[0] = ref)}
          >
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image
                  src={Unity}
                  alt="Customer Communication"
                  width={80}
                ></Image>
              </div>
              <div>
                <h1 className="font-semibold text-left text-2xl pt-6">Unity</h1>
              </div>
            </div>
            <span className="text-left text-lg">
              {" "}
              With 6 years of experience, including commercial work, I have a
              strong foundation in Unity. My portfolio showcases achievements
              like published games on Google Play and Steam, as well as VR Unity
              projects.
            </span>
          </div>

          <div
            className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 hover:scale-105"
            ref={(ref) => (elementRefs.current[1] = ref)}
          >
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image src={Agile} alt="Agile Approach" width={80}></Image>
              </div>
              <div className="">
                <h1 className="font-semibold text-left text-2xl pt-6">Agile</h1>
              </div>
            </div>
            <span className="text-left text-lg">
              I follow Agile methodologies, including Scrum and test-driven
              development, for smooth project execution and collaboration.
              Extensive experience working independently and in teams ensures
              effective communication and continuous improvement.
            </span>
          </div>

          <div
            className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 hover:scale-105"
            ref={(ref) => (elementRefs.current[2] = ref)}
          >
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image src={Code} alt="Fast Development" width={80}></Image>
              </div>
              <div className="">
                <h1 className="font-semibold text-left text-2xl pt-6">
                  Frameworks
                </h1>
              </div>
            </div>
            <span className="text-left text-lg">
              My expertise extends to a wide range of frameworks. In Unity, I
              utilize frameworks like VRIF, ARCore, and XR for immersive
              experiences. In .NET development, I leverage frameworks for
              optimized solutions.
            </span>
          </div>

          <div
            className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 hover:scale-105"
            ref={(ref) => (elementRefs.current[3] = ref)}
          >
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image
                  src={Typescript}
                  alt="Customer Communication"
                  width={80}
                ></Image>
              </div>
              <div>
                <h1 className="font-semibold text-left text-2xl pt-6">
                  Frontend
                </h1>
              </div>
            </div>
            <span className="text-left text-lg">
              {" "}
              Proficient in front-end development, I create visually appealing
              and functional interfaces. Projects like hellosupermarket.co.uk
              and this portfolio demonstrate my skills in responsive and
              intuitive designs.
            </span>
          </div>

          <div
            className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 hover:scale-105"
            ref={(ref) => (elementRefs.current[4] = ref)}
          >
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image
                  src={Graph}
                  alt="Customer Communication"
                  width={80}
                ></Image>
              </div>
              <div>
                <h1 className="font-semibold text-left text-2xl pt-6">
                  Backend
                </h1>
              </div>
            </div>
            <span className="text-left text-lg">
              {" "}
              With expertise in backend development, I ensure seamless
              integration between front-end interfaces and powerful back-end
              systems. Projects like hellosupermarket.co.uk leverage GraphQL for
              real-time updates.
            </span>
          </div>

          <div
            className="opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 hover:scale-105"
            ref={(ref) => (elementRefs.current[5] = ref)}
          >
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image
                  src={Languages}
                  alt="Customer Satisfaction"
                  width={80}
                ></Image>
              </div>
              <div className="">
                <h1 className="font-semibold text-left text-2xl pt-6">
                  Languages
                </h1>
              </div>
            </div>
            <span className="text-left text-lg">
              Versatile in C#, Java, TypeScript, and Python, I select the most
              suitable language for each projects unique requirements. I deliver
              efficient and high-performance solutions tailored to specific
              needs.
            </span>
          </div>
          <div
            className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 hover:scale-105"
            ref={(ref) => (elementRefs.current[6] = ref)}
          >
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image
                  src={Net}
                  alt="Customer Communication"
                  width={80}
                ></Image>
              </div>
              <div>
                <h1 className="font-semibold text-left text-2xl pt-6">.Net</h1>
              </div>
            </div>
            <span className="text-left text-lg">
              {" "}
              As an individual developer, I have built front-end and back-end
              web apps and APIs using .NET. Some examples of usage would be
              building an API that has access to a database for my geo-location
              project.
            </span>
          </div>

          <div
            className=" opacity-0 p-5 rounded-2xl shadow-[#3f4b75] bg-[#2d3656] hover:border-b-blue-500 hover:border-b-4 border-b-4 hover:scale-105"
            ref={(ref) => (elementRefs.current[7] = ref)}
          >
            <div className="p-5 flex items-start">
              <div className="mr-4">
                <Image
                  src={Aws}
                  alt="Customer Communication"
                  width={80}
                ></Image>
              </div>
              <div>
                <h1 className="font-semibold text-left text-2xl pt-6">
                  Cloud Services
                </h1>
              </div>
            </div>
            <span className="text-left text-lg">
              {" "}
              Experienced in AWS and Azure, I understand cloud services and
              their applications. I utilize serverless architecture, AWS Lambda
              functions, and efficient data management for secure and scalable
              solutions.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
