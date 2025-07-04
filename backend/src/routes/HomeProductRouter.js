
import express from "express";



import upload from "../upload/upload.js";
import { addHomeProduct, deleteHomeProduct, getHomeProducts } from "../controllers/HomeProductController.js";

const homeproductRouter = express.Router();



homeproductRouter.post("/", upload.single("image"), addHomeProduct);
homeproductRouter.get("/", getHomeProducts);
homeproductRouter.delete("/:id", deleteHomeProduct);


export default homeproductRouter;