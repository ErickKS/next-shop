import Image from "next/image";

import CartButton from "./CartButton";

export default function Cart() {
  return (
    <>
      <CartButton />

      <div className="hidden absolute -z-10 top-0 -right-[480px] w-[480px] h-screen bg-gray-800 py-6 px-12">
        <div className="text-right">
          <button className="mr-auto transition hover:opacity-80">
            <Image src="/x.svg" alt="close icon" width={24} height={24} />
          </button>
        </div>
        <h2 className="mt-6">Sacola de compras</h2>
      </div>
    </>
  );
}
