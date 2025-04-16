import { Button } from "@mui/material";

interface IBackButtonProps {
  handleBack: () => void;
}
const BackButton: React.FC<IBackButtonProps> = ({ handleBack }) => (
  <Button
    variant="text"
    onClick={handleBack}
    sx={{
      display: "flex",
      justifyContent: "center",
      textTransform: "capitalize",
      px: "8px",
      py: "6px",
      fontSize: "15px",
      fontWeight: 600,
      width: "fit-content",
      borderRadius: "8px",
      left: "-16px",
    }}
  >
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="far"
      data-icon="arrow-left"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      fontSize="25px"
      width="21px"
      height="25px"
    >
      <path
        fill="currentColor"
        d="M447.1 256c0 13.25-10.76 24.01-24.01 24.01H83.9l132.7 126.6c9.625 9.156 9.969 24.41 .8125 33.94c-9.156 9.594-24.34 9.938-33.94 .8125l-176-168C2.695 268.9 .0078 262.6 .0078 256S2.695 243.2 7.445 238.6l176-168C193 61.51 208.2 61.85 217.4 71.45c9.156 9.5 8.812 24.75-.8125 33.94l-132.7 126.6h340.1C437.2 232 447.1 242.8 447.1 256z"
      ></path>
    </svg>
  </Button>
);

export default BackButton;
