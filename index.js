import express from "express";
import AuthRoutes from "./Route/AuthRoute.js";
import MessageRoute from "./Route/MessageRoute.js";
import UserRoute from "./Route/UserRoute.js";
import dotenv from "dotenv";
import { DbConnector } from "./utilis/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { VerifyUser } from "./middleware/VerifyUser.js";
import { app, io, server } from "./socket.js";

dotenv.config();
const port = process.env.PORT || 8000;

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "PUT", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/hello", VerifyUser, (req, res) => {
  res.send("hello");
});

app.use("/api/auth", AuthRoutes);
app.use("/api", MessageRoute);
app.use("/api/users", UserRoute);

server.listen(port, () => {
  console.log(`Server started at port ${port}`);
  DbConnector();
});
