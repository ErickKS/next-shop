import Image from "next/image";
import Link from "next/link";
import { MouseEvent } from "react";

import CartButton from "./cart/CartButton";
import { productsList } from "./ProductsList";

import { IProduct } from "@/contexts/CartContext";
import { useCart } from "@/hooks/useCart";

export default function Product() {
  const { addToCart, checkIfItemAlreadyExists } = useCart();

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addToCart(product);
  }

  return (
    <>
      {productsList.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="flex flex-col w-[282px] h-[360px] p-3 bg-gray-800 rounded-lg"
        >
          <div className="relative w-full h-[166px] mb-3 bg-gray-900 rounded-lg">
            <Image
              src={"/images/razer-naga.png"}
              alt=""
              width={168}
              height={166}
              className="mx-auto"
            />
            <div className="absolute top-2 left-2 px-3 bg-green-500 rounded-full">
              <span className="font-medium text-xs text-black">15% Off</span>
            </div>
          </div>
          <main className="flex flex-col">
            <>
              <h2 className="font-semibold text-sm">{product.name}</h2>
              <p className="text-sm text-gray-100">dsasdasd</p>
            </>
            <div className="flex gap-2 mt-4 mb-5">
              <span className="font-semibold text-sm text-white">
                ${product.price}
              </span>
              <span className="font-semibold text-sm text-gray-700 line-through">
                ${product.price}
              </span>
            </div>
            <CartButton
              disabled={checkIfItemAlreadyExists(product.id)}
              onClick={(e) => handleAddToCart(e, product)}
            />
          </main>
        </Link>
      ))}
    </>
  );
}
