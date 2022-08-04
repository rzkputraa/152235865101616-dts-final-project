import { Box, Card, Container, Grid, Paper, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "../config/Axios";
import ResAppBar from "../components/ResAppBar";
import Main from "../components/Main";

function Search() {
  const { cari } = useParams();
  const [loading, setLoading] = useState(false);
  const [searchedPhone, setsearchedPhone] = useState([]);

  const search = async (cari) => {
    setLoading(true);
    try {
      const response = await Axios.get("/search?query=" + cari);

      console.log(response.data.data);
      setsearchedPhone(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log(searchedPhone);
    }
  };

  useEffect(() => {
    search(cari);
  }, [cari]);
  return (
    <Main>
      <div style={{ marginTop: "80px" }}>
        <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
          {loading ? (
            <Typography fontSize={36}>Cari.. "{cari}"</Typography>
          ) : (
            <Typography fontSize={36}>{searchedPhone.title}</Typography>
          )}
          <Grid container spacing={2} marginTop={5}>
            {searchedPhone.length === 0
              ? "Loading"
              : searchedPhone.phones.map((phone) => {
                  return (
                    <Grid item xs={2}>
                      <Link
                        to={`/specifications/${phone.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Card
                          sx={{
                            height: "250px",
                            backgroundImage: `url(${phone.image})`,
                            backgroundPositionX: "center",
                            backgroundPositionY: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            "&:hover .hidden": {
                              display: "flex",
                              color: "white",
                            },
                          }}
                        >
                          <Box
                            className="hidden"
                            sx={{
                              backgroundColor: "rgba(0,0,0,0.5)",
                              height: "100%",
                              display: "none",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              fontSize={16}
                              fontWeight="bold"
                              sx={{ textAlign: "center" }}
                            >
                              {phone.phone_name}
                            </Typography>
                          </Box>
                        </Card>
                      </Link>
                    </Grid>
                  );
                })}
          </Grid>
        </Container>
      </div>
    </Main>
  );
}

export default Search;
