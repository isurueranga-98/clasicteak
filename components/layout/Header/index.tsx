"use client";

import { FC, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { MdMenu } from "react-icons/md";
import MobileNavbar from "../MobileHeader";
import Link from "next/link";
import FixedHeader from "../FixedHeader";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { MdAccountBox } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const Header: FC = () => {

  const [isMobileNavOpen, setMobikeNanOpen] = useState(false)
  const openMobileNav = () => setMobikeNanOpen(true);
  const closeMobileNav = () => setMobikeNanOpen(false);

  return (
    <>
    <header className="  flex w-full bg-secondary z-auto items-center justify-center pb-0 py-3">

      {/* {Mobile Header} */}
      <div className="flex h-full w-full items-center justify-between lg:hidden">
        
        <div className="flex items-center justify-center">
          <div>
            <Image src={logo} width={90} height={90} alt="logo"/>
          </div>

          <div className="flex flex-col">
            <p className="font-yahei text-white">CLASSIC TEAK FURNITURE</p>
            <p className="font-script text-primary">by Chathura</p>
          </div>
        </div>

        <div className=" flex items-center justify-center">
          <MdMenu className="cursor-pointer text-3xl text-white"  onClick={openMobileNav}/>
        </div>
      
      </div>

      {/* Desktop header */}

      <div className="w-full hidden lg:block">
        <div id="1" className=" flex items-center justify-between">

          <div className=" px-10 flex">
              <div>
                <Image src={logo} width={90} height={90} alt="logo"/>
              </div>

              <div className="flex flex-col">
                <p className="font-yahei text-white text-sm">CLASSIC</p>
                <p className="font-yahei text-white text-sm">TEA</p>
                <p className="font-yahei text-white text-sm">FURNITURE</p>
                <p className="font-script text-primary text-sm">by Chathura</p>
              </div>
          </div>

          <div className=" px-10 flex flex-col space-y-8 items-end justify-end">
            <div className=" flex space-x-10">
              <FaFacebookF className="text-white"/>
              <GrInstagram  className="text-white"/>
              <BsTwitterX   className="text-white"/>
            </div>

            <div className=" flex space-x-16 text-white">
              <div className=" flex items-center justify-center space-x-5">
                <MdAccountBox className=" text-2xl"/>
                <p className=" text-base">My Account</p>
              </div>
              <div className=" flex items-center justify-center space-x-5">
                <FaHeart className=" text-2xl"/>
                <p className=" text-base">My Account</p>
              </div>
              <div className=" flex items-center justify-center space-x-5">
                <FaShoppingCart className=" text-2xl"/>
                <p className=" text-base">My Account</p>
              </div>
            </div>
          </div>


        </div>

        <div id="2" className=" sticky top- w-full h-6 bg-primary" />

        
      </div>
    </header>

    <MobileNavbar isOpen ={isMobileNavOpen} onClose ={closeMobileNav}/>
    </>
  );
}

export default Header;


