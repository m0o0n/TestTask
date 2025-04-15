import { createTheme, PaletteOptions } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(32, 85, 255)",
      dark: "rgb(16, 24, 40);",  
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
  }
});

export default theme;
