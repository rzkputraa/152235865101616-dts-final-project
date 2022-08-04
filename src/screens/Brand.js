import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import EachBrand from "../components/EachBrand";
import Main from "../components/Main";
import Axios from "../config/Axios";
import { useParams } from "react-router-dom";
const Brand = () => {
  let { slug } = useParams();
  const [Brands, setBrands] = useState([]);

  const getBrands = async () => {
    let response = await Axios.get("/brands/" + slug);

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
    <Main>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "80px" }}
      >
        <Typography
          fontSize={36}
          fontWeight="bold"
          sx={{ marginBottom: "25px", marginTop: "15px" }}
        >
          {Brands.title}
        </Typography>
      </div>

      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Grid container spacing={6}>
            {Brands.length === 0
              ? console.log("loading")
              : Brands.phones.map((dt, index) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={3}
                      key={index}
                      sx={{
                        "&:hover": {
                          transition: "all 0.3s ease-in-out",
                          transform: "scale(1.09)",
                        },
                      }}
                    >
                      <EachBrand height="45vh" width="5vw" Det={dt} />
                    </Grid>
                  );
                })}
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default Brand;
