import jwt from "jsonwebtoken";
import UserModel from "../model/UserModel.js";

export const VerifyUser = async (req, res, next) => {
  try {
    const cookie = req.cookies.token;
    if (!cookie) {
      return res
        .status(401)
        .json({ message: "Token is missing", success: false });
    }

    const userVerified = jwt.verify(cookie, process.env.SECRETKEY);
    const user = await UserModel.findById(userVerified.data).select(
      "-password"
    );
    if (!user) {
      res.status(403).json({ message: "user not found ", success: false });
    }
    req.user = user;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ message: "Token is invalid or expired", success: false });
  }
};
