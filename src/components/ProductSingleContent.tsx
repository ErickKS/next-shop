import Image from "next/image";
import { MouseEvent } from "react";

import { IProduct } from "@/contexts/CartContext";
import { useCart } from "@/hooks/useCart";

interface ProductSingleContentProps {
  product: IProduct;
}

export default function ProductSingleContent({
  product
}: ProductSingleContentProps) {
  const { addToCart, checkIfItemAlreadyExists } = useCart();

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: IProduct
  ) {
    e.preventDefault();
    addToCart(product);
  }

  const itemAlreadyInCart = checkIfItemAlreadyExists(product.id);

  return (
    <>
      <div className="flex items-center justify-center w-[576px] h-[656px] bg-gradient rounded-lg overflow-hidden">
        <Image
          src={`/images/${product.imageUrl}.png`}
          alt=""
          width={520}
          height={480}
          className="select-none"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h1>{product.name}</h1>
          <span className="text-xl font-semibold">R$ {product.price}</span>

          <p className="mt-8">{product.description}</p>
        </div>
        <button
          disabled={checkIfItemAlreadyExists(product.id)}
          onClick={(e) => handleAddToCart(e, product)}
          className="flex items-center justify-center w-full h-16 rounded-md bg-green-500 font-semibold text-gray-100 transition hover:bg-green-300 disabled:cursor-not-allowed disabled:hover:bg-green-500"
        >
          {itemAlreadyInCart
            ? "Item já adicionado no carrinho"
            : "Colocar na sacola"}
        </button>
      </div>
    </>
  );
}
