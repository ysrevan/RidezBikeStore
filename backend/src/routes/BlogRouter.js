import express from "express";


import { addBlog, deleteBlog, getBlogs } from "../controllers/BlogController.js";
import upload from "../upload/upload.js";

const blogRouter = express.Router();



blogRouter.post("/", upload.single("image"), addBlog);
blogRouter.get("/", getBlogs);
blogRouter.delete("/:id", deleteBlog);


export default blogRouter;