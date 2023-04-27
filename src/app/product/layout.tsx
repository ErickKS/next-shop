export const metadata = {
  title: "Product | Shop",
  description: "T-shirt shop"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
