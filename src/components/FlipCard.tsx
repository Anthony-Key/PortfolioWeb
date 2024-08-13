import React, { useEffect, useRef } from "react";

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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-12">
        <h1 className="font-bold text-4xl text-left mb-12 text-gray-800">
          Skills & Knowledge
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Programming Languages
            </h2>
            <ul className="list-disc list-inside ml-5 text-gray-600 space-y-2">
              <li>C#</li>
              <li>Typescript</li>
              <li>JavaScript</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Frameworks & Libraries
            </h2>
            <ul className="list-disc list-inside ml-5 text-gray-600 space-y-2">
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
              <li>NextJS</li>
              <li>Graphql</li>
              <li>Terraform</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Tools & Platforms
            </h2>
            <ul className="list-disc list-inside ml-5 text-gray-600 space-y-2">
              <li>Unity</li>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">
              Other Skills
            </h2>
            <ul className="list-disc list-inside ml-5 text-gray-600 space-y-2">
              <li>Agile Methodologies</li>
              <li>CI/CD Pipelines</li>
              <li>Problem Solving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
