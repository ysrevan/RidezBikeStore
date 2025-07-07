import express from "express";
import "dotenv/config";
import "./src/db/Connection.js";
import productRouter from "./src/routes/ProductRouter.js";
import blogRouter from "./src/routes/BlogRouter.js";
import homeproductRouter from "./src/routes/HomeProductRouter.js";
import userRouter from "./src/routes/UserRouter.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import adminRouter from "./src/routes/AdminRouter.js";
import basketRouter from "./src/routes/BasketRouter.js"
import wishlistRouter from "./src/routes/WishlistRouter.js"
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true               
}));

app.use(cookieParser());

app.use("/api/products", productRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/homeproducts", homeproductRouter);
app.use("/auth", userRouter);
app.use("/api/profile", userRouter);
app.use("/images", express.static("src/images"));
app.use("/auth/admin",adminRouter)
app.use("/api/basket", basketRouter)
app.use("/api/wishlist", wishlistRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
