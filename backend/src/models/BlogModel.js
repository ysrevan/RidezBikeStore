import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { collection: "Blogs", timestamps: true }
);

const blog =
  mongoose.model("Blog", blogSchema);

export default blog;
