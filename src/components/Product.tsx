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
          className="embla__slide group relative flex items-center justify-center w-[696px] h-[656px] bg-gradient rounded-lg overflow-hidden"
        >
          <Image
            src={`/images/${product.imageUrl}.png`}
            alt=""
            width={520}
            height={480}
          />
          <footer className="absolute bottom-1 flex items-center justify-between w-[688px] p-5 rounded-lg bg-gray-800 translate-y-16 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
            <div>
              <h2>{product.name}</h2>
              <span className="text-lg font-bold">R$ {product.price}</span>
            </div>
            <CartButton
              disabled={checkIfItemAlreadyExists(product.id)}
              onClick={(e) => handleAddToCart(e, product)}
            />
          </footer>
        </Link>
      ))}
    </>
  );
}
