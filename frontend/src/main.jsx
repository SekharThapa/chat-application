import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserContexProvider } from "./utilis/useContext.jsx";
import { SocketContextProvider } from "./utilis/SocketContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContexProvider>
    <SocketContextProvider>
      <App />
    </SocketContextProvider>
  </UserContexProvider>
);
