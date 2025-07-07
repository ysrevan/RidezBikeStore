import Wishlist from "../models/WishlistModel.js";

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.user._id }).populate("products");
    res.json({ products: wishlist ? wishlist.products : [] });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) wishlist = new Wishlist({ user: req.user._id, products: [] });

    const exists = wishlist.products.find(p => p.toString() === productId);
    if (exists) {
      return res.status(400).json({ message: "Product already in wishlist" });
    }

    wishlist.products.push(productId);
    await wishlist.save();
    await wishlist.populate("products"); // Əlavə: tam məhsul məlumatı üçün

    res.json({ products: wishlist.products });
  } catch (err) {
    console.error("Add to wishlist error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.params;
    const wishlist = await Wishlist.findOne({ user: req.user._id });
    if (!wishlist) return res.status(404).json({ message: "Wishlist not found" });

    wishlist.products = wishlist.products.filter(p => p.toString() !== productId);
    await wishlist.save();
    await wishlist.populate("products");

    res.json({ products: wishlist.products });
  } catch (err) {
    console.error("Remove from wishlist error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const clearWishlist = async (req, res) => {
  try {
    await Wishlist.findOneAndUpdate({ user: req.user._id }, { products: [] }, { new: true });
    res.json({ products: [] });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
