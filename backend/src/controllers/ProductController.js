import product from "../models/ProductModel.js";


export const addProduct = async (req, res) => {
  try {
    const { title, category,description, price } = req.body;

    const imageUrl = `images/${req.file.filename}`.replace(/\\/g, "/");

    const newProduct = new product({
      title,
      category,
      description,
      price,
      image: imageUrl,
    });

    await newProduct.save();

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getProducts = async (req, res) => {
  try {
    const products = await product.find();

    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedproduct = await product.findByIdAndDelete(id);

    if (!deletedproduct) {
      return res.status(404).json({ message: "No product found" });
    }
    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const searchProduct = async (req, res) => {
  const { title } = req.params;

  try {
    const products = await product.find({
      title: { $regex: title, $options: "i" },
    });

    if (!products) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};