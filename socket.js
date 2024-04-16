import http from "http";
import express from "express";
import { Server } from "socket.io";
import  Enums  from "./utilis/Enums.js";

const app = express();

const server = http.createServer(app);
const userSocketMap = {};

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST"],
  },
});
io.on("connection", (socket) => {

  console.log("user connected successfully", socket.id);
  const userId = socket.handshake.query.userId;


  if (userId != "undefined") {
    // start here

    console.log("userId ",userId)
    console.log(userSocketMap)

    if(!userSocketMap[userId]){
      // 
      userSocketMap[userId] = socket.id

    }

    userSocketMap[userId] = socket.id;
    // io.emit(Enums.getOnlineUsers, Object.keys(userSocketMap));
  }


  socket.on(Enums.sendMessage,(message)=>{
    const {senderId,receiverId,data}= message;
    console.log("trying to send message *******")
    const receiverSocket = userSocketMap[receiverId]
    if(receiverSocket){
      console.log("sending message  to ",receiverSocket)
      io.to(receiverSocket).emit(Enums.message,message)
    }else{
      console.log("receiver is not online ")
    }
  })


  socket.on("disconnect", () => {
    console.log("user disconnected successfully", socket.id);
    delete userSocketMap[userId];
    io.emit(Enums.getOnlineUsers, Object.keys(userSocketMap));
  });
});

export { io, server, app };

