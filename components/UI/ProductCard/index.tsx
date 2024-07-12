import { FC } from "react";
import Image from "next/image";

interface FCardProps {
  index: number;
  imgURL: {
    thumbnail: string;
    f: string;
  };
  changeBigFImage: (img: string) => void;
  bigFImg: string;
}

const FCard: FC<FCardProps> = ({ index, imgURL, changeBigFImage, bigFImg }) => {
  const handleClick = () => {
    if (bigFImg !== imgURL.f) {
      changeBigFImage(imgURL.f);
    }
  };

  return (
    <div className={`border-2 rounded-xl ${bigFImg === imgURL.f ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
      <div className='flex flex-row justify-center items-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgURL.thumbnail}
          alt={`furniture collection ${index + 1}`}
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default FCard;
