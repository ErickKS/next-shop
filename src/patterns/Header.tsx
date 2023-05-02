import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import Cart from "@/components/cart/Cart";

interface HeaderProps {
  hasCart: boolean;
}

export default function Header({ hasCart }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="container flex justify-center py-10">
      <button
        onClick={
          pathname !== "/" ? () => router.back() : () => router.refresh()
        }
      >
        <Image src="/logo.svg" alt="logo" width={130} height={52} priority />
      </button>
      {hasCart && <Cart />}
    </header>
  );
}
