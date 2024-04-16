import mongoose, { mongo } from "mongoose";

export const DbConnector = async () => {
  try {
    const data = mongoose.connect(process.env.MONGO_URI);
    if (data) {
      console.log("successfully connected to db");
    } else {
      console.log("Internal server error");
    }
  } catch (error) {
    console.log("failed to connect the db", error);
  }
};
