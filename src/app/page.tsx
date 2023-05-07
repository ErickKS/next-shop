"use client";

import Product from "@/components/Product";
import Header from "@/patterns/Header";

export default function Home() {
  return (
    <>
      <Header hasCart />
      <main className="container flex items-center justify-between">
        <div className="grid grid-cols-4 gap-4 py-7">
          <Product />
        </div>
      </main>
    </>
  );
}
