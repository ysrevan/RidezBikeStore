import React from 'react';
import './AdminModal.css';

function AdminModal({ title, onClose, formik }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Title */}
          <input
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Title"
          />
          {formik.touched.title && formik.errors.title && (
            <div className="error">{formik.errors.title}</div>
          )}

          {/* Price */}
          <input
            name="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Price"
          />
          {formik.touched.price && formik.errors.price && (
            <div className="error">{formik.errors.price}</div>
          )}

          {/* Category */}
          <input
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Category"
          />
          {formik.touched.category && formik.errors.category && (
            <div className="error">{formik.errors.category}</div>
          )}

          {/* Description */}
          <textarea
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Description"
          ></textarea>
          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}

          {/* Image */}
          <input
            name="image"
            type="file"
            onBlur={formik.handleBlur}
            onChange={(e) => {
              formik.setFieldValue("image", e.currentTarget.files[0]);
            }}
          />
          {formik.touched.image && formik.errors.image && (
            <div className="error">{formik.errors.image}</div>
          )}

          {/* Buttons */}
          <button type="submit">Submit</button>
          <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AdminModal;
