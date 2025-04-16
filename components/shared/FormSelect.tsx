import {
  MenuItem,
  Select,
  SxProps,
  TextFieldProps,
  Theme,
} from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

interface IFormSelectProps<T extends FieldValues> {
  type: string;
  name: Path<T>;
  label: string;
  control: Control<T>;
  errorMessage?: string;
  disabled?: boolean;
  variant?: TextFieldProps["variant"];
  sx?: SxProps<Theme>;
  options?: Array<{ value: string; label: string }>;
}

const SelectIcon = () => (
  <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="far"
    data-icon="angle-down"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    font-size="18px"
    width={13.5}
    height={18}
  >
    <path
      fill="currentColor"
      d="M360.5 217.5l-152 143.1C203.9 365.8 197.9 368 192 368s-11.88-2.188-16.5-6.562L23.5 217.5C13.87 208.3 13.47 193.1 22.56 183.5C31.69 173.8 46.94 173.5 56.5 182.6L192 310.9l135.5-128.4c9.562-9.094 24.75-8.75 33.94 .9375C370.5 193.1 370.1 208.3 360.5 217.5z"
    ></path>
  </svg>
);

const FormSelect = <T extends FieldValues>({
  type,
  name,
  label,
  control,
  errorMessage,
  disabled = false,
  variant = "outlined",
  sx,
  options,
}: IFormSelectProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={"" as any}
      render={({ field }) => (
        <Select
          {...field}
          fullWidth
          type={type}
          label={label}
          variant={variant}
          error={!!errorMessage}
          disabled={disabled}
          sx={sx}
          //   IconComponent={SelectIcon}
        >
          {options?.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  );
};

export default FormSelect;
