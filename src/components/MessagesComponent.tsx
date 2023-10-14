"use client";
import { useSearchParams } from "next/navigation";
import NoConversationSelected from "@/components/NoConversationSelected";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {}

const MessagesComponent: React.FC<Props> = (props) => {
  const router = useRouter();
  const closeConversation = () => router.replace(`/app`);

  const conversationId = useSearchParams().get("conversationId");

  if (!conversationId) return <NoConversationSelected />;
  return (
    <div className="p-4">
      <XIcon className="cursor-pointer" onClick={closeConversation} />
      Messages of Conversation {conversationId}
    </div>
  );
};

export default MessagesComponent;
