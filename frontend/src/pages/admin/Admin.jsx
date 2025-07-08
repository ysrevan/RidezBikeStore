import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, addProduct, editProduct, deleteProduct } from '../../redux/shopproductSlice';
import { useFormik } from 'formik';
import { productSchema } from '../../schemas/ProductSchema';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Button from '../../components/utils/Button';
import AdminModal from '../../components/utils/AdminModal';
import "./Admin.css";
import { Link } from "react-router-dom"

function Admin() {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      title: editingProduct?.title || "",
      price: editingProduct?.price || "",
      category: editingProduct?.category || "",
      description: editingProduct?.description || "",
      image: null,
    },
    validationSchema: productSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("price", values.price);
      formData.append("category", values.category);
      formData.append("description", values.description);
      if (values.image) {
        formData.append("image", values.image);
      }

      if (editingProduct) {
        await dispatch(editProduct({ id: editingProduct._id, data: formData }));
      } else {
        await dispatch(addProduct(formData));
      }

      setShowModal(false);
      setEditingProduct(null);
      formik.resetForm();
    }
  });

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <section id='admin'>
      <div className="mycontainer">
        <Button onClick={() => { setShowModal(true); setEditingProduct(null); formik.resetForm(); }}>
          <FaPlus /> Add Product
        </Button>
        <Link to="/adminblog" className="admin-link-button">Manage Blogs</Link>

        <div className="adminproductsbox">
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                products.map(p => (
                  <tr key={p._id}>
                    <td><div className="adminimagebox"><img src={`http://localhost:5000/${p.image}`} alt="" width="50" /></div></td>
                    <td>{p.title}</td>
                    <td>{p.category}</td>
                    <td>{p.description.slice(0, 30)}...</td>
                    <td>${p.price}</td>
                    <td>
                      <button onClick={() => handleEdit(p)}><FaEdit /></button>
                      <button onClick={() => handleDelete(p._id)}><FaTrash /></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <AdminModal
          title={editingProduct ? "Edit Product" : "Add Product"}
          onClose={() => { setShowModal(false); setEditingProduct(null); }}
          formik={formik}
        />
      )}
    </section>
  );
}

export default Admin;
