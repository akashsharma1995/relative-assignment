import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import CustomButton from "./CustomButton";
import Box from "@mui/material/Box";
import FormFields from "./FormFields";
import BoxVector from "../../assets/box-vector.png";
import BoxSmall from "../../assets/box-small.png";

const FormComp = () => {
  const [formData, setFormData] = useState({
    token_1: "",
    token_2: "",
    starts_on: "",
    lot_duration: "",
    initial_deposit: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { token_1, token_2, starts_on, lot_duration, initial_deposit } =
      formData;
    if (token_1 && token_2 && starts_on && lot_duration && initial_deposit) {
      console.log(formData);
      console.log("Submission successful");
    } else {
      alert("All fields should be filled");
    }
  };

  return (
    <Box width="50%" margin="auto">
      <Typography
        variant="h6"
        gutterBottom
        component="div"
        display="flex"
        alignItems="center"
        gap=".5rem"
        borderBottom="1px solid #181533"
        pb=".8rem"
        mb="1.5rem"
      >
        <img src={BoxSmall} /> Create Multi User Lot
      </Typography>

      <form onSubmit={submitHandler}>
        <FormFields
          handleChange={handleChange}
          formData={formData}
          setFormData={setFormData}
        />
        <Box sx={{ mt: "2rem", display: "flex", justifyContent: "center" }}>
          <CustomButton type="submit">
            {" "}
            <img src={BoxVector} />
            Create Lot
          </CustomButton>
        </Box>
      </form>
    </Box>
  );
};

export default FormComp;
