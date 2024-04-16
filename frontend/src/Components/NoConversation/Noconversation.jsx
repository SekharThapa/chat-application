import React, { useState } from "react";
import { IoMdChatboxes } from "react-icons/io";

const Noconversation = () => {
  let [name, setName] = useState("Aabiskar dhenga");
  return (
    <div className="flex flex-col w-[100%] h-[100%] items-center  justify-center">
      <div className="flex flex-col gap-5 items-center">
        <h1 className="font-black text-lg tracking-[1px]">Welcome {name} !</h1>
        <h1 className="font-black text-lg tracking-[1px]">
          Select a Chat to start Messaging
        </h1>
        <img
          width="94"
          height="94"
          src="https://img.icons8.com/3d-fluency/94/speech-bubble-with-dots.png"
          alt="speech-bubble-with-dots"
        />
      </div>
    </div>
  );
};

export default Noconversation;
