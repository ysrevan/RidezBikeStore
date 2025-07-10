// import React from 'react';
// import { useFormik } from 'formik';
// import './Login.css';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { loginschema } from '../../../schemas/LoginSchema';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../../redux/userSlice';
// import Button from '../../../components/utils/Button';
// import { Link, useNavigate } from "react-router-dom";
// import { Helmet } from 'react-helmet';

// function Login() {
//   const baseUrl = "http://localhost:5000/auth";
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const submitForm = async (values, action) => {
//     try {
//       const isAdmin = values.username === "RidezAdmin"; 
//       const endpoint = isAdmin
//         ? `${baseUrl}/admin/login`
//         : `${baseUrl}/login`;
      
//       const res = await axios.post(endpoint, values, { withCredentials: true });

//       if (res.status === 200) {
//         dispatch(setUser(res.data.existUser));  
//         toast.success("Login successfully!");
//         navigate(isAdmin ? "/admin" : "/");
//       } else {
//         toast.error("Login failed");
//       }

//       action.resetForm();
//     } catch (err) {
//       toast.error(`${err.response?.data?.message || "Xəta baş verdi!"}`);
//     }
//   };

//   const {
//     values,
//     handleChange,
//     handleSubmit,
//     errors,
//     touched,
//     handleBlur,
//   } = useFormik({
//     initialValues: {
//       username: "",
//       password: "",
//     },
//     onSubmit: submitForm,
//     validationSchema: loginschema,
//   });

//   return (
//     <>
//       <Helmet>
//         <title>Login</title>
//         <meta name="description" content="Login application" />
//       </Helmet>

//       <div className="login-page">
//         <div className="register-container">
//           <h2>Login</h2>
//           <form onSubmit={handleSubmit} noValidate>
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={values.username}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.username && touched.username && <div className="error">{errors.username}</div>}

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={values.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//             {errors.password && touched.password && <div className="error">{errors.password}</div>}

//             <p className="forgot-link">
//               <Link to="/forgotpassword">Forgot your password?</Link>
//             </p>

//             <Button className="login-btn" type="submit">Login</Button>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useFormik } from 'formik';
import './Login.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginschema } from '../../../schemas/LoginSchema';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/userSlice';
import Button from '../../../components/utils/Button';
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

function Login() {
  const baseUrl = "http://localhost:5000/auth";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const submitForm = async (values, action) => {
    try {
      const isAdmin = values.username === "RidezAdmin"; 
      const endpoint = isAdmin
        ? `${baseUrl}/admin/login`
        : `${baseUrl}/login`;
      
      const res = await axios.post(endpoint, values, { withCredentials: true });

      if (res.status === 200) {
        dispatch(setUser(res.data.existUser));  
        toast.success("Login successfully!");
        navigate(isAdmin ? "/admin" : "/");
      } else {
        toast.error("Login failed");
      }

      action.resetForm();
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
    onSubmit: submitForm,
    validationSchema: loginschema,
  });

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login application" />
      </Helmet>

      <div className="login-page">
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

            <div className="password-input-wrapper" style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                style={{ paddingRight: '40px' }} 
              />
             
              <span className='logineye'
                onClick={() => setShowPassword(prev => !prev)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#888',
                }}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {errors.password && touched.password && <div className="error">{errors.password}</div>}

            <p className="forgot-link">
              <Link to="/forgotpassword">Forgot your password?</Link>
            </p>

            <Button className="login-btn" type="submit">Login</Button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
