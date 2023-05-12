import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Cart from "@/components/cart/Cart";

interface HeaderProps {
  hasCart: boolean;
}

export default function Header({ hasCart }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleRouter() {
    if (pathname === "/") router.refresh();
    else if (pathname === "/payout") window.location.reload();
    else router.back();
  }

  return (
    <header className="container flex justify-center py-10">
      <button className="outline-none" onClick={handleRouter}>
        <Image
          src="/razer-logo.svg"
          alt="logo"
          width={200}
          height={48}
          priority
          className="select-none"
        />
      </button>
      {hasCart && <Cart />}
    </header>
  );
}
