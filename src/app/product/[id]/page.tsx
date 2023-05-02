"use client";

import ProductSingleContent from "@/components/ProductSingleContent";
import { productsList } from "@/components/ProductsList";
import Header from "@/patterns/Header";

interface ProductPageSingleProps {
  params: {
    id: number;
  };
}

export default function ProductPageSingle({ params }: ProductPageSingleProps) {
  const product = productsList[params.id];

  return (
    <>
      <Header hasCart />
      <main className="container grid grid-cols-2 gap-16">
        <ProductSingleContent product={product} />
      </main>
    </>
  );
}
