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

  function discountValue(price: number, discount: number) {
    let value = (price * discount) / 100;
    value = +(price - value).toFixed(2);

    return value;
  }

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
      <div className="flex items-center justify-center lg:w-[384px] h-[300px] lg:h-[380px] bg-gray-800 rounded-lg overflow-hidden">
        <Image
          src={`/images/${product.imageUrl}.png`}
          alt=""
          width={336}
          height={336}
          className="select-none"
        />
      </div>
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="leading-tight">{product.name}</h1>
          <div className="flex items-baseline gap-2">
            <span className="text-xl text-green-500/80 font-semibold">
              {product.discount !== 0
                ? `$${discountValue(product.price, product.discount)}`
                : `$${product.price}`}
            </span>
            <span className="text-lg font-semibold text-gray-700 line-through">
              {product.discount === 0 ? "" : `$${product.price}`}
            </span>
          </div>

          <p className="mt-4 lg:mt-8">{product.description}</p>
          <ul className="list-disc relative left-5 mt-2">
            {product.detailedDescription.map((detail, index) => (
              <li className="text-sm text-gray-100" key={index}>
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <button
          disabled={checkIfItemAlreadyExists(product.id)}
          onClick={(e) => handleAddToCart(e, product)}
          className="group flex items-center justify-center gap-2 w-full max-w-[352px] h-16 mt-8 lg:mt-0 rounded-lg bg-transparent border-2 border-green-500 font-semibold text-white text-sm transition hover:bg-green-500 hover:text-black disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-green-500 disabled:text-black"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8256 5.51906C20.7552 5.43481 20.6672 5.36705 20.5677 5.32056C20.4683 5.27407 20.3598 5.24998 20.25 5.25H5.12625L4.66781 2.73187C4.60502 2.38625 4.42292 2.07363 4.15325 1.84851C3.88359 1.62339 3.54347 1.50005 3.19219 1.5H1.5C1.30109 1.5 1.11032 1.57902 0.96967 1.71967C0.829018 1.86032 0.75 2.05109 0.75 2.25C0.75 2.44891 0.829018 2.63968 0.96967 2.78033C1.11032 2.92098 1.30109 3 1.5 3H3.1875L5.58375 16.1522C5.65434 16.5422 5.82671 16.9067 6.08344 17.2087C5.72911 17.5397 5.47336 17.9623 5.34455 18.4298C5.21575 18.8972 5.21892 19.3912 5.35371 19.8569C5.48851 20.3226 5.74966 20.7419 6.10821 21.0683C6.46676 21.3947 6.9087 21.6154 7.38502 21.7059C7.86134 21.7965 8.35344 21.7533 8.80673 21.5813C9.26003 21.4092 9.65682 21.115 9.9531 20.7312C10.2494 20.3474 10.4336 19.889 10.4853 19.407C10.537 18.9249 10.4541 18.4379 10.2459 18H14.5041C14.3363 18.3513 14.2495 18.7357 14.25 19.125C14.25 19.6442 14.404 20.1517 14.6924 20.5834C14.9808 21.0151 15.3908 21.3515 15.8705 21.5502C16.3501 21.7489 16.8779 21.8008 17.3871 21.6996C17.8963 21.5983 18.364 21.3483 18.7312 20.9812C19.0983 20.614 19.3483 20.1463 19.4496 19.6371C19.5508 19.1279 19.4989 18.6001 19.3002 18.1205C19.1015 17.6408 18.7651 17.2308 18.3334 16.9424C17.9017 16.654 17.3942 16.5 16.875 16.5H7.79719C7.62155 16.5 7.45149 16.4383 7.31665 16.3257C7.18182 16.2132 7.09077 16.0569 7.05938 15.8841L6.76219 14.25H17.6372C18.1641 14.2499 18.6743 14.0649 19.0788 13.7272C19.4833 13.3896 19.7564 12.9206 19.8506 12.4022L20.9906 6.13406C21.0099 6.02572 21.0051 5.91447 20.9766 5.80818C20.9481 5.7019 20.8966 5.60319 20.8256 5.51906ZM9 19.125C9 19.3475 8.93402 19.565 8.8104 19.75C8.68679 19.935 8.51109 20.0792 8.30552 20.1644C8.09995 20.2495 7.87375 20.2718 7.65552 20.2284C7.43729 20.185 7.23684 20.0778 7.0795 19.9205C6.92217 19.7632 6.81502 19.5627 6.77162 19.3445C6.72821 19.1262 6.75049 18.9 6.83564 18.6945C6.92078 18.4889 7.06498 18.3132 7.24998 18.1896C7.43499 18.066 7.6525 18 7.875 18C8.17337 18 8.45952 18.1185 8.6705 18.3295C8.88147 18.5405 9 18.8266 9 19.125ZM18 19.125C18 19.3475 17.934 19.565 17.8104 19.75C17.6868 19.935 17.5111 20.0792 17.3055 20.1644C17.1 20.2495 16.8738 20.2718 16.6555 20.2284C16.4373 20.185 16.2368 20.0778 16.0795 19.9205C15.9222 19.7632 15.815 19.5627 15.7716 19.3445C15.7282 19.1262 15.7505 18.9 15.8356 18.6945C15.9208 18.4889 16.065 18.3132 16.25 18.1896C16.435 18.066 16.6525 18 16.875 18C17.1734 18 17.4595 18.1185 17.6705 18.3295C17.8815 18.5405 18 18.8266 18 19.125ZM18.375 12.1341C18.3435 12.3073 18.2521 12.464 18.1166 12.5766C17.9812 12.6893 17.8105 12.7506 17.6344 12.75H6.48938L5.39906 6.75H19.3509L18.375 12.1341Z"
              className="fill-white transition group-hover:fill-black group-disabled:fill-black"
            />
          </svg>
          {itemAlreadyInCart
            ? "Item already exists in the cart"
            : "Add to cart"}
        </button>
      </div>
    </>
  );
}
