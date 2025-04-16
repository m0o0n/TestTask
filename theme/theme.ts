import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(32, 85, 255)",
      dark: "rgb(16, 24, 40)",
      light: "rgb(102, 112, 133)",
    },

    error: {
      main: "rgb(239, 83, 80)",
    },
  },

  typography: {
    fontFamily: "Codecpro, sans-serif",
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        text: ({ theme }) => ({
          fontSize: "0.875rem",
          lineHeight: 1.75,
          padding: "6px 8px",
          color: theme.palette.primary.main,
        }),

        contained: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: "#fff",
          transition: "all 0.3s linear",
          textTransform: "initial",
          "&:hover": {
            boxShadow:
              "rgba(102, 112, 133, 0.2) 0px 2px 4px -1px, rgba(102, 112, 133, 0.14) 0px 4px 5px 0px, rgba(102, 112, 133, 0.12) 0px 1px 10px 0px",
          },
        }),
      },
    },
  },
});

export default theme;
