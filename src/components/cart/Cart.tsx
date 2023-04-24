"use client";

import Image from "next/image";

import Button from "../Button";
import CartProduct from "./CartProduct";

import * as DialogPrimitive from "@radix-ui/react-dialog";

export default function Cart() {
  return (
    <>
      <DialogPrimitive.Root>
        <DialogPrimitive.Trigger className="relative flex items-center justify-center w-12 h-12 rounded-md ml-auto bg-gray-800 ">
          <Image src="/bag.svg" alt="" width={24} height={24} />
        </DialogPrimitive.Trigger>

        <DialogPrimitive.Portal>
          <DialogPrimitive.Content className="absolute top-0 right-0 grid grid-rows-[80px_1fr_170px] gap-8 w-[480px] h-screen bg-gray-800 py-6 px-12 data-[state='open']:animate-translate">
            <div>
              <div className="text-right">
                <DialogPrimitive.Close className="mr-auto transition hover:opacity-80">
                  <Image src="/x.svg" alt="" width={24} height={24} />
                </DialogPrimitive.Close>
              </div>
              <h2 className="mt-6">Sacola de compras</h2>
            </div>

            <div className="flex flex-col gap-6">
              <CartProduct />
            </div>

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
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
