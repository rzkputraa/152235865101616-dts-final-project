import { Container } from "@mui/material";

import { Link } from "react-router-dom";
import gambarBg from "../assets/img/pexels-max-andrey-1366630.jpg";
function EachBrand({
  Det,
  height = "200px",
  showOverview = true,
  width = "100%",
}) {
  return (
    <Link to={`/specifications/${Det.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          //   boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
          color: "white",
          backgroundColor: "grey",
          height: height,
          backgroundImage: `url(${Det.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            background:
              "linear-gradient(19deg, rgba(0,0,0,1) 0%, rgba(28,28,192,0.03918662191439071) 88%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div>
            <Container
              style={{
                fontSize: 18,
                fontWeight: "bold",
              }}
            >
              {Det.phone_name}
            </Container>
            {showOverview && (
              <Container
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                  },
                }}
              >
                {Det.count}
              </Container>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default EachBrand;
