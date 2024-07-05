"use client"

import { FC, useState } from "react";
import Link from "next/link";

const FixedHeader: FC = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className="hidden lg:flex sticky top-0 w-full bg-secondary z-auto items-center justify-center pb-0 py-3">
      <div id="3" className=" w-full h-auto px-10 py-5 text-white flex items-center justify-between">
        <div className="  w-3/4 space-x-10 lg:text-sm xl:text-base flex">
          <div
            onMouseEnter={() => handleMouseEnter("Home")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Home</Link>
            {hoveredLink === "Home" && (
              <div className="absolute left-0 top-full w-full bg-primary text-white py-3">
                <div className="max-w-screen-xl mx-auto px-10">
                  {/* Dropdown content for Home */}
                  <p>Home Dropdown Content</p>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Living")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Living</Link>
            {hoveredLink === "Living" && (
              <div className="absolute left-0 top-full w-full bg-primary text-white py-3">
                <div className="max-w-screen-xl mx-auto px-10">
                  {/* Dropdown content for Living */}
                  <p>Living Dropdown Content</p>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Dining")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Dining</Link>
            {hoveredLink === "Dining" && (
              <div className="absolute left-0 top-full w-full bg-primary text-white py-3">
                <div className="max-w-screen-xl mx-auto px-10">
                  {/* Dropdown content for Dining */}
                  <p>Dining Dropdown Content</p>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Bedroom")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Bedroom</Link>
            {hoveredLink === "Bedroom" && (
              <div className="absolute left-0 top-full w-full bg-primary text-white py-3">
                <div className="max-w-screen-xl mx-auto px-10">
                  {/* Dropdown content for Bedroom */}
                  <p>Bedroom Dropdown Content</p>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Decor")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Decor</Link>
            {hoveredLink === "Decor" && (
              <div className="absolute left-0 top-full w-full bg-primary text-white py-3">
                <div className="max-w-screen-xl mx-auto px-10">
                  {/* Dropdown content for Decor */}
                  <p>Decor Dropdown Content</p>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Outdoor")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Outdoor</Link>
            {hoveredLink === "Outdoor" && (
              <div className="absolute left-0 top-full w-full bg-primary text-white py-3">
                <div className="max-w-screen-xl mx-auto px-10">
                  {/* Dropdown content for Outdoor */}
                  <p>Outdoor Dropdown Content</p>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("About Us")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">About Us</Link>
            {hoveredLink === "About Us" && (
              <div className="absolute left-0 top-full w-full bg-primary text-white py-3">
                <div className="max-w-screen-xl mx-auto px-10">
                  {/* Dropdown content for About Us */}
                  <p>About Us Dropdown Content</p>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => handleMouseEnter("Contact Us")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/">Contact Us</Link>
            {hoveredLink === "Contact Us" && (
              <div className="absolute left-0 top-full w-full bg-primary text-white py-3">
                <div className="max-w-screen-xl mx-auto px-10">
                  {/* Dropdown content for Contact Us */}
                  <p>Contact Us Dropdown Content</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div>
          <h1>hii</h1>
        </div>
      </div>
    </div>
  );
};

export default FixedHeader;
