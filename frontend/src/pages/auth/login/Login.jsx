import React from 'react';
import { useFormik } from 'formik';
import './Login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginschema } from '../../../schemas/LoginSchema';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/userSlice';
import Button from '../../../components/utils/Button';
import {useNavigate} from "react-router-dom"

function Login() {

    const baseUrl = "http://localhost:5000/auth";
    const dispatch = useDispatch()
    const navigate = useNavigate()
  const submitForm = async (values, action) => {
  
 

    try {

       

      const res = await axios.post(`${baseUrl}/login`, values);


      if (res.status === 200) {
        dispatch(setUser(res.data))
        toast.success("Login successfully!"); 
      }else{
        toast.error("Login failed")
      }

      action.resetForm();
      navigate("/")
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
  } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit:submitForm,
    validationSchema: loginschema,
    
  });

  return (
    <div className="register-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} noValidate>
      

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
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div className="error">{errors.password}</div>}

       

        <Button className="login-btn" type="submit">Login</Button>
      </form>

    
    </div>
  );
}

export default Login;
