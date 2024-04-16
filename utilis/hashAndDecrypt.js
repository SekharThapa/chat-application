import bcrypt from "bcrypt";
console.log("Salt Round:", process.env.SALTROUND);
const SALTROUND = 10;
export const hashPassword = async (pass) => {
  try {
    const hashedPass = await bcrypt.hash(pass, SALTROUND);
    console.log("Salt Round:", process.env.SALTROUND);

    if (!hashedPass) {
      throw new Error("Unable to hash the password");
    } else {
      return hashedPass;
    }
  } catch (error) {
    console.error("Error during password hashing:", error.message);
    throw error;
  }
};

export const verifyPassword = async (inputPassword, hashedPassword) => {
  try {
    const isPasswordCorrect = await bcrypt.compare(
      inputPassword,
      hashedPassword
    );
    if (!isPasswordCorrect) {
      console.log("Password is incorrect");
    } else {
      return isPasswordCorrect;
    }
  } catch (error) {
    console.log("Error in password verification:", error.message);
    throw error;
  }
};
