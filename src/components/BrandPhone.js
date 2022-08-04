import React from "react";

import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Skeleton,
  styled,
  Typography,
} from "@mui/material";

import Axios from "../config/Axios";
import BrandsItem from "./BrandsItem";

import { Link } from "react-router-dom";

const BrandPhone = () => {
  const [Brands, setBrands] = useState([]);
  const Load = () => {
    return (
      <Skeleton
        sx={{
          bgcolor: "grey.900",
          borderRadius: "10px",
        }}
        variant="rectangular"
        height={"25vh"}
      />
    );
  };
  const getBrands = async () => {
    let response = await Axios.get("/brands");

    setBrands(response.data.data);
  };

  useEffect(() => {
    getBrands();
  }, []);
  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          fontSize={36}
          fontWeight="bold"
          sx={{ marginBottom: "15px", marginTop: "15px" }}
        >
          Brands Phone
        </Typography>

        <Link
          style={{
            // backgroundColor: "#1A2027",
            textDecoration: "none",
          }}
          to={"/brandsAll"}
        >
          <Typography
            fontSize={20}
            fontWeight="bold"
            sx={{ marginBottom: "10px", marginTop: "15px" }}
          >
            All brands phone...
          </Typography>
        </Link>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        {/* <Container> */}
        <Grid container spacing={6}>
          {Brands.length === 0 ? (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <Load />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Load />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Load />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Load />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Load />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Load />
              </Grid>
            </>
          ) : (
            Brands.map((dt, index) => {
              if (index < 6) {
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
              }
            })
          )}
        </Grid>
        {/* </Container> */}
      </Box>
    </div>
  );
};

export default BrandPhone;
