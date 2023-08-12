import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [spl, setSpl] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async () => {
    const isActive = true;
    const payload = {
      name,
      spl,
      isActive,
    }
    await axios.post("http://localhost:1010/adddoctor",payload)
        navigate("/")
  };
  return (
    <Grid container spacing={2} sx={{marginTop:2}}>
      <Grid item xs={4}>
        <TextField onChange={(e)=>setName(e.target.value)} variant="outlined" fullWidth label="Name of Doctor" />
      </Grid>
      <Grid item xs={4}>
        <TextField onChange={(e)=>setSpl(e.target.value)} variant="outlined" fullWidth label="Specialization" />
      </Grid>
      <Grid item xs={4}>
        <Button onClick={handleSubmit} sx={{height:55}} variant="contained" fullWidth>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default AddDoctor;
