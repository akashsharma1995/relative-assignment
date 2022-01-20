import { createTheme } from "@mui/material/styles";

const primaryMain = "#0a090d";
const secondaryMain = "#181533";
const white = "#fff";
const textFieldColor = "#2F2C47";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryMain,
    },
    secondary: {
      main: secondaryMain,
    },
  },
  typography: {
    h6: {
      color: "white",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiInputLabel: {
      defaultProps: {
        shrink: true
      },
      styleOverrides: {
        root: {
          color: white,
          "&.Mui-focused": {
            color: "#fff",
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: textFieldColor,
          color: white,
          borderRadius: "12px"
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {      
          marginTop: "1rem",
          "&.Mui-focused": {
            outline: "none",
          },
        }
      }
    }
  },
});

export default theme;
