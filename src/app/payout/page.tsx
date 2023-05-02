"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import Header from "@/patterns/Header";

import { useCart } from "@/hooks/useCart";

export default function PayoutPage() {
  const { cartItems } = useCart();
  const cartQuantity = cartItems.length;

  const router = useRouter();

  useEffect(() => {
    if (cartQuantity <= 0) router.push("/");
  }, []);

  function handleFinish() {
    window.location.reload();
  }

  return (
    <>
      <Header hasCart={false} />
      <main className="container mt-24">
        <div className="flex justify-center">
          {cartItems.map((cartItem) => (
            <div className="payout flex gap-5" key={cartItem.id}>
              <div className="flex justify-center items-center w-36 h-36 bg-gradient rounded-full">
                <Image
                  src={`/images/${cartItem.imageUrl}.png`}
                  alt="product image"
                  width={130}
                  height={130}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h1 className="font-bold">Compra efetuada!</h1>
          <p className="text-lg max-w-xl mx-auto mt-6">
            Uhuul, sua compra de {cartQuantity}
            {cartQuantity === 1 ? " camisa" : " camisas"} já está a caminho da
            sua casa.
          </p>
          <button
            onClick={() => handleFinish()}
            className="inline-block text-green-500 font-semibold text-md mt-16 transition hover:text-green-300"
          >
            Voltar ao catálogo
          </button>
        </div>
      </main>
    </>
  );
}
