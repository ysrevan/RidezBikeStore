import express from "express";


import { addBlog, deleteBlog, editBlog, getBlogs } from "../controllers/BlogController.js";
import upload from "../upload/upload.js";

const blogRouter = express.Router();



blogRouter.post("/", upload.single("image"), addBlog);
blogRouter.get("/", getBlogs);
blogRouter.delete("/:id", deleteBlog);
blogRouter.put("/:id", upload.single("image"), editBlog);


export default blogRouter;