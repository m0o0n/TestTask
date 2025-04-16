import React, { FC } from "react";
import { Button } from "@mui/material";

interface ISubmitButtonProps {
  title: string;
  loading: boolean;
}

const SubmitButton: FC<ISubmitButtonProps> = ({ title, loading }) => (
  <Button
    variant="contained"
    fullWidth
    loading={loading}
    type="submit"
    sx={{
      fontSize: "15px",
      fontWeight: 600,
      height: "56px",
      py: "8px",
      px: "22px",
      borderRadius: "8px",
    }}
  >
    {title}
  </Button>
);

export default SubmitButton;
