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
  }, [cartQuantity, router]);

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
              <div className="flex justify-center items-center w-36 h-36 bg-gray-800 rounded-lg shadow-center">
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
          <h1 className="font-bold">Purchase completed successfully!</h1>
          <p className="text-lg max-w-lg mx-auto mt-6">
            Your purchase is on its way! Thank you for choosing us.
          </p>
          <button
            onClick={() => handleFinish()}
            className="inline-block text-green-500 font-semibold text-md mt-16 transition hover:text-green-300"
          >
            Return to shop
          </button>
        </div>
      </main>
    </>
  );
}
