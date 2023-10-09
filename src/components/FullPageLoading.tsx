import { Spinner } from "@nextui-org/react";
import React from "react";

export default function FullPageLoading() {
  return (
    <main className="flex h-screen justify-center items-center">
      <Spinner size="lg" color="warning" label="dash" />
    </main>
  );
}
