import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .required("User Name is required")
    .defined("User Name is required"),
  password: yup
    .string()
    .required("Password is required")
    .defined("Password is required"),
});
