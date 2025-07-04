// import * as yup from 'yup';

// export let registerschema = yup.object().shape({
//     name: yup.string().min(3).required(),
//     username:  yup.string().required().lowercase().trim(),
//     email: yup.string().required().email(),
//     password: yup.string().required().matches(
//        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//       ),
//     confirmpassword: yup.string().required()
//     .oneOf([yup.ref("password"), null], "Passwords must match"),
//   });

import * as Yup from "yup";

export const registerschema = Yup.object({
  image: Yup.mixed().required("Image is required"),
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(30, "Name must be at most 30 characters")
    .required("Name is required"),
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(30, "Username must be at most 30 characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});
