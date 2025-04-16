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

const RegisterForm = () => {
  const { t } = useTranslation();
  const form = useForm<IRegisterFormValues>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
    defaultValues: {
      subscribe: false,
    },
  });

  const onSubmit = async (data: any) => {
    console.log("Register data", data);
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <BackButton handleBack={() => console.log("back")} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              px: "5px",
              py: "10px",
              mt: "16px",
            }}
          >
            <RegisterFirstStep />
            <RegisterSecondStep />
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
