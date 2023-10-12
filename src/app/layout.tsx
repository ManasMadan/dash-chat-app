"use client";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: "500", subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <SessionProvider>
        <body className={poppins.className}>
          <NextUIProvider>{children}</NextUIProvider>
        </body>
      </SessionProvider>
    </html>
  );
};

export default RootLayout;
