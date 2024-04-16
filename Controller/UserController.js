import UserModel from "../model/UserModel.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loginUserid = req.user._id;
    const filterUser = await UserModel.find({
      _id: {
        $ne: loginUserid,
      },
    }).select("-password");

    res.status(200).json({ message: filterUser, success: true });
  } catch (error) {
    res.status(403).json({ message: error, success: false });
  }
};
