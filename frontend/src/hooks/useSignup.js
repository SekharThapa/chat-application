import toast from "react-hot-toast";
import axios from "axios";

const useSignup = () => {
  let api = "http://localhost:8000/api/auth/register";
  const signup = async ({ username, email, password, gender, profilePic }) => {
    try {
      const errordata = await handleError({
        username,
        email,
        password,
        gender,
        profilePic,
      });
      if (errordata == false) {
        return;
      }

      const data = await axios.post(api, {
        username,
        email,
        password,
        gender,
        profilePic,
      });

      if (!data) {
        toast.error("Failed to register");
        return null;
      } else {
        toast.success("Successfully registered");
        return data;
      }
    } catch (error) {
      console.log("this is catch blockerror ", error);
      toast.error(error.message);

      return null;
    }
  };

  return { signup };
};

export const handleError = ({ username, email, password, gender }) => {
  if (!username || !email || !password || !gender) {
    toast.error("Enter all the required fields");
    return false;
  }
  if (password.length < 6) {
    toast.error("Password is too short");
    return false;
  }
  return true;
};

export default useSignup;
