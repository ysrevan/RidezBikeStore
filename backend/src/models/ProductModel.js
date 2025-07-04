// import mongoose from "mongoose";

// const productSchema = mongoose.Schema({
//     image:{type:String,required:true},
//     title:{type:String,required:true},
//     category:{type:String,required:true},
//     desc:{type:String,required:true},
//     price:{type:Number,required:true}
// },{connection:"Products",timestamps:true})

// const product = mongoose.model("Product",productSchema)

// export default product



import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
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
  { collection: "Products", timestamps: true }
);

const product =
  mongoose.model("Product", productSchema);

export default product;
