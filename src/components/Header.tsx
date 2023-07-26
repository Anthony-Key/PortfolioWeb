import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Header(props: {
  home: string;
  services: string;
  travelling: string;
  headerTitle?: string;
  warning?: string;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav
        className={`px-4 lg:px-6 py-6 w-full top-0 z-10 fixed ${
          scrolled
            ? "bg-[#2d3656] text-white transition duration-300 ease-in-out hide-on-mobile"
            : "bg-gradient-to-b from-[#0e111f] to-[#0e111f] text-white transition duration-300 ease-in-out"
        }`}
      >
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <div>
            <h1 className="text-3xl font-bold">{props.headerTitle}</h1>
          </div>
          <div
            className="hidden justify-center items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0 justify-center items-center float-right">
              <li>
                <Link
                  href={props.home}
                  className={`hover:underline block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={props.services}
                  className={`hover:underline block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  href="#skills"
                  className={`hover:underline block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                >
                  Skills
                </Link>
              </li>

              <li>
                <Link
                  href={props.travelling}
                  className={`hover:underline block py-2 pr-4 pl-3 border-b border-gray-100 lg:border-0 lg:p-0 ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                >
                  Travelling
                </Link>
              </li>

              <li>
                <button
                  className={`border-2 hover:bg-[#0e111f] hover:text-white font-bold py-3 px-4 rounded-full ${
                    scrolled ? "text-white" : "text-white"
                  }`}
                  onClick={() => {
                    window.location.href = "/#contact";
                  }}
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
