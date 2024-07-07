import Image from "next/image";
import { FC } from "react";
import Button2 from "../Button2";

type BestSellCardProp = {
  img: string;
  link: string;
  className?: string;
};

const ExploreCard: FC<BestSellCardProp> = (props: BestSellCardProp) => {
  return (
    <div className={`relative ${props.className} group`}>
      <div className="relative w-full h-full">
        <Image
          src={`/${props.img}`}
          alt={props.img}
          layout="responsive"
          width={500}
          height={500}
          objectFit="cover"
        />
        <div className=" absolute bottom-0 items-center bg-secondary justify-center left-0 w-full transform transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100">
          <Button2 text="Explore Items" behavior="link" href={props.link} />
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
