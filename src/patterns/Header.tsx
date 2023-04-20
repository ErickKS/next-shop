import Image from "next/image";

import CartButton from "@/components/CartButton";

export default function Header() {
  return (
    <header className="container flex justify-center py-10">
      <a href="/">
        <Image src="./logo.svg" alt="logo" width={130} height={52} priority />
      </a>
      <CartButton />
    </header>
  );
}
