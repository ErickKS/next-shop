"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useCart } from "@/hooks/useCart";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export default function Cart() {
  const { cartItems, cartTotal, removeCartItem } = useCart();
  const cartQuantity = cartItems.length;
  const router = useRouter();

  const formattedCartTotal = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  }).format(cartTotal);

  function handlePayout() {
    router.push("/payout");
  }

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
              {cartQuantity <= 0 && <p>Parece que seu carrinho está vazio</p>}

              {cartItems.map((cartItem) => (
                <div className="flex gap-5" key={cartItem.id}>
                  <div className="flex justify-center items-center w-[100px] h-24 bg-gradient rounded-lg">
                    <Image
                      src={`/images/${cartItem.imageUrl}.png`}
                      alt="product image"
                      width={94}
                      height={94}
                    />
                  </div>

                  <div className="flex flex-col justify-start">
                    <p className="text-sm text-gray-100">{cartItem.name}</p>
                    <span className="text-sm font-semibold text-gray-100">
                      R$ {cartItem.price}
                    </span>
                    <button
                      className="inline-flex mt-auto font-semibold text-green-500 transition hover:text-green-300"
                      onClick={() => removeCartItem(cartItem.id)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <div className="flex justify-between text-gray-100">
                <span className="text-sm text-gray-300">Quantidade</span>
                <span className="text-sm text-gray-300">
                  {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
                </span>
              </div>
              <div className="flex justify-between mb-10 items-center font-semibold">
                <span className="text-sm text-gray-100">Valor total</span>
                <span className="text-lg text-gray-100">
                  {formattedCartTotal}
                </span>
              </div>
              <button
                onClick={handlePayout}
                disabled={cartQuantity <= 0 ? true : false}
                className="flex justify-center py-5 rounded-lg bg-green-500 text-sm font-semibold text-white transition hover:bg-green-300 disabled:cursor-not-allowed disabled:bg-green-500/75"
              >
                Finalizar compra
              </button>
            </div>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
