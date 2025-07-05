import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (id, res) => {
  const token = jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "2m" }
  );

  
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", 
    maxAge: 2 * 60 * 1000, 
  });

  return token;
};
