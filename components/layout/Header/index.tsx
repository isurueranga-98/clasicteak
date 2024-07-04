"use client";

import { FC, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png";
import { MdMenu } from "react-icons/md";
import MobileNavbar from "../MobileHeader";

const Header: FC = () => {

  const [isMobileNavOpen, setMobikeNanOpen] = useState(false)
  const openMobileNav = () => setMobikeNanOpen(true);
  const closeMobileNav = () => setMobikeNanOpen(false);

  return (
    <>
    <header className="flex w-full bg-secondary z-auto items-center justify-center px-4 py-3">

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

      <div className="hidden lg:block">
      <div className="flex items-center justify-center">
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
      </div>
    </header>

    <MobileNavbar isOpen ={isMobileNavOpen} onClose ={closeMobileNav}/>
    </>
  );
}

export default Header;
