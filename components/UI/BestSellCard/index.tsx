import Image from "next/image";
import { FC } from "react";
import Button from "../Button";

type BestSellCardProp = {
  img: string;
  link:string;
  className?: string;
}


const BestSellCard: FC<BestSellCardProp> = (props: BestSellCardProp) => {
  return(
    <div className={`${props.className}`}>
        <div className="relative  ">
            <Image
              src={`/${props.img}`}
              // layout="responsive"
              
              // objectFit="cover"
              alt={props.img}
              width={500}
              height={500}

              // layout="fill"
              objectFit="cover"
              // objectPosition="left"
            />
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <Button text="Shop Now" behavior="link" href={props.link}/>
          </div>
      </div>
    </div>
  )
};

export default BestSellCard;
