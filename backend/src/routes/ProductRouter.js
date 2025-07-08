import express from "express";


import {
  addProduct,
  deleteProduct,
  editProduct,
  getProducts,
  searchProduct,
} from "../controllers/productController.js";
import upload from "../upload/upload.js";

const productRouter = express.Router();



productRouter.post("/", upload.single("image"), addProduct);
productRouter.get("/", getProducts);
productRouter.delete("/:id", deleteProduct);
productRouter.get("/search/:title", searchProduct);
productRouter.put("/:id", upload.single("image"), editProduct);


export default productRouter;