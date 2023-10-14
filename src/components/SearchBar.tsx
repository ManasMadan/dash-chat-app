"use client";
import { Button, Input, Tooltip } from "@nextui-org/react";
import { PlusIcon } from "lucide-react";

interface Props {}

const SearchBar: React.FC<Props> = (props) => {
  return (
    <div className="flex sticky bg-[#071729] top-0 p-4 gap-4 items-center">
      <Input type="email" label="Search Conversations" />
      <Tooltip content="New Conversation">
        <Button isIconOnly color="primary" aria-label="New Chat">
          <PlusIcon />
        </Button>
      </Tooltip>
    </div>
  );
};

export default SearchBar;
