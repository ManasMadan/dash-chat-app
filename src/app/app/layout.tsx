"use client";

import FullPageLoading from "@/components/FullPageLoading";
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  settings: React.ReactElement;
  conversations: React.ReactNode;
  messages: React.ReactNode;
  children: React.ReactNode;
}

const AuthenticatedRoutesLayout: React.FC<Props> = ({
  settings,
  conversations,
  messages,
  children,
}) => {
  const { status } = useSession();
  const path = usePathname();
  if (status == "loading") {
    return <FullPageLoading />;
  } else if (status == "unauthenticated") {
    signIn("", { callbackUrl: "/app" });
  } else {
    return (
      <main className="flex h-screen">
        <section className="max-w-[50px] w-full">{settings}</section>
        {path === "/app" ? (
          <>
            <section className="max-w-sm w-full">{conversations}</section>
            <section className="w-full">{messages}</section>
          </>
        ) : (
          children
        )}
      </main>
    );
  }
};

export default AuthenticatedRoutesLayout;
