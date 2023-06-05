import React from 'react';
import Hero from '@/components/Hero';
import Box from '@/components/Box';
import SoftwareLogosImg from '../../public/—Pngtree—airforce jet fighter icon_7767526.svg';
import FlipCard from '@/components/FlipCard';
import Contact from '@/components/Contact';
import Header from '@/components/Header';

export default function About() {
  return (
    <>
        <Header home={"/#"} services={"#services"} technologies={"#technologies"} />
        <div className="flex flex-col items-center bg-gradient-to-b from-[#0e111f] to-[#1c223b] h-screen p-52">
          <div className="w-full max-w-6xl">
            <Box
              title={'Our Mission'}
              description={`At Arneura, our mission is to provide customized solutions that cater to our clients' unique needs, offering them the best value for their investment. Our team comprises experienced developers, architects, and consultants who are proficient in their respective domains and equipped with the latest tools and knowledge to deliver quality solutions. We are dedicated to maintaining the highest standards of excellence, innovation, and customer satisfaction, making us a reliable partner in the industry. As the digital landscape is continuously evolving, we are committed to helping our clients thrive by providing them with the support they need to succeed.`}
              reverse={true}
              img={SoftwareLogosImg}
              alt={'About Us Image'}
            />
          </div>
        </div>
    </>
  );
}