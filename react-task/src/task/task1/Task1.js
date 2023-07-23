import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const Task1 = () => {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log(value);
  return (
    <Box
      sx={{
        margin: "50px auto",
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        border: "1px solid gray",
        padding: "30px",
      }}
    >
      <TextField
        sx={{ width: "47%" }}
        id="outlined-basic"
        label="First name"
        variant="outlined"
      />
      <TextField
        sx={{ width: "47%" }}
        id="outlined-basic"
        label="Last name"
        variant="outlined"
      />
      <FormControl sx={{ width: "45%", marginTop: "50px" }}>
        <FormLabel id="radio">How should we contact you?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="radio"
          name="radio"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="phone" control={<Radio />} label="Phone" />
          <FormControlLabel value="email" control={<Radio />} label="Email" />
        </RadioGroup>
      </FormControl>
      <Box
        sx={{ width: "47%", marginTop: "50px", display: value ? "" : "none" }}
      >
        {value === "phone" ? (
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Phone"
            variant="outlined"
          />
        ) : (
          <TextField
            sx={{ width: "100%" }}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
        )}
      </Box>
    </Box>
  );
};

export default Task1;