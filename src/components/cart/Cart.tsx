import Image from "next/image";

import CartButton from "./CartButton";
import Button from "../Button";

export default function Cart() {
  return (
    <>
      <CartButton />

      <div className="absolute top-0 right-0 grid grid-rows-[80px_1fr_170px] gap-8 w-[480px] h-screen bg-gray-800 py-6 px-12">
        <div>
          <div className="text-right">
            <button className="mr-auto transition hover:opacity-80">
              <Image src="/x.svg" alt="close icon" width={24} height={24} />
            </button>
          </div>
          <h2 className="mt-6">Sacola de compras</h2>
        </div>
        <div className=""></div>
        <div className="flex flex-col">
          <div className="flex justify-between text-gray-100">
            <span className="text-sm text-gray-300">Quantidade</span>
            <span className="text-sm text-gray-300">3 itens</span>
          </div>
          <div className="flex justify-between mb-10 items-center font-semibold">
            <span className="text-sm text-gray-100">Valor total</span>
            <span className="text-lg text-gray-100">R$ 270,00</span>
          </div>
          <Button text="Finalizar compra" />
        </div>
      </div>
    </>
  );
}
