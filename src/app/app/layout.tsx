"use client";

import FullPageLoading from "@/components/FullPageLoading";
import { signIn, useSession } from "next-auth/react";

export default function AuthenticatedRoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { status } = useSession();
  if (status == "loading") {
    return <FullPageLoading />;
  } else if (status == "unauthenticated") {
    signIn("", { callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/app` });
  } else {
    return children;
  }
}
