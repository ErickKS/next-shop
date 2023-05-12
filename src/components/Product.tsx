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

  function discountValue(price: number, discount: number) {
    let value = (price * discount) / 100;
    value = +(price - value).toFixed(2);

    return value;
  }

  return (
    <>
      {productsList.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          className="grid grid-rows-[180px_1fr_79px] w-[282px] h-[416px] p-3 bg-gray-800 rounded-lg"
        >
          <div className="relative w-full h-[166px] bg-gray-900 rounded-lg">
            <Image
              src={`/images/${product.imageUrl}.png`}
              alt=""
              width={168}
              height={166}
              className="mx-auto select-none"
            />
            {product.discount && (
              <div className="absolute top-2 -left-4 flex items-center justify-center w-11 h-10 bg-green-500/90">
                <span className="text-center text-black text-xs font-medium leading-none select-none">
                  {product.discount}% <br /> Off
                </span>
              </div>
            )}
          </div>
          <main className="flex flex-col">
            <>
              <h2 className="font-semibold text-sm">{product.name}</h2>
              <p className="text-sm text-gray-100">{product.description}</p>
            </>
          </main>
          <footer className="flex flex-col gap-2">
            <div className="flex gap-2">
              <span className="font-semibold text-sm text-white">
                {product.discount !== 0
                  ? `$${discountValue(product.price, product.discount)}`
                  : `$${product.price}`}
              </span>
              <span className="font-semibold text-sm text-gray-700 line-through">
                {product.discount === 0 ? "" : `$${product.price}`}
              </span>
            </div>
            <CartButton
              disabled={checkIfItemAlreadyExists(product.id)}
              onClick={(e) => handleAddToCart(e, product)}
            >
              {checkIfItemAlreadyExists(product.id)
                ? "Already in cart"
                : "Add to cart"}
            </CartButton>
          </footer>
        </Link>
      ))}
    </>
  );
}
