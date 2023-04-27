"use client";

import { Metadata } from "next";

import { CartContextProvider } from "@/contexts/CartContext";

import "./globals.css";

export const metadata: Metadata = {
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
      <CartContextProvider>
        <body>{children}</body>
      </CartContextProvider>
    </html>
  );
}
