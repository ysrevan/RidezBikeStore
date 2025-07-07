import express from "express";
import verifyToken from "../middleware/protected/verifyToken.js";
import {
  getWishlist,
  addToWishlist,
  removeFromWishlist,
  clearWishlist
} from "../controllers/WishlistController.js";

const router = express.Router();

router.get("/", verifyToken, getWishlist);
router.post("/", verifyToken, addToWishlist);
router.delete("/:productId", verifyToken, removeFromWishlist);
router.delete("/", verifyToken, clearWishlist);

export default router;
