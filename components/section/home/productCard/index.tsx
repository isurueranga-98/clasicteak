import { FC } from "react";
import Image from "next/image";
import art from "@/public/art.png";
import ExploreCard from "@/components/UI/ExploreCard";

const ProductCard: FC = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center md:px-4 lg:px-6 py-6">
      <div className="md:w-1/3 lg:w-2/5 h-auto pr-5 md:block hidden">
      <div className="relative h-full w-full">
          <Image
            src={art}
            layout="responsive"
            width={1200}
            height={800}
            objectFit="cover"
            alt="art"
            className="h-auto"
          />
        </div>
      </div>


      {/* <div className="md:w-1/3 lg:w-2/5 h-auto pr-5 md:block hidden">
        <div className="relative h-full w-full">
          <Image
            src={art}
            layout="fill"
            objectFit="cover"
            alt="art"
            className="h-full"
          />
        </div>
      </div> */}


      <div id="1" className="w-full md:w-3/4 lg:w-3/5 h-auto">
        <div className="flex flex-wrap">
          <div className="w-1/2 p-2">
            <div className="relative w-full">
              <ExploreCard img="p1.png" link="/" />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative w-full">
              <ExploreCard img="p2.png" link="/" />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative w-full">
              <ExploreCard img="p3.png" link="/" />
            </div>
          </div>

          <div className="w-1/2 p-2">
            <div className="relative w-full">
              <ExploreCard img="p4.png" link="/" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default ProductCard;
