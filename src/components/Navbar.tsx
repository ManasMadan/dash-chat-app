import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

interface Props {}

const Navbar: React.FC<Props> = (props) => {
  return (
    <header className="flex justify-between items-center mt-4">
      <h1 className="text-3xl sm:text-5xl">
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
        href="/login"
        className="text-sm sm:text-lg bg-primary-500 px-2 sm:px-4 py-3 rounded-full flex sm:gap-3 items-center h-fit hover:bg-transparent hover:text-primary-500 transition-colors border-2 border-transparent hover:border-primary-500 mr-2"
      >
        Get Started
        <ArrowRight />
      </Link>
    </header>
  );
};

export default Navbar;
