import React from "react";
import Grid from "@mui/material/Grid";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

const FormScreen = () => {
  return (
    <Grid container>
      <SectionLeft/>
      <SectionRight/>
    </Grid>
  );
};

export default FormScreen;

