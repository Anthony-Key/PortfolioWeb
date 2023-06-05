import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Box(props: {
  title: string;
  description: string;
  reverse: boolean;
  img: any;
  alt: string;
}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = elementRef.current;
    const options = {
      root: null as Element | null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
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
    <div className={`w-full flex flex-wrap text-arneuraHeroText fade-in-element`} ref={elementRef}>
      <div className={`w-full md:w-1/2 ${props.reverse ? "order-2" : ""}`}>
        <div className="h-full flex flex-col justify-center p-10 fade-up">
          <h1 className="font-bold mb-3 text-3xl">{props.title.replace("'", "&apos;")}</h1>
          <h2 className="text-lg">{props.description}</h2>
        </div>
      </div>
      <div
        className={`w-full md:w-1/2 ${props.reverse ? "order-1" : ""} hide-on-mobile`} // Add the class from the CSS file
        style={{ height: "100%" }}
      >
        <div className="w-full h-full flex justify-center items-center fade-up">
          <div className="relative" style={{ width: "450px", height: "450px" }}>
            <Image
              src={props.img}
              alt={props.alt}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}