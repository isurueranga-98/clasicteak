import Link from "next/link";
import { FC } from "react";

type ButtonProps = {

  text: string;
  
} & (
  | {
      behavior: "button";
      callBack: () => void;
    }
  | {
      behavior: "link";
      href: string;
    }
);



const Button: FC<ButtonProps> = (props: ButtonProps) => {
  if (props.behavior === "button") {
    const { text, callBack  } = props;
    return (
      <button
        className={`px-4 py-2  text-white }`}
        onClick={callBack}
      >
        {text}
      </button>
    );
  } else {
    const { href, text } = props;

    return (
      <Link href={href}>
        <p
          className={`bg-white bg-opacity-30 border-white border w-28 inline-block px-4 py-2 text-white items-center justify-center text-center md:w-32 md:text-base xl:w-40 xl:text-xl }`}
        >
          {text}
        </p>
      </Link>
    );
  }
};

export default Button;
