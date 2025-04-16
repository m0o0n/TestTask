import { Box } from "@mui/material";

interface IAuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        ":before": {
          content: '""',
          position: "absolute",
          top: "0px",
          right: "0px",
          width: "70%",
          height: "100%",
          background: "rgb(247, 247, 247)",
          transformOrigin: "center bottom",
          transform: "skew(-13.9deg, 0deg)",
          zIndex: -1,
        },
      }}
    >
      {children}
    </Box>
  );
};

export default AuthLayout;
