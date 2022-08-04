import { Container } from "@mui/material";

import { Link } from "react-router-dom";
import gambarBg from "../assets/img/pexels-max-andrey-1366630.jpg";
function BrandsItem({
  Det,
  height = "200px",
  showOverview = true,
  width = "100%",
}) {
  return (
    <Link
      to={`/brands/${Det.brand_slug}`}
      style={{
        textDecoration: "none",
      }}
    >
      <div
        style={{
          // boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          boxShadow:
            "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
          color: "white",
          backgroundColor: "grey",
          height: height,
          backgroundImage: `url(${gambarBg})`,
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
                fontSize: 28,
                fontWeight: "bold",
              }}
            >
              {Det.brand_name}
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

export default BrandsItem;
