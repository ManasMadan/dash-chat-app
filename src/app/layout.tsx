"use client";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
