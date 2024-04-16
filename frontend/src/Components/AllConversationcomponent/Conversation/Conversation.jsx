import React from "react";
import { useConversation } from "../../../zustand/useConversation";

const Conversation = ({ item }) => {
  const { selectedConversation, setselectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === item?._id;

  return (
    <div
      className={`flex p-4 cursor-pointer hover:bg-blue-900 gap-2 ${
        isSelected ? "bg-blue-900" : ""
      }`}
      onClick={() => setselectedConversation(item)}
    >
      <div className="relative">
        <img
          className="w-8 h-8 rounded-full"
          src={item.profilePic}
          alt="User profile"
        />
        <div className="w-2 h-2 bg-[rgb(0,226,0)] rounded-full absolute top-0 right-0"></div>
      </div>
      <p>{item.username}</p>
    </div>
  );
};

export default Conversation;
