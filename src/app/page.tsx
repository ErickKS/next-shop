"use client";

import Product from "@/components/Product";
import Header from "@/patterns/Header";

import useEmblaCarousel from "embla-carousel-react";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true
  });

  return (
    <>
      <Header />
      <main className="container flex items-center justify-between">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex gap-12 mx-auto">
            <Product />
          </div>
        </div>
      </main>
    </>
  );
}
