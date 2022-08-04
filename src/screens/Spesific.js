import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Main from "../components/Main";
import Axios from "../config/Axios";
const Spesific = () => {
  let { slug } = useParams();
  const [Phone, setPhone] = useState([]);

  const getPhone = async () => {
    let response = await Axios.get("/" + slug);

    setPhone(response.data.data);
    // console.log(Phone.specifications);
    // setTimeout(() => {
    //   console.log(NewDevices);
    // }, 1000);
  };

  useEffect(() => {
    getPhone();
  }, []);
  return (
    <Main>
      <div style={{ marginTop: "80px", marginBottom: "20px" }}>
        {/* <Container> */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {Phone.phone_name}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {Phone.storage}
            </Typography>
          </CardContent>
        </Box>
        <Card
          sx={{
            display: "flex",
            justifyContent: "space-around",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
          }}
        >
          <Grid container>
            <Grid item xl={6} md={12} sm={12} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                  component="img"
                  sx={{ width: 418, height: 570 }}
                  image={Phone.thumbnail}
                  alt="Phone"
                />
                <ImageList
                  sx={{ width: 500, height: 450 }}
                  cols={3}
                  rowHeight={164}
                >
                  {Phone.length === 0
                    ? console.log("loading")
                    : Phone.phone_images.map((item, ix) => (
                        <ImageListItem key={ix}>
                          <img
                            src={`${item}`}
                            srcSet={`${item}`}
                            loading="lazy"
                          />
                        </ImageListItem>
                      ))}
                </ImageList>
              </Box>
            </Grid>
            <Grid item xl={6} md={12} sm={12} xs={12}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                >
                  <div>
                    {Phone.length === 0
                      ? console.log("loading")
                      : Phone.specifications.map((dt, id) => {
                          return (
                            <Accordion
                              sx={{ backgroundColor: "#c7c9c8" }}
                              key={id}
                            >
                              <AccordionSummary
                                // expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                              >
                                <Typography>{dt.title}</Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <TableContainer component={Paper}>
                                  <Table
                                    sx={{ minWidth: 550 }}
                                    size="small"
                                    aria-label="a dense table"
                                  >
                                    <TableBody>
                                      {dt.specs.map((dtt, idd) => {
                                        return (
                                          <TableRow
                                            key={idd}
                                            sx={{
                                              "&:last-child td, &:last-child th":
                                                { border: 0 },
                                            }}
                                          >
                                            <>
                                              <TableCell
                                                component="th"
                                                scope="row"
                                              >
                                                {dtt.key}
                                              </TableCell>
                                              <TableCell>{dtt.val}</TableCell>
                                            </>
                                          </TableRow>
                                        );
                                      })}
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              </AccordionDetails>
                            </Accordion>
                          );
                        })}
                  </div>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
        {/* </Container> */}
      </div>
    </Main>
  );
};

export default Spesific;
