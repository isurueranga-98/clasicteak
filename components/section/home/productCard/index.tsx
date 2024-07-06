"use client";
import { FC } from "react";
import Image from "next/image";
import p1 from "@/public/p1.png"
import p2 from "@/public/p2.png"
import p3 from "@/public/p3.png"
import p4 from "@/public/p4.png"
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
                src={p1}
                layout="fill"
                objectFit="cover"
                alt="img3"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative h-[200px] lg:h-[250px] w-full">
              <Image
                src={p2}
                layout="fill"
                objectFit="cover"
                alt="img3"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative h-[200px] lg:h-[250px] w-full">
              <Image
                src={p3}
                layout="fill"
                objectFit="cover"
                alt="img3"
              />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative h-[200px] lg:h-[250px] w-full">
              <Image
                src={p4}
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
