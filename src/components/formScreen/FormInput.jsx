import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const CustomInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    backgroundColor: "#2F2C47",
    color: "#fff",
    fontWeight: 300,
    fontSize: 16,
    width: "100%",
    padding: "9px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ])
  },
}));

export default CustomInput;