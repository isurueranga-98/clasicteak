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

const Button2: FC<ButtonProps> = (props: ButtonProps) => {
  const baseClasses = "bg-secondary  w-full px-4 py-2 text-white items-center justify-center text-center transition duration-300 ease-in-out transform hover:scale-105";

  if (props.behavior === "button") {
    const { text, callBack } = props;
    return (
      <button
        className={baseClasses}
        onClick={callBack}
      >
        {text}
      </button>
    );
  } else {
    const { href, text } = props;

    return (
      <Link href={href}>
        <p className={baseClasses}>
          {text}
        </p>
      </Link>
    );
  }
};

export default Button2;
