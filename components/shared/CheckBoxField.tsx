import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  SxProps,
} from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface CheckboxFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: React.ReactNode;
  errorMessage?: string;
  sx?: SxProps;
}

const CheckboxField = <T extends FieldValues>({
  name,
  control,
  label,
  errorMessage,
  sx,
}: CheckboxFieldProps<T>) => {
  return (
    <FormControl error={!!errorMessage} sx={sx}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={
              <Checkbox
                {...field}
                checked={!!field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
            }
            label={label}
          />
        )}
      />
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default CheckboxField;
