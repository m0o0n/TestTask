import { IRegisterFormValues } from "@/types/auth/register";
import { Box } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import CheckboxField from "../shared/CheckBoxField";
import FormSelect from "../shared/FormSelect";
import FormTextField from "../shared/FormTextField";
import RadioField from "../shared/RadioField";
import "react-phone-input-2/lib/material.css";

const RegisterSecondStep = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<IRegisterFormValues>();
  return (
    <>
      <FormTextField<IRegisterFormValues>
        type="string"
        name="company"
        label={"Company"}
        control={control}
        errorMessage={errors.company?.message}
        sx={{ marginTop: "16px" }}
      />
      <Box sx={{ marginTop: "16px" }}>
        <Controller
          name="phone"
          control={control}
          rules={{ required: "Phone is required" }}
          render={({ field: { onChange, value }, fieldState: { error } }) => (
            <>
              <PhoneInput
                country={"us"}
                value={value}
                onChange={onChange}
                inputStyle={{
                  width: "100%",
                }}
              />
              {error && <p style={{ color: "red" }}>{error.message}</p>}
            </>
          )}
        />
      </Box>

      <FormSelect<IRegisterFormValues>
        type="string"
        name="country"
        label={"Country"}
        control={control}
        errorMessage={errors.country?.message}
        sx={{ marginTop: "16px" }}
        options={[
          { value: "USA", label: "USA" },
          { value: "Canada", label: "Canada" },
        ]}
      />

      <FormSelect<IRegisterFormValues>
        type="string"
        name="source"
        label={"How did you hear about us?"}
        control={control}
        errorMessage={errors.source?.message}
        sx={{ marginTop: "16px" }}
        options={[
          { value: "USA", label: "USA" },
          { value: "Canada", label: "Canada" },
        ]}
      />

      <RadioField<IRegisterFormValues>
        name="service"
        label="Are you a Matterport service provider?"
        control={control}
        errorMessage={errors.service?.message}
        sx={{ marginTop: "16px" }}
      />

      <CheckboxField<IRegisterFormValues>
        name="subscribe"
        label="Subscribe to our newsletter"
        control={control}
        errorMessage={errors.subscribe?.message}
        sx={{ marginTop: "16px" }}
      />

      <CheckboxField<IRegisterFormValues>
        name="terms"
        label="By registering, I agree to Treedis Terms of Use , Cookie Policy and Privacy Policy."
        control={control}
        errorMessage={errors.terms?.message}
        sx={{ marginTop: "16px" }}
      />
    </>
  );
};

export default RegisterSecondStep;
