"use client";
import { FC } from "react";
import Image from "next/image";
import art from "@/public/art.png";
import Button from "@/components/UI/Button";
import Button3 from "@/components/UI/Button3";

const ContactUs: FC = () => {
  return (
    <div className="w-full flex items-center justify-center md:px-4 lg:px-10">
      <div className="flex items-center justify-center w-full md:w-1/2 lg:w-3/5 h-[400px] lg:h-[500px] bg-primary">
        <div id="1" className="flex flex-col items-center justify-center h-full w-full space-y-8">
          <p className="text-white text-4xl">Join Us</p>
          <p className="text-white text-xl font-thin">Sign up for the Newsletter and Receive offers</p>
          <div className="flex flex-col items-center justify-center w-80 space-y-3">
            <input className="w-full h-12 outline-none px-4" type="text" placeholder="Your Name" />
            <input className="w-full h-12 outline-none px-4" type="email" placeholder="E-mail" />
            <Button3 text="Send" behavior="link" href="/" classname="w-full" />
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/2 lg:w-2/5 h-auto">
        <div className="relative h-[400px] lg:h-[500px] w-full">
          <Image src={art} layout="fill" objectFit="cover" alt="art" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
