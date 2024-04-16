import express from "express";
import { Login, Logout, Register } from "../Controller/AuthController.js";

const routes = express.Router();

routes.post("/login", Login);
routes.post("/register", Register);
routes.post("/logout", Logout);

export default routes;
