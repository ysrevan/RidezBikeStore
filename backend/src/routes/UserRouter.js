import express from "express";
import { forgotPassword, login, logout, register, resetPassword, verifyEmail } from "../controllers/UserController.js";
import verifyToken from "../middleware/protected/verifyToken.js";
import upload from "../upload/upload.js";
const userRouter = express.Router();

userRouter.post("/register",upload.single("image"), register);
userRouter.get("/verify/:token", verifyEmail);
userRouter.post("/login", login);
userRouter.post("/logout", logout);
userRouter.post("/forgotpassword", forgotPassword);
userRouter.post("/resetpassword", resetPassword);


export default userRouter;