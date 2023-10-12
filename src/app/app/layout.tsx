"use client";

import FullPageLoading from "@/components/FullPageLoading";
import { signIn, useSession } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

const AuthenticatedRoutesLayout: React.FC<Props> = (props) => {
  const { status } = useSession();
  if (status == "loading") {
    return <FullPageLoading />;
  } else if (status == "unauthenticated") {
    signIn("", { callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/app` });
  } else {
    return props.children;
  }
};

export default AuthenticatedRoutesLayout;
