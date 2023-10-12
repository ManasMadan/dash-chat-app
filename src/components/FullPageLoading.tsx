import { Spinner } from "@nextui-org/react";
import React from "react";

interface Props {}

const FullPageLoading: React.FC<Props> = () => {
  return (
    <main className="flex h-screen justify-center items-center">
      <Spinner size="lg" color="warning" label="dash" />
    </main>
  );
};

export default FullPageLoading;
