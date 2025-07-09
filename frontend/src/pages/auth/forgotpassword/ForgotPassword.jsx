import React from "react";
import { useFormik } from "formik";
import {toast} from 'react-toastify'
import axios from "axios";
import { forgotschema } from "../../../schemas/ForgotSchema";
import { Helmet } from "react-helmet";

const ForgotPassword = () => {
  const baseUrl = `http://localhost:5000/auth`;

  const submitForm = async (values, actions) => {
    try {
      const res = await axios.post(`${baseUrl}/forgotpassword`, values, {
        withCredentials: true,
      });
      if (res.status === 200) {
        toast.success("Check your email to reset your password");
      } else {
        toast.error("Failed to send email");
      }

      actions.resetForm();
    } catch (error) {
      console.error("Forgot password failed:", error);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
    },

    onSubmit: submitForm,
    validationSchema: forgotschema,
  });

  return (
   <>
    <Helmet>
        <title>Forgot Password</title>
        <meta name="description" content="Forgot Password application" />
    </Helmet>
    <div className="container">
      <form
        action=""
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <h3>ForgotPassword</h3>

        <div className="form-group">
          <label htmlFor="username">Email</label>
          <div className="text-danger">{errors.email}</div>
          <input
            placeholder="Enter your email"
            type="text"
            id="email"
            name="email"
            className="form-control"
            onChange={handleChange}
            value={values.email}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
   </>
  );
};

export default ForgotPassword;