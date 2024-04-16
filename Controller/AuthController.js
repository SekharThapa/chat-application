import { response } from "express";
import UserModel from "../model/UserModel.js";
import { hashPassword, verifyPassword } from "../utilis/hashAndDecrypt.js";
import { setTokenAndCookie } from "../utilis/setToken&Cookie.js";

export const Register = async (req, res) => {
  const { username, profilePic, email, password, gender } = req.body;
  let girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
  let boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

  try {
    if (!username || !email || !password || !gender) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email is already registered",
        success: false,
      });
    }
    const hashedPassword = await hashPassword(password);

    const newUser = new UserModel({
      username,
      email,
      password: hashedPassword,
      gender,
      profilePic: gender === "Male" ? boyPic : girlPic,
    });
    await newUser.save();
    setTokenAndCookie(newUser._id, res);

    res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

export const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email && !password) {
      res
        .status(403)
        .json({ message: "Enter all the credentials ", success: false });
    } else {
      const data = await UserModel.findOne({ email });
      if (!data) {
        res.status(403).json({
          message: "Invalid Email or password  ! ",
          success: false,
        });
      } else {
        const isVerified = await verifyPassword(password, data.password);
        console.log("this is verified ", isVerified);
        if (!isVerified) {
          res
            .status(403)
            .json({ message: "password is not correct", success: false });
        } else {
          setTokenAndCookie(data._id, res);
          res
            .status(200)
            .json({ message: "Login Successfully ", success: true });
        }
      }
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
export const Logout = (req, res) => {
  try {
    const isLogout = res.cookie("token", " ", {
      httpOnly: false,
      maxAge: 0 * 0 * 0 * 0,
    });
    if (!isLogout) {
      res.status(403).json({ message: "logout failed", success: false });
    } else {
      res.status(200).json({ message: "successfully Logout", success: true });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};
