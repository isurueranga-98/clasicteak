// "use client";
// import Image from "next/image";
// import { FC } from "react";
// import BestSellCard from "@/components/UI/BestSellCard";

// const BestSell: FC = () => {
//   return (
//     <div className="lg:px-10 lg:py-10 flex items-center justify-center space-x-10 p-4">
//       <BestSellCard img="c1.png" link="/"/>
//       <BestSellCard img="c2.png" link="/" className=" hidden sm:block"/>
//       <BestSellCard img="c3.png" link="/" className=" hidden lg:block"/>
//     </div>
//   );
// };

// export default BestSell;

"use client";
import React from "react";
import { FC } from "react";
import Slider from "react-slick";
import BestSellCard from "@/components/UI/BestSellCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSell: FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="lg:px-10 lg:py-10 flex items-center justify-center p-4">
      <Slider {...settings}>
        <div>
          <BestSellCard img="c1.png" link="/" />
        </div>
        <div>
          <BestSellCard img="c2.png" link="/" />
        </div>
        <div>
          <BestSellCard img="c3.png" link="/" />
        </div>
      </Slider>
    </div>
  );
};

export default BestSell;
