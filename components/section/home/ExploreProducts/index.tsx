"use client"
import { FC } from "react";
import Image from "next/image";
import img3 from "@/public/img3.png";
import art from "@/public/art.png";
import Button from "@/components/UI/Button";

const ExploreProducts: FC = () => {
  return (
    <div className="w-full flex items-center justify-center md:px-4 lg:px-10">
      <div className="hidden md:block md:w-1/2 lg:w-3/5 h-auto">
        <div className="relative h-[800px] w-full bg-black">
          <Image
            src={img3}
            layout="fill"
            objectFit="cover"
            alt="img3"
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5 h-auto">
        <div className="relative h-[400px] w-full bg-red-400">
          <Image
            src={art}
            layout="fill"
            objectFit="cover"
            alt="art"
          />
          <div className=" p-4 text-center absolute inset-0 flex flex-col items-center justify-center space-y-5">
            <p className=" text-3xl text-white">Explore our exclusive Products</p>
            <p className=" text-2xl font-thin text-white">Bring your vision to life with  hand-curated collections, priced just right</p>
            <Button text="Shop Now" behavior="link" href="/"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProducts;
