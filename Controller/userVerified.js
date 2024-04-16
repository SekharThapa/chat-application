export const userVerified = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({ message: "user verified ", user, success: true });
  } catch (error) {
    res.status(403).json({ message: error.message, success: false });
  }
};
