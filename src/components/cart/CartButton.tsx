import Image from "next/image";

export default function CartButton() {
  return (
    <button className="relative flex items-center justify-center w-12 h-12 rounded-md bg-gray-800 ml-auto">
      <Image src="/bag.svg" alt="bag" width={24} height={24} />
    </button>
  );
}
