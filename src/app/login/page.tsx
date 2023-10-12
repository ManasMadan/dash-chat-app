"use client";
import { signIn, useSession } from "next-auth/react";
import React from "react";
import { redirect } from "next/navigation";
import FullPageLoading from "@/components/FullPageLoading";

interface Props {}

const Login: React.FC<Props> = (props) => {
  const { status } = useSession();
  if (status == "loading") {
    return <FullPageLoading />;
  } else if (status == "authenticated") {
    redirect("/app");
  }
  signIn("", { callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/app` });
};

export default Login;
