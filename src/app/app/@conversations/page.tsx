import SearchBar from "@/components/SearchBar";
import ConversationsList from "@/components/ConversationsList";

interface Props {}

const Conversations: React.FC<Props> = (props) => {
  return (
    <div className="max-h-full overflow-y-auto custom-scrollbar border-x-1 border-slate-600">
      <SearchBar />
      <ConversationsList />
    </div>
  );
};

export default Conversations;
