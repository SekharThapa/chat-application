import express from "express";
import { getMessage, sendMessage } from "../Controller/MessageController.js";
import { VerifyUser } from "../middleware/VerifyUser.js";

const routes = express.Router();

routes.post("/send-message/:id", VerifyUser, sendMessage);
routes.get("/get-message/:id", VerifyUser, getMessage);

export default routes;
