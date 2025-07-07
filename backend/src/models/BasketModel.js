import mongoose from "mongoose"

const basketSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  products: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      count: { type: Number, default: 1 }
    }
  ]
}, { timestamps: true })

export default mongoose.model("Basket", basketSchema)
