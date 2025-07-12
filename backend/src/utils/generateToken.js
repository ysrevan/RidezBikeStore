import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (id, res) => {
  const token = jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "10m" });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,    
    sameSite: "lax",   
    maxAge: 10 * 60 * 1000
  })

  return token;
};
