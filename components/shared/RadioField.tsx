import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormHelperText,
  SxProps,
} from "@mui/material";
import { Controller, Control, FieldValues, Path } from "react-hook-form";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options?: RadioOption[];
  errorMessage?: string;
  sx?: SxProps;
}

const RadioField = <T extends FieldValues>({
  name,
  control,
  label,
  options = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ],
  errorMessage,
  sx,
}: RadioFieldProps<T>) => {
  return (
    <FormControl error={!!errorMessage} sx={sx}>
      <FormLabel>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <RadioGroup row value={value} onChange={onChange}>
            <FormControlLabel value="yes" control={<Radio />} label={"Yes"} />
            <FormControlLabel value="no" control={<Radio />} label={"No"} />
          </RadioGroup>
        )}
      />
      {errorMessage && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default RadioField;
