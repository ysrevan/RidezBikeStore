// import express from "express"

// import { register } from "../controllers/UserController.js"

// const userRouter = express.Router()

// userRouter.post("/register",register)
// userRouter.post("/login",register)
// userRouter.post("/logout",register)

// export default userRouter

import express from "express";
import { login, logout, register, verifyEmail } from "../controllers/UserController.js";
import verifyToken from "../middleware/protected/verifyToken.js";
import upload from "../upload/upload.js";
const userRouter = express.Router();

userRouter.post("/register",upload.single("image"), register);
userRouter.get("/verify/:token", verifyEmail);
userRouter.post("/login", login);
userRouter.post("/logout", logout);



export default userRouter;