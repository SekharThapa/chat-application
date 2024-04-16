import { create } from "zustand";

export const useConversation = create((set) => ({
  selectedConversation: null,
  setselectedConversation: (selectedConversation) =>
    set(() => ({
      selectedConversation: selectedConversation,
    })),

  message: [],
  setNewMessage:(newMesage)=>{
    set((state)=>({
      message:[...state.message,newMesage]
    }))
  },
  setMessage: (message) =>
    set(() => ({
      message: message,
    })),
}));
