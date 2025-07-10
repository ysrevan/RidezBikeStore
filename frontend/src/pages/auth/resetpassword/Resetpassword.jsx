// import { useFormik } from "formik";
// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import axios from "axios";
// import { resetschema } from "../../../schemas/ResetSchema";
// import {toast} from 'react-toastify'
// import { Helmet } from "react-helmet";

// const Resetpassword = () => {
//   const baseUrl = `http://localhost:5000/auth`;
//   const navigate = useNavigate();
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const token = searchParams.get("token");

//   const submitForm = async (values, actions) => {
//     try {
//       const { password } = values;

//       const result = await axios.post(
//         `${baseUrl}/resetpassword`,
//         { password, token },
//         { withCredentials: true }
//       );

//       if (result.status === 200) {
//         toast.success("Password reset successfully");
//         actions.resetForm();
//         navigate("/login");
//       } else {
//         toast.error("Password reset failed");
//       }
//     } catch (error) {
//       console.log("Password reset failed:", error);
//     }
//   };

//   const { values, handleChange, handleSubmit, errors } = useFormik({
//     initialValues: {
//       password: "",
//       confirmpassword: "",
//     },
//     onSubmit: submitForm,
//     validationSchema: resetschema,
//   });

//   return (
//     <>
//     <Helmet>
//         <title>Reset Password</title>
//         <meta name="description" content="Reset Password application" />
//     </Helmet>
//     <div className="container">
//       <form
//         className="form"
//         onSubmit={(e) => {
//           e.preventDefault();
//           handleSubmit();
//         }}
//       >
//         <h3>Reset Password</h3>

//         <div className="form-group">
//           <label>New Password</label>
//           <div className="text-danger">{errors.password}</div>
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter new password"
//             className="form-control"
//             onChange={handleChange}
//             value={values.password}
//           />
//         </div>

//         <div className="form-group">
//           <label>Confirm Password</label>
//           <div className="text-danger">{errors.confirmpassword}</div>
//           <input
//             type="password"
//             name="confirmpassword"
//             placeholder="Confirm new password"
//             className="form-control"
//             onChange={handleChange}
//             value={values.confirmpassword}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Reset
//         </button>
//       </form>
//     </div>
//     </>
//   );
// };

// export default Resetpassword;


import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { resetschema } from "../../../schemas/ResetSchema";
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./Resetpassword.css"

const Resetpassword = () => {
  const baseUrl = `http://localhost:5000/auth`;
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const submitForm = async (values, actions) => {
    try {
      const { password } = values;

      const result = await axios.post(
        `${baseUrl}/resetpassword`,
        { password, token },
        { withCredentials: true }
      );

      if (result.status === 200) {
        toast.success("Password reset successfully");
        actions.resetForm();
        navigate("/login");
      } else {
        toast.error("Password reset failed");
      }
    } catch (error) {
      console.log("Password reset failed:", error);
      toast.error(error.response?.data?.message || "Xəta baş verdi!");
    }
  };

  const { values, handleChange, handleSubmit, errors, touched, handleBlur } = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    onSubmit: submitForm,
    validationSchema: resetschema,
  });

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
        <meta name="description" content="Reset Password application" />
      </Helmet>
      <div className="container">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <h3>Reset Password</h3>

         
          <div className="form-group">
            <label>New Password</label>
            <div className="text-danger">{touched.password && errors.password}</div>
            <div className="password-input-wrapper" style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter new password"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                style={{ paddingRight: '40px' }}
              />
              <span
                onClick={() => setShowPassword(prev => !prev)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#888',
                  userSelect: 'none',
                }}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

        
          <div className="form-group">
            <label>Confirm Password</label>
            <div className="text-danger">{touched.confirmpassword && errors.confirmpassword}</div>
            <div className="password-input-wrapper" style={{ position: 'relative' }}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmpassword"
                placeholder="Confirm new password"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmpassword}
                style={{ paddingRight: '40px' }}
              />
              <span
                onClick={() => setShowConfirmPassword(prev => !prev)}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  color: '#888',
                  userSelect: 'none',
                }}
                aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Resetpassword;

