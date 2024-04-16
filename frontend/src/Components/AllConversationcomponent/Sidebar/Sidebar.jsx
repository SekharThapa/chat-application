import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import { useNavigate } from "react-router-dom";

import { RiLogoutCircleLine } from "react-icons/ri";
import ConversationList from "../CoversationList/ConversationList";
import axios from "axios";
import toast from "react-hot-toast";

const Sidebar = () => {
  const Navigate = useNavigate();
  let api = "http://localhost:8000/api/auth/logout";
  const LogOut = async () => {
    try {
      const { data, status } = await axios.post(
        api,
        {},
        {
          method: "POST",
          withCredentials: true,
        }
      );
      if (status == 200) {
        Navigate("/login");
        toast.success("Logout Successfully");
      }
      console.log("this is data", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col  pl-3 gap-2 w-[30%]">
      <Searchbar />
      <ConversationList />
      <div className="flex gap-4  items-center">
        <RiLogoutCircleLine className=" text-red-600 cursor-pointer" />
        <p
          onClick={() => {
            LogOut();
          }}
          className="text-red-700 cursor-pointer  font-semibold"
        >
          Logout
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
