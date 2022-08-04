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
              : searchedPhone.phones.map((phone, index) => {
                  return (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <Link
                        to={`/specifications/${phone.slug}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Card
                          sx={{
                            height: "55vh",
                            backgroundImage: `url(${phone.image})`,
                            backgroundPositionX: "center",
                            backgroundPositionY: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            borderRadius: "10px",
                            "&:hover .hidden": {
                              opacity: [0.9, 0.8, 0.7],
                              transition: "all 0.3s ease-in-out",
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <Box
                            className="hidden"
                            sx={{
                              background:
                                "linear-gradient(19deg, rgba(0,0,0,1) 0%, rgba(28,28,192,0.03918662191439071) 88%)",
                              height: "100%",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              fontSize={16}
                              fontWeight="bold"
                              sx={{ textAlign: "center", color: "#fff" }}
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
