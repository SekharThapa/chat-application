import jwt from "jsonwebtoken";
export const setTokenAndCookie = async (data, res) => {
  try {
    const token = jwt.sign({ data }, process.env.SECRETKEY, {
      expiresIn: "1h",
    });
    console.log("this is secret key ", process.env.SECRETKEY);
    if (!token) {
      console.log("failed to create the token");
    } else {
      res.cookie("token", token, {
        httpOnly: false,
        maxAge: 24 * 60 * 60 * 1000,
        // sameSite: "None",
        // secure: false,
      });
    }
  } catch (error) {
    console.log("this is error", error);
  }
};
