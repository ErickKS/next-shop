import Image from "next/image";
import Link from "next/link";

import Cart from "@/components/cart/Cart";

export default function Header() {
  return (
    <header className="container flex justify-center py-10">
      <Link href={"/"}>
        <Image src="/logo.svg" alt="logo" width={130} height={52} priority />
      </Link>
      <Cart />
    </header>
  );
}
