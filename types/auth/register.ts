import { Maybe } from "yup";

export interface IRegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  company: string;
  phone: string;
  country: string;
  source: string;
  service: string;
  subscribe: boolean;
  terms: boolean;
}
