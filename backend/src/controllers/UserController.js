import user from "../models/UserModel.js";
import { registerValidationSchema } from "../middleware/validation/UserRegisterValidation.js";
import bcrypt from "bcrypt";
import { loginValidationSchema } from "../middleware/validation/UserLoginValidation.js";
import { generateToken } from "../utils/generateToken.js";
import { recieveMail } from "../middleware/mailer/mailer.js";
import jwt from "jsonwebtoken";
import ResetValidationSchema from "../middleware/validation/ResetValidation.js";
import ForgotValidationSchema from "../middleware/validation/ForgotValidation.js";
import Basket from "../models/BasketModel.js";

export const register = async (req, res) => {
  try {
    const { name, username, email, password, confirmPassword } = req.body;
    const { filename } = req.file || {};

    if (!filename) {
      return res.status(400).json({ message: "Image not uploaded" });
    }

    const { error } = registerValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const existUser = await user.findOne({ email });
    if (existUser) {
      return res.status(400).json({ message: "This email is already registered." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const imageUrl = `images/${filename}`;

    const newUser = new user({
      image: imageUrl,
      name,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = generateToken(newUser._id, res);

    const confirmLink = `${process.env.SERVER_LINK}/auth/verify/${token}`;
    recieveMail(newUser, confirmLink);

    return res.status(201).json({
      message: "İstifadəçi uğurla yaradıldı",
      newUser,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const updatedVerify = await user.findByIdAndUpdate({ _id: decoded.id }, { isVerified: true });

    if (updatedVerify) {
      return res.redirect(`${process.env.CLIENT_LINK}/login`);
    }
  } catch (error) {
    return res.status(400).json({ message: "Token not valid or expired" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  const { error } = loginValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const existUser = await user.findOne({ username });
  if (!existUser) {
    return res.status(400).json({ message: "User not found" });
  }

  const isMatch = await bcrypt.compare(password, existUser.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Username or Password wrong" });
  }

  const token = generateToken(existUser._id, res);

  return res.status(200).json({
    message: "User logged in successfully",
    existUser,
    token,
  });
};

import Wishlist from "../models/WishlistModel.js" // bunu yuxarıda import et

export const logout = async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log("LOGOUT TOKEN:", token);  // <--- bunu yaz

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("DECODED ID:", decoded.id);  // <--- bunu da yaz

      await Basket.findOneAndUpdate({ user: decoded.id }, { products: [] });
      await Wishlist.findOneAndUpdate({ user: decoded.id }, { products: [] });
    } else {
      console.log("No token found in cookies");
    }

    res.clearCookie("token");
    return res.status(200).json({ message: "User logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Logout error" });
  }
}



export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const { error } = ForgotValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const existUser = await user.findOne({ email });
    if (!existUser) return res.status(404).json({ message: "User not found" });

    const token = jwt.sign({ id: existUser._id }, process.env.JWT_SECRET, {
      expiresIn: "10m",
    });

    const resetLink = `${process.env.CLIENT_LINK}/resetpassword?token=${token}`;
    recieveMail(existUser, resetLink);

    return res.status(200).json({ message: "Reset link sent to your email" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { password, token } = req.body;

    const { error } = ResetValidationSchema.validate({ password });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    if (!token) {
      return res.status(400).json({ message: "Token not provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const existUser = await user.findById(decoded.id);
    if (!existUser) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    existUser.password = hashedPassword;

    await existUser.save();

    return res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
