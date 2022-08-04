import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

import TrendingItem from "./TrendingItem";

import "./NewArival.css";
import Axios from "../config/Axios";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const NewArival = () => {
  const [NewDevices, setNewDevices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const Load = () => {
    return (
      <Skeleton
        sx={{
          bgcolor: "grey.900",
          borderRadius: "10px",
        }}
        variant="rectangular"
        width={"20vw"}
        height={"55vh"}
      />
    );
  };

  const getNewDevices = async () => {
    let response = await Axios.get("/latest");

    // console.log(response.data);
    setNewDevices(response.data.data.phones);

    // setTimeout(() => {
    //   console.log(NewDevices);
    // }, 1000);
  };

  useEffect(() => {
    getNewDevices();
  }, []);
  return (
    <div style={{ marginBottom: "40px", marginTop: "80px" }}>
      <Typography
        fontSize={36}
        fontWeight="bold"
        sx={{ marginBottom: "15px", marginTop: "15px" }}
      >
        New Phones
      </Typography>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        allowTouchMove
        spaceBetween={40}
        loop
        centeredSlides
        slidesPerView={4}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        navigation
        pagination={{ clickable: true }}
        style={{
          borderRadius: 10,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
        }}
      >
        {NewDevices.length === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Load />
            <Load />
            <Load />
            <Load />
          </div>
        ) : (
          NewDevices.map((dt, index) => {
            return (
              <SwiperSlide key={index}>
                <TrendingItem height="55vh" width="20vw" phoneDet={dt} />
              </SwiperSlide>
            );
          })
        )}
      </Swiper>
    </div>
  );
};

export default NewArival;
