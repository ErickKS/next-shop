import Product from "@/components/Product";
import Header from "@/patterns/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container flex items-center justify-between">
        <Product />
      </main>
    </>
  );
}
