import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/styles";
import FormComp from "./FormComp";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CancelIcon from "@mui/icons-material/Cancel";
import Box from "@mui/material/Box";

const SectionRight = () => {
  const theme = useTheme();
  
  return (
    <Grid
      item
      xs={9}
      sx={{ minHeight: "100vh", bgcolor: theme.palette.primary.main }}
    >
      <Box
        sx={{
          width: "80%",
          pt: "4rem",
          mb: "1rem",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button startIcon={<ArrowBackIosNewIcon />}>Back</Button>
        <Button endIcon={<CancelIcon />}>Close</Button>
      </Box>
      <FormComp />
    </Grid>
  );
};

export default SectionRight;
