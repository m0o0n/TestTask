import { IRegisterFormValues } from "@/types/auth/register";
import { useFormContext } from "react-hook-form";
import FormTextField from "../shared/FormTextField";
import PasswordInput from "../shared/PasswordInput";

const RegisterFirstStep = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IRegisterFormValues>();
  return (
    <>
      <FormTextField<IRegisterFormValues>
        type="email"
        name="email"
        label={"Email"}
        control={control}
        errorMessage={errors.email?.message}
        sx={{ marginTop: "16px" }}
      />
      <FormTextField<IRegisterFormValues>
        type="text"
        name="firstName"
        label={"First Name"}
        control={control}
        errorMessage={errors.firstName?.message}
        sx={{ mt: "16px" }}
      />
      <FormTextField<IRegisterFormValues>
        type="text"
        name="lastName"
        label={"Last Name"}
        control={control}
        errorMessage={errors.lastName?.message}
        sx={{ marginTop: "16px" }}
      />

      <PasswordInput<IRegisterFormValues>
        name="password"
        label={"Password"}
        control={control}
        autoComplete="current-password"
        errorMessage={errors.password?.message}
        helper="Must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit"
        sx={{ marginTop: "16px" }}
      />

      <PasswordInput<IRegisterFormValues>
        name="confirmPassword"
        label={"Confirm Password"}
        control={control}
        autoComplete="current-password"
        errorMessage={errors.confirmPassword?.message}
        sx={{ marginTop: "16px" }}
      />
    </>
  );
};

export default RegisterFirstStep;
