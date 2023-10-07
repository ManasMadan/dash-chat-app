"use client";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextUIProvider>
          <Navbar />
          {children}
        </NextUIProvider>
      </body>
    </html>
  );
}
