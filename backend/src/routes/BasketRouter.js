import express from "express"
import verifyToken from "../middleware/protected/verifyToken.js"
import {
  getBasket,
  addToBasket,
  removeFromBasket,
  clearBasket,
  decrementBasket 
} from "../controllers/BasketController.js"

const router = express.Router()

router.get("/", verifyToken, getBasket)
router.post("/", verifyToken, addToBasket)
router.post("/decrement", verifyToken, decrementBasket) 
router.delete("/:productId", verifyToken, removeFromBasket)
router.delete("/", verifyToken, clearBasket)

export default router
