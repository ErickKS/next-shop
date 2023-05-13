"use client";

import Product from "@/components/Product";
import Header from "@/patterns/Header";

export default function Home() {
  return (
    <>
      <Header hasCart />
      <main className="container flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-7">
          <Product />
        </div>
      </main>
    </>
  );
}
