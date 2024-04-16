import React, { useEffect } from "react";
import Chat from "../Chat/Chat";
import { useGetMessage } from "../../../hooks/useGetMessage";

const ChatList = () => {
  const { loading, message } = useGetMessage();
    console.log("message",message)
  return (
    <div className="flex flex-col bg-blue-950  gap-3 min-h-[624px] overflow-auto">
      {message?.map((  item) => {
        return <Chat key= { item?._id} item={item} />;
      })}
    </div>
  );
};

export default ChatList;
