import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function CartButton({ ...props }: CartButtonProps) {
  return (
    <button
      className="relative flex items-center justify-center w-12 h-12 rounded-md bg-green-500 ml-auto transition hover:bg-green-300 disabled:cursor-not-allowed disabled:hover:bg-green-500"
      {...props}
    >
      <Image src="/bag.svg" alt="" width={24} height={24} />
    </button>
  );
}
