"use client";
import { IRegisterFormValues } from "@/types/auth/register";
import { registerSchema } from "@/validations/registerSchema"; // Verify this path
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import SubmitButton from "../shared/SubmitButton";

import theme from "@/theme/theme";
import { useTranslation } from "react-i18next";

import BackButton from "../shared/BackButton";
import RegisterFirstStep from "./RegisterFirstStep";
import RegisterSecondStep from "./RegisterSecondStep";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const stepFields: Record<number, (keyof IRegisterFormValues)[]> = {
  0: ["email", "firstName", "lastName", "password", "confirmPassword"],
};

const RegisterForm = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const form = useForm<IRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
    defaultValues: {
      subscribe: false,
    },
  });
  const { trigger, handleSubmit, formState } = form;
  const [registrationProgress, setRegistrationProgress] = useState(0);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentStepFields = stepFields[registrationProgress];

    const isValid = await trigger(currentStepFields);

    if (!isValid) return;

    if (registrationProgress === 0) {
      setRegistrationProgress(1);
    } else {
      handleSubmit((data) => {
        console.log("Form data", data);
      })();
    }
  };

  const handleBack = () => {
    registrationProgress === 0
      ? router.push("/admin/login")
      : setRegistrationProgress(0);
  };

  return (
    <Box
      sx={{
        maxWidth: "451px",
        width: "100%",

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        zIndex: 1,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontSize: { xs: "24px", md: "34px" },
          fontWeight: 600,
          color: theme.palette.primary.dark,
          marginBottom: "40px",
        }}
      >
        Register
      </Typography>
      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <BackButton handleBack={handleBack} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              px: "5px",
              py: "10px",
              mt: "16px",
            }}
          >
            {registrationProgress === 0 ? (
              <RegisterFirstStep />
            ) : (
              <RegisterSecondStep />
            )}
          </Box>

          <Box sx={{ margin: "16px 0px" }}>
            <SubmitButton
              title={"Next"}
              loading={form.formState.isSubmitting}
            />
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
};

export default RegisterForm;
