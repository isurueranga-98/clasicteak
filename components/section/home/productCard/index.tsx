"use client";
import { FC } from "react";
import Image from "next/image";
import img3 from "@/public/img3.png";
import art from "@/public/art.png";
import Button from "@/components/UI/Button";

const ProductCard: FC = () => {
  return (
    <div className="w-full flex items-center justify-center md:px-4 lg:px-10 py-7">
      <div className="hidden md:block md:w-1/3 lg:w-2/5 h-auto pr-5">
        <div className="relative h-[416px] lg:h-[516px] w-full">
          <Image
            src={art}
            layout="fill"
            objectFit="cover"
            alt="art"
          />
        </div>
      </div>

      <div className="w-full md:w-3/4 lg:w-3/5 h-auto">
        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="relative h-[200px] lg:h-[250px] w-full">
              <Image
                src={img3}
                layout="fill"
                objectFit="cover"
                alt="img3"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative h-[200px] lg:h-[250px] w-full">
              <Image
                src={img3}
                layout="fill"
                objectFit="cover"
                alt="img3"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative h-[200px] lg:h-[250px] w-full">
              <Image
                src={img3}
                layout="fill"
                objectFit="cover"
                alt="img3"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative h-[200px] lg:h-[250px] w-full">
              <Image
                src={img3}
                layout="fill"
                objectFit="cover"
                alt="img3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
