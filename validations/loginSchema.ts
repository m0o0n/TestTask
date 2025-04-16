import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("email is a required field")
    .email("email must be a valid email"),

  password: yup
    .string()
    .required("password is a required field")
    .min(6, "password must be at least 6 characters"),
});
