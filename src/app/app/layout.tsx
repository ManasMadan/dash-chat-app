"use client";

import FullPageLoading from "@/components/FullPageLoading";
import useSocket from "@/hooks/useSocket";
import { signIn, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

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
  const { data, status } = useSession();
  const path = usePathname();
  const socket = useSocket(process.env.NEXT_PUBLIC_BACKEND_URL!);

  useEffect(() => {
    if (socket && data) {
      socket.emit("captureuserdetails", data.user.id);
    }
  }, [socket, data]);

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
