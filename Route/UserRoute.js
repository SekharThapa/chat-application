import express from "express";
import { VerifyUser } from "../middleware/VerifyUser.js";
import { getUsersForSidebar } from "../Controller/UserController.js";
import { userVerified } from "../Controller/userVerified.js";

const routes = express.Router();

routes.get("/", VerifyUser, getUsersForSidebar);
routes.post("/verify-user", VerifyUser, userVerified);

export default routes;
