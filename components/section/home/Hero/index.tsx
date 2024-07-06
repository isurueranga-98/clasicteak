"use client"
import { FC, useState, useEffect } from "react";
import Image from "next/image";
import img1 from "@/public/img1.png";
import img2 from "@/public/img2.png";
import img3 from "@/public/img1.png";
import img4 from "@/public/img2.png";
import Button from "@/components/UI/Button";

const images = [img1, img2, img3, img4];

const HeroSection: FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 300); 
    }, 5000); 

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center lg:px-10 lg:py-10">
      <div className="relative w-full h-full">
        <div className={`transition-opacity duration-1000 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src={images[currentImageIndex]}
            alt={`img${currentImageIndex + 1}`}
            layout="responsive"
            width={1000}
            height={5000}
            objectFit="cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#353A4F] to-transparent flex items-center">
          <div id="1" className="flex flex-col justify-center pl-10 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl h-full">
            <div className="space-y-0 lg:space-y-4">
              <div className="xl:hidden space-y-0 lg:space-y-4">
                <p className="text-white">We Provide Comfort</p>
                <p className="text-white">to Your Doorstep</p>
              </div>

              <div className="xl:block hidden space-y-0 lg:space-y-4">
                <p className="text-white">We Provide</p>
                <p className="text-white">Comfort</p>
                <p className="text-white">to Your<span className=" text-primary"> Doorstep</span></p>
              </div>

              <div className="text-sm pt-5 md:pt-10 xl:pt-14 2xl:pt-40">
                <Button text="Explore" behavior="link" href="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
