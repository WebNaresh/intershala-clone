import React from "react";
import {
  Stack,
  Avatar,
  Typography,
  Button,
  Divider,
  Chip,
  Paper,
} from "@mui/material";
import {
  Add,
  FollowTheSigns,
  LocationCity,
  LocationOn,
  Lock,
  School,
} from "@mui/icons-material";

const Home = () => {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  return (
    <div>
      <Paper variant="outlined">
        <Stack direction={"column"} width={"100%"} height={"80vh"}>
          <Stack
            width={"100%"}
            height={"15rem"}
            borderRadius={"5px 5px 0px 0px"}
            flexDirection={"row"}
            padding={"1%"}
            style={{
              background: "url(https://i.stack.imgur.com/MDIyX.png)",
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
                bottom: "-5rem",
                margin: "3rem",
                width: 140,
                height: 140,
                border: "4.5px solid white",
                boxShadow: "17px 8px 23px black, -1em 0 1.4em black",
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
                <Stack
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  width={"20rem"}
                >
                  <Chip
                    icon={<Add />}
                    label="Follow"
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip
                    icon={<Lock fontSize={"small"} />}
                    label="Message"
                    variant="outlined"
                    onClick={handleClick}
                  />
                  <Chip label="More" variant="outlined" onClick={handleClick} />
                </Stack>
                <Stack flexDirection={"column"}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    textAlign={"right"}
                    sx={{
                      marginTop: "1rem",
                      textAlign: { md: "left", xs: "center" },
                    }}
                  >
                    <School /> &nbsp; &nbsp;Netaji Subhas Institute of
                    Technology
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
                    <LocationOn /> &nbsp; &nbsp;Pune Maharastra
                  </Typography>
                </Stack>
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
      </Paper>
    </div>
  );
};

export default Home;
