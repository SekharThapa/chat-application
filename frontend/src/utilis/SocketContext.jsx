import { createContext, useContext, useEffect, useState } from "react";
import { UserInfo } from "./useContext";
import io from "socket.io-client";
import { SocketEnum } from "./Enums";
import { useConversation } from "../zustand/useConversation";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
};

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);

  const { state, dispatch } = useContext(UserInfo);
  const setNewMessage  = useConversation((state)=>state.setNewMessage)

  useEffect(() => {
    if (state?.userdata?.user) {
      const newSocket = io("http://localhost:8000", {
        query: {
          userId: state?.userdata?.user?._id,
        },
      });
      setSocket(newSocket);
      newSocket.on(SocketEnum.getOnlineUsers, (users) => {
        setOnlineUsers(users);
        // console.log("setuser", users);
        // console.log("oneline user", onlineUsers);
      });

      newSocket.on(SocketEnum.message,(message)=>{  
        setNewMessage(message.data)
      })


      // console.log("this is 0", newSocket);
      return () => {
        if (socket) {
          socket.close();
          setSocket(null);
          // console.log("this is 1");
        }
      };
    }
  }, [state?.userdata?.user]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
