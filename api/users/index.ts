import { IRegisterFormValues } from "@/types/auth/register";
import { axiosInstance } from "../axios";

export const registerUser = async (user: IRegisterFormValues) => {
const { email, firstName, lastName, password, company, phone, country, source, service } = user;
  const res = await axiosInstance.post("users", { name: firstName + " " + lastName, email, firstName, lastName, password, company, phone, country, source, service });

  return res;
};
