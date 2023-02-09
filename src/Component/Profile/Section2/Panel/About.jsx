import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Stack, IconButton, Button } from "@mui/material";
import { Add, Delete, Edit, FileDownload } from "@mui/icons-material";

const About = () => {
  return (
    <div>
      <Paper sx={{ margin: 1, padding: 2 }} variant="outlined">
        <Stack sx={{ marginY: 2 }}>
          <Button
            variant="outlined"
            sx={{
              position: "relative",
              width: "10rem",
              left: "21%",
              margin: "auto",
            }}
            startIcon={<FileDownload />}
            color="primary"
          >
            Download Resume
          </Button>
          <Typography variant="h5" color="inherit">
            Naresh Bhosale
            <Button sx={{ marginX: 3 }} variant="text" color="inherit">
              <Edit />
            </Button>
          </Typography>

          <Typography variant="subtitle2" color="gray">
            nareshbhosale73@gmail.com
          </Typography>
          <Typography variant="subtitle2" color="gray">
            +91 9370928324
          </Typography>
          <Typography variant="subtitle2" color="gray">
            Maharashtra, Pune
          </Typography>
        </Stack>
        <Divider variant="fullWidth" orientation="horizontal" />
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginY: 3,
          }}
        >
          <Stack width={"20%"}>
            {" "}
            <Typography variant="subtitle2" color="gray">
              Education
            </Typography>
          </Stack>
          <Stack width={"80%"}>
            <Stack my={2}>
              <Typography
                variant="h7"
                sx={{ display: "flex", justifyContent: "space-between" }}
                color="inherit"
              >
                Senior Secondary (XII), science
                <Stack flexDirection={"row"}>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Stack>
              </Typography>
              <Typography variant="subtitle2" color="gray">
                HSC board
              </Typography>
              <Typography variant="subtitle2" color="gray">
                Year of completion:2020
              </Typography>
              <Button
                sx={{
                  width: "10rem",
                }}
                variant="text"
                startIcon={<Add />}
                color="primary"
              >
                Add Education
              </Button>
            </Stack>
            <Stack my={2}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                variant="h7"
                color="inherit"
              >
                Senior Secondary (XII), science
                <Stack flexDirection={"row"}>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Stack>
              </Typography>
              <Typography variant="subtitle2" color="gray">
                HSC board
              </Typography>
              <Typography variant="subtitle2" color="gray">
                Year of completion:2020
              </Typography>
              <Button
                sx={{
                  width: "10rem",
                }}
                variant="text"
                startIcon={<Add />}
                color="primary"
              >
                Add Education
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Divider variant="fullWidth" orientation="horizontal" />
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginY: 3,
          }}
        >
          <Stack width={"20%"}>
            {" "}
            <Typography variant="subtitle2" color="gray">
              Education
            </Typography>
          </Stack>
          <Stack width={"80%"}>
            <Stack my={2}>
              <Typography
                variant="h7"
                sx={{ display: "flex", justifyContent: "space-between" }}
                color="inherit"
              >
                Senior Secondary (XII), science
                <Stack flexDirection={"row"}>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Stack>
              </Typography>
              <Typography variant="subtitle2" color="gray">
                HSC board
              </Typography>
              <Typography variant="subtitle2" color="gray">
                Year of completion:2020
              </Typography>
              <Button
                sx={{
                  width: "10rem",
                }}
                variant="text"
                startIcon={<Add />}
                color="primary"
              >
                Add Education
              </Button>
            </Stack>
            <Stack my={2}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                variant="h7"
                color="inherit"
              >
                Senior Secondary (XII), science
                <Stack flexDirection={"row"}>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Stack>
              </Typography>
              <Typography variant="subtitle2" color="gray">
                HSC board
              </Typography>
              <Typography variant="subtitle2" color="gray">
                Year of completion:2020
              </Typography>
              <Button
                sx={{
                  width: "10rem",
                }}
                variant="text"
                startIcon={<Add />}
                color="primary"
              >
                Add Education
              </Button>
            </Stack>
          </Stack>
        </Stack>{" "}
        <Divider variant="fullWidth" orientation="horizontal" />
        <Stack
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginY: 3,
          }}
        >
          <Stack width={"20%"}>
            {" "}
            <Typography variant="subtitle2" color="gray">
              Education
            </Typography>
          </Stack>
          <Stack width={"80%"}>
            <Stack my={2}>
              <Typography
                variant="h7"
                sx={{ display: "flex", justifyContent: "space-between" }}
                color="inherit"
              >
                Senior Secondary (XII), science
                <Stack flexDirection={"row"}>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Stack>
              </Typography>
              <Typography variant="subtitle2" color="gray">
                HSC board
              </Typography>
              <Typography variant="subtitle2" color="gray">
                Year of completion:2020
              </Typography>
              <Button
                sx={{
                  width: "10rem",
                }}
                variant="text"
                startIcon={<Add />}
                color="primary"
              >
                Add Education
              </Button>
            </Stack>
            <Stack my={2}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                variant="h7"
                color="inherit"
              >
                Senior Secondary (XII), science
                <Stack flexDirection={"row"}>
                  <IconButton>
                    <Edit />
                  </IconButton>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </Stack>
              </Typography>
              <Typography variant="subtitle2" color="gray">
                HSC board
              </Typography>
              <Typography variant="subtitle2" color="gray">
                Year of completion:2020
              </Typography>
              <Button
                sx={{
                  width: "10rem",
                }}
                variant="text"
                startIcon={<Add />}
                color="primary"
              >
                Add Education
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Paper>
    </div>
  );
};

export default About;
