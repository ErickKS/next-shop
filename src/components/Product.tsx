import Image from "next/image";

export default function Product() {
  return (
    <a
      href="/"
      className="group relative flex items-center justify-center w-[696px] h-[656px] bg-gradient rounded-lg overflow-hidden"
    >
      <Image
        src="/images/img-2.png"
        alt="t-shirt image"
        width={520}
        height={480}
      />
      <div className="absolute bottom-1 flex justify-between w-[688px] p-5 rounded-lg bg-gray-800 translate-y-16 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
        <div>
          <h2>Camiseta Maratona Explorer 2.0</h2>
          <span className="text-lg font-bold">R$ 74,90</span>
        </div>
      </div>
    </a>
  );
}
