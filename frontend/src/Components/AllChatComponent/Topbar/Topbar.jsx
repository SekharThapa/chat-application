import React, { useEffect } from "react";
import { IoCallSharp } from "react-icons/io5";
import { IoVideocam } from "react-icons/io5";
import { useConversation } from "../../../zustand/useConversation";

const Topbar = () => {
  const { selectedConversation, setselectedConversation } = useConversation();
  // useEffect(() => {
  //   return () => setselectedConversation(null);
  // }, [selectedConversation]);

  return (
    <div className="w-[100%] flex bg-[red] p-4 py-6  h-[40px] items-center justify-between">
      <div className="flex gap-4 items-center">
        <img
          class="w-8 h-8 rounded-full"
          src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_1280.jpg"
          alt="Jese image"
        />
        <p className="text-white">{selectedConversation?.username}</p>
      </div>
      <div className="flex gap-4">
        <IoCallSharp className="cursor-pointer" />
        <IoVideocam className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Topbar;
