import mongoose from "mongoose";

const homeproductSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { collection: "HomeProducts", timestamps: true }
);

const homeproduct =
  mongoose.model("HomeProduct", homeproductSchema);

export default homeproduct;