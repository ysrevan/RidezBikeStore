import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs, addBlog, editBlog, deleteBlog } from '../../redux/blogSlice';
import { useFormik } from 'formik';
import { blogSchema } from '../../schemas/BlogSchema';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Button from '../../components/utils/Button';
import "./Admin.css";
import BlogModal from '../../components/utils/BlogModal';
import {Link} from "react-router-dom"
function AdminBlog() {
  const { blogs } = useSelector((state) => state.blogs);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: editingBlog?.title || "",
      date: editingBlog?.date || "",
      description: editingBlog?.description || "",
      image: null,
    },
    validationSchema: blogSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("date", values.date);
      formData.append("description", values.description);
      if (values.image) {
        formData.append("image", values.image);
      }

      if (editingBlog) {
        await dispatch(editBlog({ id: editingBlog._id, data: formData }));
      } else {
        await dispatch(addBlog(formData));
      }

      setShowModal(false);
      setEditingBlog(null);
      formik.resetForm();
    }
  });

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this blog?")) {
      dispatch(deleteBlog(id));
    }
  };

  return (
    <section id='admin'>
      <div className="mycontainer">
        <div className="productadminbtn">
        <Button  className="productaddbtn" onClick={() => { setShowModal(true); setEditingBlog(null); formik.resetForm(); }}>
          <FaPlus /> Add Blog
        </Button>
      <Link to="/admin" className='admin-link-button'>Manage Product</Link>
        </div>
        <div className="adminproductsbox">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Date</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                blogs.map(b => (
                  <tr key={b._id}>
                    <td><div className="adminimagebox"><img src={`http://localhost:5000/${b.image}`} alt="" width="50" /></div></td>
                    <td>{b.title}</td>
                    <td>{b.date}</td>
                    <td>{b.description.slice(0, 30)}...</td>
                    <td>
                      <Button className='edit-btn' onClick={() => handleEdit(b)}><FaEdit /></Button>
                      <Button className='delete-btn' onClick={() => handleDelete(b._id)}><FaTrash /></Button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
  <BlogModal
    title={editingBlog ? "Edit Blog" : "Add Blog"}
    onClose={() => { setShowModal(false); setEditingBlog(null); }}
    formik={formik}
  />
)}
    </section>
  );
}

export default AdminBlog;