import blog from "../models/BlogModel.js";

export const addBlog = async (req, res) => {
    try {
      const { title, date, description } = req.body;
  
      const imageUrl = `images/${req.file.filename}`.replace(/\\/g, "/");
  
      const newBlog = new blog({
        title,
        date,
        description,
        image: imageUrl,
      });
  
      await newBlog.save();
  
      return res.status(201).json(newBlog);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const getBlogs = async (req, res) => {
    try {
      const blogs = await blog.find();
  
      if (!blogs) {
        return res.status(404).json({ message: "No blogs found" });
      }
  
      return res.status(200).json(blogs);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  export const deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedblog = await blog.findByIdAndDelete(id);
  
      if (!deletedblog) {
        return res.status(404).json({ message: "No blog found" });
      }
      return res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };