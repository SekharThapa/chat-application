import React, { useContext } from "react";
import { UserInfo } from "../../../utilis/useContext";
import { useConversation } from "../../../zustand/useConversation";

const Chat = ({ item }) => {
  // Destructure needed values from context and hooks
  const { state } = useContext(UserInfo);
  const { selectedConversation } = useConversation();

  // Simplify the check for whether it's the user's chat
  const isMyChat = state.userdata.user._id === item?.senderId;
  
  // Simplify the logic for applying styles
  const styles = isMyChat ? "flex-row-reverse" : "";
  const bgstyles = isMyChat ? "bg-[rgb(9,100,157)] text-white" : "bg-white text-black";
  console.log("chat ",item)


  return (
    <div className={`flex p-4 ${styles} items-start gap-2.5`}>
      <img
        className="w-8 h-8 rounded-full"
        src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
        alt="Profile Image"
      />
      <div className={`flex flex-col w-full max-w-[60%] ${bgstyles} leading-1.5 p-4 border-gray-200 rounded-[1rem] dark:bg-gray-700`}>
        {/* Display the chat message */}
        <p className="text-sm font-normal py-2.5">{item?.message|| item?.messages}</p>
        {/* Display delivery status and time */}
        <div className="flex gap-[4rem]">
          <span className="text-sm font-normal text-black-500 dark:text-gray-400">Delivered</span>
          <span className="text-sm font-normal text-black-500 dark:text-gray-400">11:00</span>
        </div>
      </div>
    </div>
  );
};

export default Chat;
