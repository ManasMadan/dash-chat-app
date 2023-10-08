import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
export default function Navbar() {
  return (
    <header className="flex justify-between items-center mt-4">
      <h1 className="text-5xl">
        <Image
          src="/logo.svg"
          width="75"
          height="75"
          alt=""
          className="inline-block"
        />
        dash
      </h1>
      <Link
        href="/"
        className="bg-primary-500 px-4 py-3 rounded-3xl flex gap-3 items-center h-fit hover:bg-transparent hover:text-primary-500 transition-colors border-2 border-transparent hover:border-primary-500"
      >
        Get Started
        <ArrowRight />
      </Link>
    </header>
  );
}
