import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navitem from "./Navitem";

const Nav = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("http://localhost:1010/navs");
    setData(result.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Navitem item={item} />
      ))}
    </Grid>
  );
};

export default Nav;
