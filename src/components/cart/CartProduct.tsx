import Image from "next/image";

export default function CartProduct() {
  return (
    <div className="flex gap-5">
      <div className="flex justify-center items-center w-[100px] h-24 bg-gradient rounded-lg">
        <Image
          src="/images/example.png"
          alt="product image"
          width={94}
          height={94}
        />
      </div>

      <div className="flex flex-col justify-start">
        <p className="text-sm text-gray-100">Camiseta Maratona Explorer</p>
        <span className="text-sm font-semibold text-gray-100">R$ 74,90</span>
        <button className="inline-flex mt-auto font-semibold text-green-500 transition hover:text-green-300">
          Remover
        </button>
      </div>
    </div>
  );
}
