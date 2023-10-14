"use client";
import { useRouter } from "next/navigation";

interface Props {}

const ConversationsList: React.FC<Props> = (props) => {
  const router = useRouter();
  const setSelectedConversation = (id: string) =>
    router.replace(`/app?conversationId=${id}`);

  return (
    <div className="px-4 flex flex-col gap-4">
      {[...Array(100).keys()].map((i) => (
        <div
          className="cursor-pointer"
          onClick={() => setSelectedConversation((i + 1).toString())}
        >
          Conversations List Element {i + 1}
        </div>
      ))}
    </div>
  );
};

export default ConversationsList;
