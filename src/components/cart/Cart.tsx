"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { useCart } from "@/hooks/useCart";
import * as DialogPrimitive from "@radix-ui/react-dialog";

export default function Cart() {
  const { cartItems, cartTotal, removeCartItem } = useCart();
  const cartQuantity = cartItems.length;
  const router = useRouter();

  const formattedCartTotal = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(cartTotal);

  function handlePayout() {
    router.push("/payout");
  }

  return (
    <>
      <DialogPrimitive.Root>
        <DialogPrimitive.Trigger className="relative flex items-center justify-center gap-2 px-5 border-[1px] border-transparent p-3 rounded-lg ml-auto bg-gray-800 outline-none text-sm font-semibold text-white transition hover:border-green-500 focus:border-green-500">
          <Image src="/cart.svg" alt="" width={24} height={24} />
          My Cart
        </DialogPrimitive.Trigger>

        <DialogPrimitive.Portal>
          <DialogPrimitive.Content className="absolute top-0 right-0 grid grid-rows-[32px_1fr_255px] gap-8 w-[480px] h-screen pb-6 pt-12 px-12 bg-gray-800 shadow-left data-[state='open']:animate-translate">
            <header className="flex justify-between">
              <h2>Cart</h2>
              <DialogPrimitive.Close className="group outline-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7071 18.2926C19.8 18.3855 19.8737 18.4958 19.924 18.6172C19.9742 18.7386 20.0001 18.8687 20.0001 19.0001C20.0001 19.1315 19.9742 19.2616 19.924 19.383C19.8737 19.5044 19.8 19.6147 19.7071 19.7076C19.6142 19.8005 19.5039 19.8742 19.3825 19.9245C19.2611 19.9747 19.131 20.0006 18.9996 20.0006C18.8682 20.0006 18.7381 19.9747 18.6167 19.9245C18.4953 19.8742 18.385 19.8005 18.2921 19.7076L9.99958 11.4138L1.70708 19.7076C1.51944 19.8952 1.26494 20.0006 0.999579 20.0006C0.734215 20.0006 0.47972 19.8952 0.292079 19.7076C0.104439 19.5199 -0.000976557 19.2654 -0.000976562 19.0001C-0.000976568 18.7347 0.104439 18.4802 0.292079 18.2926L8.58583 10.0001L0.292079 1.70757C0.104439 1.51993 -0.000976562 1.26543 -0.000976562 1.00007C-0.000976562 0.734704 0.104439 0.480208 0.292079 0.292568C0.47972 0.104927 0.734215 -0.000488281 0.999579 -0.000488281C1.26494 -0.000488281 1.51944 0.104927 1.70708 0.292568L9.99958 8.58632L18.2921 0.292568C18.4797 0.104927 18.7342 -0.000488286 18.9996 -0.000488281C19.2649 -0.000488276 19.5194 0.104927 19.7071 0.292568C19.8947 0.480208 20.0001 0.734704 20.0001 1.00007C20.0001 1.26543 19.8947 1.51993 19.7071 1.70757L11.4133 10.0001L19.7071 18.2926Z"
                    className="fill-white transition group-hover:fill-green-500"
                  />
                </svg>
              </DialogPrimitive.Close>
            </header>

            <main className="flex flex-col gap-6">
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
            </main>

            <footer className="flex flex-col">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between text-gray-100 font-semibold text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="text-white">
                    {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
                  </span>
                </div>
                <div className="flex justify-between text-gray-100 font-semibold text-sm">
                  <span className="text-gray-600">Discount:</span>
                  <span className="text-white">
                    {cartQuantity} {cartQuantity === 1 ? "item" : "itens"}
                  </span>
                </div>
              </div>

              <div className="h-1 my-6 border-t-2 border-dashed border-gray-600" />

              <div className="flex justify-between mb-10 items-center font-semibold">
                <span className="text-lg text-gray-100">Total:</span>
                <span className="text-lg text-green-500">
                  {formattedCartTotal}
                </span>
              </div>

              <button
                onClick={handlePayout}
                disabled={cartQuantity <= 0 ? true : false}
                className="flex justify-between items-center py-5 px-4 rounded-lg bg-green-500 text-sm font-semibold text-black transition hover:bg-green-300 disabled:cursor-not-allowed disabled:bg-green-500/75"
              >
                Make Payment
                <Image src={"/arrowRight.svg"} width={28} height={28} alt="" />
              </button>
            </footer>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </>
  );
}
