import React from "react";
import { SxProps, TextField, TextFieldProps, Theme } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface IFormTextFieldProps<T extends FieldValues> {
  type: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  errorMessage?: string;
  helper?: string;
  placeholder?: string;
  disabled?: boolean;
  variant?: TextFieldProps["variant"];
  sx?: SxProps<Theme>;
}

const FormTextField = <T extends FieldValues>({
  type,
  name,
  label,
  control,
  errorMessage,
  helper,
  placeholder,
  disabled = false,
  variant = "outlined",
  sx,
}: IFormTextFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    defaultValue={"" as any}
    render={({ field }) => (
      <TextField
        {...field}
        fullWidth
        type={type}
        label={label}
        variant={variant}
        placeholder={placeholder}
        error={!!errorMessage}
        helperText={errorMessage || helper}
        disabled={disabled}
        sx={sx}
      />
    )}
  />
);

export default FormTextField;
