"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box, Typography } from "@mui/material";

import { ILoginFormValues } from "@/types/auth/login";
import { loginSchema } from "@/validations/loginSchema";
import FormTextField from "../shared/FormTextField";
import PasswordInput from "../shared/PasswordInput";
import SubmitButton from "../shared/SubmitButton";
import theme from "@/theme/theme";
import LinkButton from "../shared/LinkButton";

const LoginForm = () => {
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginFormValues>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: ILoginFormValues) => {
    console.log("Login data", data);
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
        {t("form.welcome")} <br />
        {t("form.loginToContinue")}
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <FormTextField<ILoginFormValues>
            type="email"
            name="email"
            label={"Email"}
            control={control}
            errorMessage={errors.email?.message}
            sx={{ marginTop: "16px" }}
          />

          <PasswordInput<ILoginFormValues>
            name="password"
            label={"Password"}
            control={control}
            autoComplete="current-password"
            errorMessage={errors.password?.message}
            sx={{ marginTop: "16px" }}
          />
        </Box>

        <Box sx={{ margin: "16px 0px" }}>
          <SubmitButton title={"Login"} loading={isSubmitting} />
        </Box>

        <Box sx={{ margin: "8px 0px" }}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <LinkButton link="#" title={"Forgot Password?"} />
            <LinkButton link="/admin/register" title={"Create New Account"} />
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default LoginForm;
