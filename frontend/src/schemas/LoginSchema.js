import * as Yup from "yup";

export const loginschema = Yup.object({
  username: Yup.string()
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
});