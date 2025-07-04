import React from 'react';
import { useFormik } from 'formik';
import { registerschema } from '../../../schemas/RegisterSchema';
import './Register.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../../components/utils/Button';

function Register() {
  const submitForm = async (values, action) => {
    const baseUrl = "http://localhost:5000/auth";
    const formData = new FormData();

    formData.append("image", values.image);
    formData.append("name", values.name);
    formData.append("username", values.username);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("confirmPassword", values.confirmPassword);

    try {
      await axios.post(`${baseUrl}/register`, formData);
      action.resetForm();
      toast.success("Regiser successfully please check email");
    } catch (err) {
      toast.error(`${err.response?.data?.message || "Xəta baş verdi!"}`);
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      image: null,
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerschema,
    onSubmit: submitForm,
  });

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="file"
          name="image"
          onChange={(e) => setFieldValue("image", e.target.files[0])}
        />
        {errors.image && touched.image && <div className="error">{errors.image}</div>}

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <div className="error">{errors.name}</div>}

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username && touched.username && <div className="error">{errors.username}</div>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div className="error">{errors.email}</div>}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div className="error">{errors.password}</div>}

        <input
          type="password"
          name="confirmPassword"
          placeholder="ConfirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && touched.confirmPassword && (
          <div className="error">{errors.confirmPassword}</div>
        )}

        <Button className="register-btn" type="submit">Register</Button>
      </form>

    
    </div>
  );
}

export default Register;
