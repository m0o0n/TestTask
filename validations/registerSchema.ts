import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup
    .string()
    .required("first name is a required field")
    .min(2, "first name must be at least 2 characters")
    .max(20, "first name must be at most 20 characters"),
  lastName: yup
    .string()
    .required("last name is a required field")
    .min(2, "last name must be at least 2 characters")
    .max(20, "last name must be at most 20 characters"),
  email: yup
    .string()
    .required("email is a required field")
    .email("email must be a valid email"),
  password: yup
    .string()
    .required("password is a required field")
    .min(6, "password must be at least 6 characters"),
  confirmPassword: yup
    .string()
    .required("confirm password is a required field")
    .oneOf([yup.ref("password")], "passwords must match"),

  company: yup.string().required("company is a required field"),
  phone: yup.string().required("phone is a required field"),
  country: yup.string().required("required field"),
  source: yup.string().required("required field"),
  service: yup.string().required("required field"),
  subscribe: yup.boolean().required("required field"),
  terms: yup
    .boolean()
    .required("required field")
    .oneOf([true], "You must accept the terms and conditions"),
});
