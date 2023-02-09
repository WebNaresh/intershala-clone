import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Stack,
  Divider,
  CardActions,
  Button,
  CardActionArea,
  Badge,
} from "@mui/material/";
import Paper from "@mui/material/Paper";

const TopResult = ({ job }) => {
  let {
    companyName,
    jobName,
    status,
    contractorName,
    duration,
    salary,
    companyLogo,
    contractorLogo,
  } = job;
  let name = "N0ix";
  let message = "Nix";
  let url = "Nix";
  let url2 = "Nix";
  return (
    <>
      <div>
        <>
          <Card
            elevation={10}
            sx={{
              display: "flex",
              width: "98%",
              margin: "10px auto",
              flexDirection: { xs: "column-reverse", md: "row-reverse" },
              alignItems: { xs: "center", md: "unset" },
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: { md: "flex-start", xs: "center", sm: "center" },
                }}
              >
                <div>
                  <Typography
                    component="div"
                    variant="h5"
                    sx={{
                      textAlign: { md: "left", xs: "center" },
                    }}
                  >
                    {jobName}
                  </Typography>
                </div>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                  textAlign={"right"}
                  sx={{
                    textAlign: { md: "left", xs: "center" },
                  }}
                >
                  {companyName}
                </Typography>

                <Paper
                  variant="outlined"
                  sx={{
                    display: "flex",
                    width: "60%",
                    margin: "0rem 0rem 0rem 0rem",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "1rem 0rem",
                    background: "#313131",
                  }}
                >
                  <Stack
                    style={{
                      display: "flex",
                      width: "33%",
                      flexDirection: { xs: "row", md: "column" },
                    }}
                  >
                    <Stack style={{ padding: 1, textAlign: "center" }}>
                      Requirement
                    </Stack>
                    <Stack style={{ padding: 1, textAlign: "center" }}>
                      {" "}
                      Immediate
                    </Stack>
                  </Stack>
                  <Stack
                    style={{
                      display: "flex",
                      width: "33%",
                      flexDirection: { xs: "row", md: "column" },
                    }}
                  >
                    <Stack style={{ padding: 1, textAlign: "center" }}>
                      Duration
                    </Stack>
                    <Stack style={{ padding: 1, textAlign: "center" }}>
                      6 Month
                    </Stack>
                  </Stack>
                  <Stack
                    style={{
                      display: "flex",
                      width: "33%",
                      flexDirection: { xs: "row", md: "column" },
                    }}
                  >
                    <Stack style={{ padding: 1, textAlign: "center" }}>
                      Salary
                    </Stack>
                    <Stack style={{ padding: 1, textAlign: "center" }}>
                      14000
                    </Stack>
                  </Stack>
                </Paper>
              </CardContent>
              <Box
                sx={{
                  display: { sm: "none", md: "flex", xs: "none", xl: "none" },

                  alignItems: "center",
                  height: "20px",
                  flexDirection: { md: "row-reverse", xs: "column" },
                }}
              >
                <Stack>
                  <Avatar
                    sx={{ margin: 4 }}
                    alt="Remy Sharp"
                    src={contractorLogo}
                  />
                </Stack>
                <Stack component={"subtitle-2"}>{contractorName}</Stack>
              </Box>

              <CardActions sx={{ height: "4rem" }}>
                <CardActionArea>
                  <Button
                    size="large"
                    sx={{
                      position: "absolute",
                      top: "50% ",
                      left: "40%",
                      color: "primary.main",
                      backdropFilter: "blur(2)",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                    }}
                    variant="text"
                    color="inherit"
                  >
                    {" "}
                    View Details
                  </Button>
                </CardActionArea>
                <CardActionArea>
                  <Button
                    size="large"
                    sx={{
                      position: "absolute",
                      top: "50% ",
                      left: "40%",
                      color: "primary.main",
                      backdropFilter: "blur(2)",
                      transform: "translate(-50%, -50%)",
                      textAlign: "center",
                    }}
                    variant="text"
                    color="inherit"
                  >
                    {" "}
                    Apply
                  </Button>
                </CardActionArea>
              </CardActions>
            </Box>

            <CardMedia
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 300,
              }}
            >
              <Avatar
                alt="Remy Sharp"
                src={companyLogo}
                sx={{
                  width: { md: 140, xs: 70 },
                  height: { md: 140, xs: 70 },
                }}
              />
            </CardMedia>
          </Card>
          <Divider />
        </>
      </div>
    </>
  );
};

export default TopResult;
