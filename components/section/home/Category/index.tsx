"use client";
import Image from "next/image";
import { FC } from "react";
import c1 from "@/public/c1.png";
import c2 from "@/public/c2.png";
import c3 from "@/public/c3.png";
import Button from "@/components/UI/Button";

const Category: FC = () => {
  return (
    <div className="lg:px-10 lg:py-10 flex items-center justify-center space-x-10 px-4 py-4">
      <div className="relative  ">
        <Image
          src={c1}
          layout="responsive"
          
          objectFit="cover"
          alt="c1"
        />
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Button text="Shop Now" behavior="link" href="/"/>
        </div>
      </div>

      <div className="relative hidden lg:block">
        <Image
          src={c2}
          layout="responsive"
          
          objectFit="cover"
          alt="c1"
        />
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Button text="Shop Now" behavior="link" href="/"/>
        </div>
      </div>

      <div className="relative hidden sm:block">
        <Image
          src={c3}
          layout="responsive"
          
          objectFit="cover"
          alt="c1"
        />
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Button text="Shop Now" behavior="link" href="/"/>
        </div>
      </div> 
    </div>
  );
};

export default Category;


// absolute   