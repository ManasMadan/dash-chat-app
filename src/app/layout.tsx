"use client";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <NextUIProvider>
        <body>{children}</body>
      </NextUIProvider>
    </html>
  );
}
