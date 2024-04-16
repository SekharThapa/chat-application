import React, { useState } from "react";
import ChatInput from "../../Components/AllChatComponent/ChatInput/ChatInput";
import Sidebar from "../../Components/AllConversationcomponent/Sidebar/Sidebar";
import Topbar from "../../Components/AllChatComponent/Topbar/Topbar";
import ChatList from "../../Components/AllChatComponent/ChatList/ChatList";
import Noconversation from "../../Components/NoConversation/Noconversation";
import { useConversation } from "../../zustand/useConversation";

const Home = () => {
  const { selectedConversation, setselectedConversation } = useConversation();
  // const [isthereConversation, setConversation] = useState(true);
  return (
    <div className="flex  bg-[hsl(0,69%,11%)] justify-center items-center h-screen w-screen">
      <div className="flex h-[96%] bg-white w-[90%]">
        <Sidebar />
        <div className="flex flex-col pl-4 w-[70%]">
          {selectedConversation ? (
            <>
              <Topbar />
              <ChatList />
              <ChatInput />
            </>
          ) : (
            <Noconversation />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
