// import jwt from "jsonwebtoken"

// const {TOKEN_KEY} = process.env

// export const generateToken = (id,res) =>{
//     const token = jwt.sign(
//         { id }, TOKEN_KEY,
//         process.env.JWT_SECRET,
//         { expiresIn: "2m" }
//       );

//       return res.cookie("token",token)

// }

import jwt from "jsonwebtoken";
import "dotenv/config";

export const generateToken = (id, res) => {
  const token = jwt.sign(
    { id },
    process.env.JWT_SECRET,
    { expiresIn: "2m" }
  );

  // Cookie ilə göndərmək istəyirsənsə (opsional):
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS lazımdırsa
    maxAge: 2 * 60 * 1000, // 2 dəqiqəlik
  });

  return token;
};
