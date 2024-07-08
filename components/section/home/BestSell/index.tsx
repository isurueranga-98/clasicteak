"use client";
import Image from "next/image";
import { FC } from "react";
import BestSellCard from "@/components/UI/BestSellCard";

const BestSell: FC = () => {
  return (
    <div className="lg:px-10 lg:py-10 flex items-center justify-center space-x-10 p-4">
      <BestSellCard img="c1.png" link="/"/>
      <BestSellCard img="c2.png" link="/" className=" hidden sm:block"/>
      <BestSellCard img="c3.png" link="/" className=" hidden lg:block"/>
    </div>
  );
};

export default BestSell;

