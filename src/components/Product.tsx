import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <Link
      href="/"
      className="embla__slide group relative flex items-center justify-center w-[696px] h-[656px] bg-gradient rounded-lg overflow-hidden"
    >
      <Image
        src="/images/img-2.png"
        alt="t-shirt image"
        width={520}
        height={480}
      />
      <footer className="absolute bottom-1 flex justify-between w-[688px] p-5 rounded-lg bg-gray-800 translate-y-16 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
        <div>
          <h2>Camiseta Maratona Explorer 2.0</h2>
          <span className="text-lg font-bold">R$ 74,90</span>
        </div>
      </footer>
    </Link>
  );
}
