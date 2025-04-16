import React, { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { InputAdornment, SxProps, TextField, Theme } from "@mui/material";
import PasswordEyeButton from "./PasswordEyeButton";

interface IPasswordInputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  control: Control<T>;
  errorMessage?: string;
  autoComplete?: string;
  helper?: string;
  sx?: SxProps<Theme>;
}

const PasswordInput = <T extends FieldValues>({
  name,
  label,
  control,
  errorMessage,
  autoComplete,
  helper,
  sx,
}: IPasswordInputProps<T>) => {
  const [isPasswordShow, setIsPasswordShow] = useState<boolean>(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          type={isPasswordShow ? "text" : "password"}
          label={label}
          error={!!errorMessage}
          autoComplete={autoComplete}
          helperText={errorMessage || helper}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end" sx={{ margin: 0 }}>
                  <PasswordEyeButton
                    isPasswordShow={isPasswordShow}
                    handlePasswordShow={() =>
                      setIsPasswordShow(!isPasswordShow)
                    }
                  />
                </InputAdornment>
              ),
            },
          }}
          sx={sx}
        />
      )}
    />
  );
};

export default PasswordInput;
