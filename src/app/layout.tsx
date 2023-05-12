"use client";

import { CartContextProvider } from "@/contexts/CartContext";

import "./globals.css";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Razer Shop</title>
      </head>
      <CartContextProvider>
        <body>{children}</body>
      </CartContextProvider>
    </html>
  );
}
