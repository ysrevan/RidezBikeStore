import { useFormik } from "formik";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { resetschema } from "../../../schemas/ResetSchema";
import {toast} from 'react-toastify'

const Resetpassword = () => {
  const baseUrl = `http://localhost:5000/auth`;
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");

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
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      password: "",
      confirmpassword: "",
    },
    onSubmit: submitForm,
    validationSchema: resetschema,
  });

  return (
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
          <div className="text-danger">{errors.password}</div>
          <input
            type="password"
            name="password"
            placeholder="Enter new password"
            className="form-control"
            onChange={handleChange}
            value={values.password}
          />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <div className="text-danger">{errors.confirmpassword}</div>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm new password"
            className="form-control"
            onChange={handleChange}
            value={values.confirmpassword}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Reset
        </button>
      </form>
    </div>
  );
};

export default Resetpassword;
