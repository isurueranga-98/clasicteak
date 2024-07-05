import { FC } from "react";
import DropDownNav from "@/components/UI/DropDownNav";

const FixedHeader: FC = () => {
  return (
    <div className="hidden lg:flex sticky top-0 w-full bg-secondary z-auto items-center justify-center pb-0 py-3 px-10">
      <div className="w-3/4 h-auto py-5 text-white flex items-center justify-start space-x-20">
        <DropDownNav name="Home" subLinks={["Sofa", "Modular Sofa", "Chair", "Cofee Table", "Tv Console" , "Slide Stool", "Chaise Lounge"]} />
        <DropDownNav name="Living" subLinks={["Living Sublink 1", "Living Sublink 2"]} />
        <DropDownNav name="Dining" subLinks={["Dining Sublink 1", "Dining Sublink 2", "Dining Sublink 3"]} />
        <DropDownNav name="Decor" subLinks={["Bedroom Sublink 1", "Bedroom Sublink 2"]} />
        <DropDownNav name="Outdoor" subLinks={["Bedroom Sublink 1", "Bedroom Sublink 2"]} />
        <DropDownNav name="About Us" subLinks={["Bedroom Sublink 1", "Bedroom Sublink 2"]} />
        <DropDownNav name="Contact Us" subLinks={["Bedroom Sublink 1", "Bedroom Sublink 2"]} />
        {/* <DropDownNav name="Bedroom" subLinks={["Bedroom Sublink 1", "Bedroom Sublink 2"]} /> */}
      </div>

      <div className=" w-1/4">
        <h1>hiiii</h1>
      </div>
    </div>
  );
};

export default FixedHeader;
