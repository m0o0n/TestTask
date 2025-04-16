import React from "react";
import { Button, SxProps, Theme } from "@mui/material";

interface ILinkButtonProps {
  link: string;
  title: string;
  sx?: SxProps<Theme>;
}

const LinkButton = ({ link, title, sx }: ILinkButtonProps) => (
  <Button
    href={link}
    variant="text"
    sx={{
      textTransform: "capitalize",
      px: "8px",
      py: "6px",
      ...sx,
    }}
  >
    {title}
  </Button>
);

export default LinkButton;
