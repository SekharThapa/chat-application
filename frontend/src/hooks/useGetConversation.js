import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetConversation = () => {
  const api = "http://localhost:8000/api/users";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchConversation = async () => {
      try {
        const response = await axios.get(api, {
          withCredentials: true,
        });

        setData(response.data);
      } catch (error) {
        setError(error);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchConversation();
  }, []);

  return { data, loading, error };
};

export default useGetConversation;
