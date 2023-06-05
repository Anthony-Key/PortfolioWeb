import Image from "next/image";
import GroupImg from "../../public/330332648_220408960497151_8429396654049302392_n.jpg";

export default function Hero() {
  return (
    <div className="pt-20 w-auto h-screen bg-gradient-to-b from-[#0e111f] to-[#1c223b]">
      <div className="flex flex-col items-center justify-center md:flex-row md:p-40">
        <div className="w-full md:w-2/4 max-w-lg text-center md:text-left">
          <h1 className="font-bold text-arneuraHeroText text-4xl md:text-5xl pb-3">
          Welcome
          </h1>
          <h2 className="text-gray-400 text-lg md:text-xl pb-4">
          To my portfolio, here is a bit about myself: Im 23 years of age, I have 6 years as Software Engineer and have a wide-range of a tech stack including: Unity, .NET, Typescript, Graphql, Frontend & Api Development and many more.          </h2>
          <button onClick={() => { window.location.href = "/Anthony Key - CV.pdf" }} className=" hover:bg-white mr-4 hover:text-[#0e111f] text-white font-bold py-3 px-7 rounded-full border">
            Resume
          </button>

          <button onClick={() => { window.location.href = "https://github.com/Anthony-Key" }} className="mr-4 hover:bg-white hover:text-[#0e111f] text-white font-bold py-3 px-7 rounded-full border">
            Github
          </button>

          <button onClick={() => { window.location.href = "https://www.linkedin.com/in/anthonylloydkey/" }} className=" hover:bg-white hover:text-[#0e111f] text-white font-bold py-3 px-7 rounded-full border">
            Linkedin
          </button>
        </div>
        <div className="w-full md:w-2/4 flex justify-center items-center mt-5 md:mt-0">
          <div className="hidden md:block">
            <Image src={GroupImg} alt="Bespoke Software Banner Image" width={450} height={20} className="float-image rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
