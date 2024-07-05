"use client"


// import { FC, useState } from "react";
// import Link from "next/link";

// type NavProps = {
//   name: string;
//   subLinks: string[];
// };

// const DropDownNav: FC<NavProps> = ({ name, subLinks }) => {
//   const [hoveredLink, setHoveredLink] = useState<string | null>(null);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);

//   const handleMouseEnter = (link: string) => {
//     setHoveredLink(link);
//     setIsDropdownVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setHoveredLink(null);
//     setIsDropdownVisible(false); // Close dropdown on mouse leave
//   };

//   const handleDropdownMouseEnter = () => {
//     setIsDropdownVisible(true);
//   };

//   const handleDropdownMouseLeave = () => {
//     setIsDropdownVisible(false);
//   };

//   return (
//     <div className="relative">
//       <div className="relative">
//         <div onMouseEnter={() => handleMouseEnter(name)} onMouseLeave={handleMouseLeave}>
//           <Link href="/">{name}</Link>
//           {hoveredLink === name && (
//             <div
//               className="absolute left-0 top-full w-full bg-secondary text-white py-3"
//               onMouseEnter={handleDropdownMouseEnter}
//               onMouseLeave={handleDropdownMouseLeave}
//             >
//               <div className="flex flex-col max-w-screen-xl px-10" onMouseLeave={handleMouseLeave}>
//                 {subLinks.map((subLink, index) => (
//                   <Link key={index} href="/">
//                     {subLink}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DropDownNav;




import { FC, useState } from "react";
import Link from "next/link";

type nav = {
  name: string,
  subLinks?: string[];
}

const DropDownNav: FC<nav> = ({name, subLinks}) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = (link: string) => {
    setHoveredLink(link);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
     setIsDropdownVisible(false);
  };

  const handleDropdownMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div >
      <div className="">
        <div className="">
          <div onMouseEnter={() => handleMouseEnter(name)} onMouseLeave={handleMouseLeave}>
            <Link href="/">{name}</Link>
            {hoveredLink === name && (
              <div
                className="absolute left-0 top-full w-full bg-secondary text-white py-3"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className="flex flex-col max-w-screen-xl px-10 space-y-4" onMouseLeave={handleMouseLeave} >

                    <p className=" text-4xl">{name} Furniture</p>

                    {subLinks?.map((subLink, index) => (
                      <Link key={index} href="/">
                        {subLink}
                      </Link>
                    ))} 
                </div>
              </div >
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default DropDownNav;


// className="hidden lg:flex sticky top-0 w-full bg-secondary z-auto items-center justify-center pb-0 py-3"
//  className="w-full h-auto px-10 py-5 text-white flex items-center justify-between"
// className="w-3/4 space-x-10 lg:text-sm xl:text-base flex"




// className="absolute left-0 top-full w-full bg-secondary text-white py-3"