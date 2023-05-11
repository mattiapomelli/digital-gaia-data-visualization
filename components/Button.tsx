import { ReactNode } from "react";
import { Spinner } from "./Spinner";

import cx from "classnames";

interface ButtonProps {
  loading?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ children, loading, className, onClick }: ButtonProps) => {
  return (
    <button
      className={cx(
        "py-2 px-4 flex items-center justify-center bg-green-800 hover:bg-green-950 text-white rounded-lg h-full min-w-[100px]",
        className,
      )}
      onClick={onClick}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
