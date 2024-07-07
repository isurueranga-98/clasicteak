import Link from "next/link";
import { FC } from "react";

type ButtonProps = {
  text: string;
  classname?: string;
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

const Button3: FC<ButtonProps> = (props: ButtonProps) => {
  if (props.behavior === "button") {
    const { text, callBack } = props;
    return (
      <button
        className={`bg-black bg-opacity-60 w-full border-white border inline-block px-4 py-2 text-white items-center justify-center text-center md:text-base xl:text-xl ${props.classname}`}
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
          className={``}
        >
          {text}
        </p>
      </Link>
    );
  }
};

export default Button3;


// bg-black bg-opacity-60 w-full border-white border inline-block px-4 py-2 text-white items-center justify-center text-center md:text-base xl:text-xl ${props.classname}