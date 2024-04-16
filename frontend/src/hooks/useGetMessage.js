import { useEffect, useState } from "react";
import { useConversation } from "../zustand/useConversation";
import axios from "axios";

export const useGetMessage = () => {
  const { selectedConversation, message, setMessage } = useConversation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);
      try {
        const data = await axios.get(
          `http://localhost:8000/api/get-message/${selectedConversation?._id}`,
          {
            withCredentials: true,
            method: "GET",
          }
        );
        if (data.status !== 200) return;
        setMessage(data.data.message);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation._id) getMessage();
  }, [selectedConversation._id, setMessage]);
  return { loading, message };
};
