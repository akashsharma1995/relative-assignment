import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import MobileDateTimePicker from "@mui/lab/MobileDateTimePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Avatar from "@mui/material/Avatar";
import CustomInput from "./FormInput";
import Logo from "../../assets/logo.jpg";
import Btc from "../../assets/btc.png";
import Matic from "../../assets/matic.png";
import classes from "./FormFields.module.css";

const InputFieldsContainer = (props) => {
  return (
    <Box className={classes["input-fields-cont"]}>
      <InfoOutlinedIcon className={classes["info-icon"]} />
      {props.children}
    </Box>
  );
};

const FormFields = ({ formData, setFormData, handleChange }) => {
  return (
    <div>
      <InputFieldsContainer>
        <Avatar
          alt="logo"
          src={Logo}
          sx={{ height: 32, width: 32, position: "absolute" }}
          className={classes.avatar}
        />
        <Box
          className={classes["input-wrapper"]}
          sx={{ width: "50%", pr: "2rem" }}
          borderRight="1px solid #fff"
        >
          <FormControl variant="standard">
            <InputLabel id="demo-customized-select-label">Token 01</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={"BTC"}
              required
              name="token_1"
              value={formData.token_1}
              onChange={handleChange}
              input={
                <CustomInput
                  startAdornment={
                    <img className={classes.adornment} src={Btc} />
                  }
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"BTC"}>BTC</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{ width: "50%", pl: "2rem" }}
          className={classes["input-wrapper"]}
        >
          <FormControl variant="standard">
            <InputLabel id="demo-customized-select-label">Token 02</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              value={formData.token_2}
              required
              name="token_2"
              onChange={handleChange}
              input={
                <CustomInput
                  startAdornment={
                    <img className={classes.adornment} src={Matic} />
                  }
                />
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"MATIC"}>MATIC</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </InputFieldsContainer>
      <InputFieldsContainer>
        <Box className={classes["input-wrapper"]} sx={{ width: "55%" }}>
          <FormControl variant="standard" className={classes.date}>
            <InputLabel shrink htmlFor="starts-on">
              Starts On
            </InputLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDateTimePicker
                required
                name="starts_on"
                value={formData.starts_on}
                inputFormat="hh:mm a | MMM dd, yyyy"
                onChange={(value) =>
                  setFormData({ ...formData, starts_on: value })
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{ className: classes.date }}
                  />
                )}
              />
            </LocalizationProvider>
          </FormControl>
        </Box>
        <Box className={classes["input-wrapper"]} sx={{ width: "45%" }}>
          <FormControl variant="standard">
            <InputLabel htmlFor="lot-duration">Lot Duration</InputLabel>
            <CustomInput
              name="lot_duration"
              required
              value={formData.lot_duration}
              onChange={handleChange}
              id="lot-duration"
            />
          </FormControl>
        </Box>
      </InputFieldsContainer>

      <InputFieldsContainer>
        <Box className={classes["input-wrapper"]} sx={{ width: "55%" }}>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="initial-deposit">
              Initial Deposit
            </InputLabel>
            <CustomInput
              type="number"
              name="initial_deposit"
              value={formData.initial_deposit}
              required
              onChange={handleChange}
              id="initial-deposit"
            />
          </FormControl>
        </Box>
      </InputFieldsContainer>
    </div>
  );
};

export default FormFields;
