import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/styles";
import BoxLarge from "../../assets/box-large.png";
import Logo from "../../assets/logo.jpg";
import Box from "@mui/material/Box";
import classes from "./SectionLeft.module.css";

const SectionLeft = () => {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={3}
      sx={{
        bgcolor: theme.palette.secondary.main,
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          color: "#fff",
          width: "100%",
          top: 0,
          left: 0,
          p: 1,
          pt: 3,
          gap: '1rem',
          justifyContent: "center",
        }}
      >
        <Typography variant={'h6'}><img src={Logo} height="20px" width="20px" />
        RELATIVE
        </Typography>
      </Box>

      <Box>
        <img className={classes.image} src={BoxLarge}/>
      </Box>
    </Grid>
  );
};

export default SectionLeft;
