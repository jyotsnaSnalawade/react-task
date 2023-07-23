import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Task3 = () => {
  const initValues = {
    header: "",
    sectionDetail: "",
  };
  const [data, setData] = useState(initValues);
  const [section, setSection] = useState([]);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSection((prev) => [...prev, data]);
    setData(initValues);
  };
  console.log(data);
  return (
    <Box
      sx={{
        display: "flex",
        width: "70%",
        justifyContent: "space-between",
        margin: "50px auto",
      }}
    >
      <Box
        sx={{
          width: "35%",
          padding: "30px",
          border: "1px solid gray ",
          height: "57vh",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "30px" }}>
          Add Section
        </Typography>
        <TextField
          sx={{ width: "100%" }}
          label="Section Header"
          variant="outlined"
          name="header"
          value={data.header}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "100%", marginTop: "40px" }}
          label="Section Details"
          multiline
          variant="outlined"
          rows={6}
          name="sectionDetail"
          value={data.sectionDetail}
          onChange={handleChange}
        />
        <Button
          sx={{ width: "100%", marginTop: "30px" }}
          variant="contained"
          onClick={handleSubmit}
        >
          Add
        </Button>
      </Box>
      <Box sx={{ width: "50%", padding: "30px", border: "1px solid gray " }}>
        <Accordion sx={{ marginTop: "15px" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Dommy section</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              hic? Voluptas vitae ipsum deserunt quis molestiae qui aspernatur,
              nisi temporibus voluptatibus provident impedit quam laudantium.
            </Typography>
          </AccordionDetails>
        </Accordion>
        {section?.map((item, i) => {
          return (
            <Accordion sx={{ marginTop: "15px" }} key={i}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.header}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.sectionDetail}</Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default Task3;