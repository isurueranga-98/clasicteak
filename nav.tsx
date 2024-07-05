"use client"
import { FC, useState } from "react";
import Link from "next/link";
import DropDownNav from "@/components/UI/DropDownNav";

const FixedHeader: FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
    // Keep the dropdown visible when hovering over it
    // setIsDropdownVisible(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div className="hidden lg:flex sticky top-0 w-full bg-secondary z-auto items-center justify-center pb-0 py-3">
      <div
        id="3"
        className="w-full h-auto px-10 py-5 text-white flex items-center justify-between"
      >
        
        <div className="w-3/4 space-x-10 lg:text-sm xl:text-base flex">

        
          <div onMouseEnter={() => handleMouseEnter("Home")}>
            <Link href="/">Home</Link>
            {hoveredLink === "Home" && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 " onMouseLeave={handleMouseLeave}>
                  <Link href="/">Home Sublink 1</Link>
                  <Link href="/">Home Sublink 2</Link>
                  <Link href="/">Home Sublink 3</Link>
                </div>
              </div >
            )}
          </div>
          {/* Repeat similar structure for other menu items */}
          {/* Example for "Living" */}
          <div onMouseEnter={() => handleMouseEnter("Living")}>
            <Link href="/">Living</Link>
            {hoveredLink === "Living" && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 " onMouseLeave={handleMouseLeave}>
                  <Link href="/">Home Su</Link>
                  <Link href="/">Home Sublink 2</Link>
                  <Link href="/">Home Sublink 3</Link>
                </div>
              </div >
            )}
          </div>
          {/* Repeat for other menu items */}

          <div onMouseEnter={() => handleMouseEnter("Home")}>
            <Link href="/">Dining</Link>
            {hoveredLink === "Dining" && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 " onMouseLeave={handleMouseLeave}>
                  <Link href="/">Home  1</Link>
                  <Link href="/">Home Sublink 2</Link>
                  <Link href="/">Home Sublink 3</Link>
                </div>
              </div >
            )}
          </div>


          <div onMouseEnter={() => handleMouseEnter("Home")}>
            <Link href="/">Bedroom</Link>
            {hoveredLink === "Bedroom" && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 " onMouseLeave={handleMouseLeave}>
                  <Link href="/">Sublink 1</Link>
                  <Link href="/">Home Sublink 2</Link>
                  <Link href="/">Home Sublink 3</Link>
                </div>
              </div >
            )}
          </div>


          <div onMouseEnter={() => handleMouseEnter("Home")}>
            <Link href="/">Decor</Link>
            {hoveredLink === "Decor" && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 " onMouseLeave={handleMouseLeave}>
                  <Link href="/">1</Link>
                  <Link href="/">Home Sublink 2</Link>
                  <Link href="/">Home Sublink 3</Link>
                </div>
              </div >
            )}
          </div>


          <div onMouseEnter={() => handleMouseEnter("Home")}>
            <Link href="/">Outdor</Link>
            {hoveredLink === "Outdor" && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 " onMouseLeave={handleMouseLeave}>
                  <Link href="/">789879</Link>
                  <Link href="/">Home Sublink 2</Link>
                  <Link href="/">Home Sublink 3</Link>
                </div>
              </div >
            )}
          </div>


          <div onMouseEnter={() => handleMouseEnter("Home")}>
            <Link href="/">About Us</Link>
            {hoveredLink === "About" && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 " onMouseLeave={handleMouseLeave}>
                  <Link href="/">8525885588588585555555858</Link>
                  <Link href="/">Home Sublink 2</Link>
                  <Link href="/">Home Sublink 3</Link>
                </div>
              </div >
            )}
          </div>
          

          <div onMouseEnter={() => handleMouseEnter("Home")}>
            <Link href="/">Contact Us</Link>
            {hoveredLink === "Contact" && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 " onMouseLeave={handleMouseLeave}>
                  <Link href="/">asdasdadasdadas</Link>
                  <Link href="/">Home Sublink 2</Link>
                  <Link href="/">Home Sublink 3</Link>
                </div>
              </div >
            )}
          </div>

        </div>
        
      </div>
      
    </div>
  );
};

export default FixedHeader;




/* 

  
*/
