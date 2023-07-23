import {
  Box,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
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

      <FormControl sx={{ width: "47%", marginTop: "50px" }}>
        <InputLabel id="select">How should we contact you?</InputLabel>
        <Select
          labelId="select"
          id="select"
          value={value}
          label="How should we contact you?"
          onChange={handleChange}
        >
          <MenuItem value={"phone"}>Phone</MenuItem>
          <MenuItem value={"email"}>Email</MenuItem>
        </Select>
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