import React from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Image from "next/image";

export default function NavbarComponent() {
  return (
    <Navbar isBlurred maxWidth="full">
      <NavbarContent>
        <NavbarBrand className="flex gap-2">
          <Image src="/logo.svg" alt="DashLogo" width="56" height="56" />
          <p className="text-2xl">dash</p>
        </NavbarBrand>
      </NavbarContent>
    </Navbar>
  );
}
