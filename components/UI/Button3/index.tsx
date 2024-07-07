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
  const baseClasses =
    "relative bg-white text-black w-96 h-10 items-center justify-center text-center flex overflow-hidden group";
  const beforeClasses =
    "absolute inset-0 w-full h-full bg-black transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0";
  const textClasses =
    "relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white";

  if (props.behavior === "button") {
    const { text, callBack } = props;
    return (
      <button className={baseClasses} onClick={callBack}>
        <span className={beforeClasses}></span>
        <span className={textClasses}>{text}</span>
      </button>
    );
  } else {
    const { href, text } = props;

    return (
      <Link href={href}>
        <p className={baseClasses}>
          <span className={beforeClasses}></span>
          <span className={textClasses}>{text}</span>
        </p>
      </Link>
    );
  }
};

export default Button3;
