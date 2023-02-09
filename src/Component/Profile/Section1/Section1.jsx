import React from "react";
import { Stack, Avatar, Typography, Button, Divider } from "@mui/material";

const Section1 = () => {
  return (
    <div>
      <Stack direction={"column"} padding={2} height={"50vh"} width={"100%"}>
        <Stack
          width={"100%"}
          height={"15rem"}
          flexDirection={"row"}
          padding={"1%"}
          style={{
            background: "url(https://wallpaperaccess.com/full/328472.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={
              "https://www.newsclick.in/sites/default/files/styles/responsive_885/public/2018-06/Dhruv%20Rathee_4.jpg?itok=e6cS20hf"
            }
            sx={{
              bottom: "-6rem",
              margin: "3rem",
              width: 140,
              height: 140,
              border: "4.5px solid white",
            }}
          />
          <Stack
            sx={{
              position: "relative",
              bottom: "-15rem",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Stack>
              <Typography
                variant="h5"
                color="white"
                component="div"
                textAlign={"right"}
                sx={{
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                companyName
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                textAlign={"right"}
                sx={{
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                @dhruvrathee
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                textAlign={"right"}
                sx={{
                  textAlign: { md: "left", xs: "center" },
                }}
              >
                120 follower
              </Typography>
            </Stack>
            <Stack>
              {" "}
              <Button
                variant="outlined"
                color="info"
                sx={{ borderRadius: "20px" }}
              >
                HIre
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={"100%"}></Stack>
        <Divider variant="fullWidth" orientation="horizontal" />
      </Stack>
    </div>
  );
};

export default Section1;
