import React, { useEffect } from "react";
import Conversation from "../Conversation/Conversation";
import useGetConversation from "../../../hooks/useGetConversation";
import { useConversation } from "../../../zustand/useConversation";

const ConversationList = () => {
  const { error, data } = useGetConversation();
  // console.log("this is data", data);

  return (
    <div className="flex flex-col gap-2 w-[100%] h-[80%]  overflow-auto">
      {data.message?.map((item, key) => {
        return <Conversation key={key} item={item} />;
      })}
    </div>
  );
};

export default ConversationList;
