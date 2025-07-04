import homeproduct from "../models/HomeProductModel.js";


export const addHomeProduct = async (req, res) => {
    try {
      const { title, category,description, price } = req.body;
  
      const imageUrl = `images/${req.file.filename}`.replace(/\\/g, "/");
  
      const newHomeProduct = new homeproduct({
        title,
        category,
        description,
        price,
        image: imageUrl,
      });
  
      await newHomeProduct.save();
  
      return res.status(201).json(newHomeProduct);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  export const getHomeProducts = async (req, res) => {
    try {
      const homeproducts = await homeproduct.find();
  
      if (!homeproducts) {
        return res.status(404).json({ message: "No homeproducts found" });
      }
  
      return res.status(200).json(homeproducts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  export const deleteHomeProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedhomeproduct = await homeproduct.findByIdAndDelete(id);
  
      if (!deletedhomeproduct) {
        return res.status(404).json({ message: "No homeproduct found" });
      }
      return res.status(200).json({ message: "HomeProduct deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };