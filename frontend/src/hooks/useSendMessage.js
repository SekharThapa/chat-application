import { useContext, useState } from "react";
import { useConversation } from "../zustand/useConversation";
import axios from "axios";
import { SocketContext } from "../utilis/SocketContext";
import { SocketEnum } from "../utilis/Enums";
import { UserInfo } from "../utilis/useContext";

export const useSendMessage = () => {
  // Destructure needed values from the conversation context
  const {socket} = useContext(SocketContext)
  const {state} = useContext(UserInfo)
  const setNewMessage  = useConversation((state)=>state.setNewMessage)

  const { message, selectedConversation, setMessage } = useConversation();
  const [loading, setLoading] = useState(false);


  const sendMessage = async (inputmessage) => {
    try {
      setLoading(true);
      // Send message to the server
      const data = await axios.post(
        `http://localhost:8000/api/send-message/${selectedConversation._id}`,
        {
          message: inputmessage,
        },
        {
          withCredentials: true,
        }
      );

      // Check if message is successfully sent
      if (data.status !== 201) {
        throw new Error("Data nai xaina ");
      } else {
        console.log("loggedInuser",state.userdata.user._id);
        setNewMessage(data.data)
        const socketPayload = {
          receiverId:selectedConversation._id,
          senderId:state.userdata.user._id,
          data:data.data
        }
        socket.emit(SocketEnum.sendMessage,socketPayload)
        setMessage([...message, data.data]);
        console.log("this is message", message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { sendMessage, loading };
};
