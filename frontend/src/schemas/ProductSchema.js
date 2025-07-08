import * as yup from "yup";

export const productSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup.number().required("Price is required").positive(),
  category: yup.string().required("Category is required"),
  description: yup.string().required("Description is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("fileType", "Only image files allowed", (value) => {
      return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type);
    }),
});
