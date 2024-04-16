import { createContext, useReducer } from "react";

export let UserInfo = createContext();

let user = {
  userdata: null,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "setUserdata":
      return { ...state, userdata: action.payload };

    default:
      return state;
  }
};

export const UserContexProvider = ({ children }) => {
  let [state, dispatch] = useReducer(reducer, user);
  return (
    <UserInfo.Provider value={{ state, dispatch }}>
      {children}
    </UserInfo.Provider>
  );
};
