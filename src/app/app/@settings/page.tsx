"use client";
import React from "react";
import {
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOutIcon, UserCircle2 } from "lucide-react";

interface Props {}

const Settings: React.FC<Props> = (props) => {
  const { data } = useSession();
  const avatarURL = data?.user?.image!;
  const name = data?.user?.name!;
  const email = data?.user?.email!;

  const router = useRouter();

  return (
    <div className="flex flex-col justify-between h-full py-4 items-center">
      <Link href="/app" className="flex flex-col items-center gap-2">
        <Image src="/logo.svg" width="75" height="75" alt="dash logo" />
        <div
          className="rotate-180 select-none"
          style={{ writingMode: "vertical-lr" }}
        >
          dash
        </div>
      </Link>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="primary"
            name={name}
            size="sm"
            src={avatarURL}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem
            key="profile"
            className="h-14 gap-2"
            textValue={`Signed in as ${email}`}
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{email}</p>
          </DropdownItem>
          <DropdownItem
            key="settings"
            onPress={() => router.push("/app/profile")}
            endContent={<UserCircle2 />}
          >
            My Profile
          </DropdownItem>
          <DropdownItem
            key="logout"
            color="danger"
            onPress={() => signOut({ callbackUrl: "/" })}
            endContent={<LogOutIcon className="rotate-180" />}
          >
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Settings;
