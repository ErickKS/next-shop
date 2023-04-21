import "./globals.css";

export const metadata = {
  title: "Shop",
  description: "T-shirt shop"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
