"use client";
import { FC, useState } from "react";
import { furniture } from "@/components/constants/index";
import FCard from "@/components/UI/ProductCard";
import f1 from "@/public/f1.png";
import Image from "next/image";

const Page: FC = () => {
  const [fImg, setFImg] = useState<string>(f1.src);

  return (
    <div>
      <div className='relative'>
        <Image
          src={fImg}
          alt='furniture collection'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex'>
          {furniture.map((image, index) => (
            <div key={index}>
              <FCard
                index={index}
                imgURL={image}
                changeBigFImage={(img) => setFImg(img)}
                bigFImg={fImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
