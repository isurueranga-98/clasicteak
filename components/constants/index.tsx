import f1 from "@/public/f1.png";
import f2 from "@/public/f2.png";
import f3 from "@/public/f3.png";

interface Furniture {
  thumbnail: string;
  f: string;
}

export const furniture: Furniture[] = [
  {
    thumbnail: f1.src,
    f: f1.src,
  },
  {
    thumbnail: f2.src,
    f: f2.src,
  },
  {
    thumbnail: f3.src,
    f: f3.src,
  },
];
