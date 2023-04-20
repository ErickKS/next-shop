import Link from "next/link";

export const metadata = {
  title: "Contact | Shop"
};

export default function Contact() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>teste</p>
        <div>
          <Link href={"/"}>Home</Link> <Link href={"/contact"}>Contact</Link>
        </div>
      </main>
    </>
  );
}
