"use client";
import { Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";
import React from "react";

export default function App() {
  return (
    <div>
      App
      <Button
        color="primary"
        variant="solid"
        onPress={() =>
          signOut({ callbackUrl: process.env.NEXT_PUBLIC_BASE_URL })
        }
      >
        Logout
      </Button>
    </div>
  );
}
