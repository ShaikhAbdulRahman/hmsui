import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:1010/docs");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={6}>
          <h3>{item.name}</h3>
        </Grid>
      ))}
    </Grid>
  );
};

export default Home;
