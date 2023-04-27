"use client";

import ProductSingleContent from "@/components/ProductSingleContent";
import { productsList } from "@/components/ProductsList";
import Header from "@/patterns/Header";

import { CartContextProvider } from "@/contexts/CartContext";

export default function ProductPageSingle({ params }) {
  const product = productsList[params.id];
  console.log(product);

  return (
    <CartContextProvider>
      <Header />
      <main className="container grid grid-cols-2 gap-16">
        <ProductSingleContent product={product} />
      </main>
    </CartContextProvider>
  );
}
