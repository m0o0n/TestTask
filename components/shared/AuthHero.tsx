"use client";

import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import logo from "@/public/favicon.png";

const AuthHero = () => {
  const theme = useTheme();

  const heroTextStyle = {
    fontWeight: 500,
    fontSize: { xs: "50px", md: "62px" },
    lineHeight: { xs: "70px", md: "84px" },
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Image width={35} height={50} alt="logo" src={logo} />

      <Typography sx={{ ...heroTextStyle, my: "40px" }}>
        Take{" "}
        <Typography
          component="span"
          sx={{
            ...heroTextStyle,
            display: "inline-block",
            px: 1,
            borderRadius: "10px",
            backgroundColor: theme.palette.primary.main,
            color: "#fff",
          }}
        >
          reality
        </Typography>
        <br />
        to the next
        <br />
        level
      </Typography>
    </Box>
  );
};

export default AuthHero;
