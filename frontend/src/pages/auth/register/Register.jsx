import React, { useState } from 'react';
import { useFormik } from 'formik';
import { registerschema } from '../../../schemas/RegisterSchema';
import './Register.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../../components/utils/Button';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      toast.success("Register successfully, please check your email");
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
    <>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Register application" />
      </Helmet>

      <div className="register-page">
        <div className="register-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit} noValidate>
            <input
              id="image"
              type="file"
              name="image"
              className="file-input"
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

          
            <div className="password-input-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className='registereye'
                onClick={() => setShowPassword(prev => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && touched.password && <div className="error">{errors.password}</div>}

           
            <div className="password-input-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className='registereye'
                onClick={() => setShowConfirmPassword(prev => !prev)}
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="error">{errors.confirmPassword}</div>
            )}

            <Button className="register-btn" type="submit">Register</Button>
          </form>

          <p className="text-center mt-4">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
