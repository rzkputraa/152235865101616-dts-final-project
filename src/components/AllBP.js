import React from "react";

import { useEffect, useState } from "react";
import { Box, Container, Grid, Paper, styled, Typography } from "@mui/material";

import Axios from "../config/Axios";
import BrandsItem from "./BrandsItem";

import { Link } from "react-router-dom";

const AllBP = () => {
  const [Brands, setBrands] = useState([]);

  const getBrands = async () => {
    let response = await Axios.get("/brands");

    console.log(response.data.data);
    setBrands(response.data.data);
    // setTimeout(() => {
    //   console.log(NewDevices);
    // }, 1000);
  };

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div style={{ marginBottom: "40px", marginTop: "80px" }}>
      <Typography
        fontSize={36}
        fontWeight="bold"
        sx={{ marginBottom: "15px", marginTop: "15px" }}
      >
        All Brands Phone
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        {/* <Container> */}
        <Grid container spacing={6}>
          {Brands.length === 0
            ? console.log("loading")
            : Brands.map((dt, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{
                      "&:hover": {
                        opacity: [0.9, 0.8, 0.7],
                        transition: "all 0.3s ease-in-out",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <BrandsItem height="25vh" width="20vw" Det={dt} />
                  </Grid>
                );
              })}
        </Grid>
        {/* </Container> */}
      </Box>
    </div>
  );
};

export default AllBP;
