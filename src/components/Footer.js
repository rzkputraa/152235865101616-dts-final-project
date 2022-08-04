import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <Box
        component="footer"
        sx={() => ({
          minHeight: "100px",
          padding: "35px 0",
          fontSize: "13px",
        })}
      >
        <Container maxWidth="lg">
          <Stack direction="column" gap={3}>
            <Typography component="large" variant="caption">
              © 2022 Rizki Putra Wicaksono (152235865101-616), All Right
              Reserved
            </Typography>
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;
