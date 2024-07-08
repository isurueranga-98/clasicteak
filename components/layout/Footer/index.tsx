import Image from "next/image";
import { FC } from "react";
import Logo from "@/public/logo.png";
import art from "@/public/Footer.png";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitterX } from "react-icons/bs";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";

const Footer: FC = () => {
  return (
    <div className=" pt-10">
      <div className="w-full h-auto bg-secondary px-5 py-5">
        <div className="relative w-full h-[1200px] sm:h-[1000px] md:h-[800px] lg:h-[600px] xl:h-[600px]">
          <div className="relative w-full h-full">
            <Image
              src={art}
              layout="fill"
              objectFit="fit"
              // objectFit="cover"
              alt="art"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col lg:flex-row gap-10 xl:justify-between xl:gap-10 2xl:gap-32">
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={Logo} width={150} height={150} alt="logo" />
                <div className="text-center">
                  <p className="font-yahei text-white">CLASSIC TEAK FURNITURE</p>
                  <p className="font-script text-primary">by Chathura</p>
                </div>
                <div className="flex space-x-10">
                  <FaFacebookF className="text-white" />
                  <GrInstagram className="text-white" />
                  <BsTwitterX className="text-white" />
                </div>
                <div className="flex flex-col gap-5">
                  <div className="text-center flex flex-col items-center justify-center">
                    <HiOutlineMail className="text-2xl text-primary" />
                    <p className="text-white">clasicteak@gmail.com</p>
                  </div>
                  <div className="text-center flex flex-col items-center justify-center">
                    <HiOutlineLocationMarker className="text-2xl text-primary" />
                    <p className="text-white">124/A,</p>
                    <p className="text-white">Colombo Road,</p>
                    <p className="text-white">Kandy</p>
                  </div>
                  <div className="text-center flex flex-col items-center justify-center">
                    <FiPhoneCall className="text-2xl text-primary" />
                    <p className="text-white">+94 71 356 2365 | +94 77 123 4567</p>
                  </div>
                </div>
              </div>
              <div className="items-center justify-center flex flex-wrap gap-14 md:gap-28 lg:gap-14 xl:gap-24 2xl:gap-32">
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-white">Living</p>
                  <div className="text-white">
                    <p>Sofa</p>
                    <p>Coffee Table</p>
                    <p>Chair</p>
                    <p>TV Stand</p>
                    <p>TV Stand</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-white">Dining</p>
                  <div className="text-white">
                    <p>Dining Table</p>
                    <p>Dining Chair</p>
                    <p>Dining Table Set</p>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-white">Living</p>
                  <div className="text-white">
                    <p>Sofa</p>
                    <p>Coffee Table</p>
                    <p>Chair</p>
                    <p>TV Stand</p>
                    <p>TV Stand</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-white">Dining</p>
                  <div className="text-white">
                    <p>Dining Table</p>
                    <p>Dining Chair</p>
                    <p>Dining Table Set</p>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-white">Living</p>
                  <div className="text-white">
                    <p>Sofa</p>
                    <p>Coffee Table</p>
                    <p>Chair</p>
                    <p>TV Stand</p>
                    <p>TV Stand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
