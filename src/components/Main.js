import { Box, Container, Paper } from "@mui/material";
import React from "react";
import Footer from "./Footer";
import ResAppBar from "./ResAppBar";

const Main = ({ children, ml = "20px", mr = "20px" }) => {
  return (
    <>
      <Paper
        square
        elevation={0}
        sx={{
          minHeight: "100vh",
        }}
      >
        <ResAppBar />
        <Box
          sx={{
            marginLeft: ml,
            marginRight: mr,
          }}
        >
          {children}
        </Box>
        <Footer />
      </Paper>
    </>
  );
};

export default Main;
