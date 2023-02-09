import React from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Slider, Stack } from "@mui/material";

const Form = () => {
  function valuetext(value) {
    console.log(value);
    return `${value}°C fvfd`;
  }
  return (
    <div>
      <form action="">
        <Stack>
          <Stack marginY={2}>
            <Typography variant="subtitle1" color="GrayText">
              Primary Education
            </Typography>
            <Stack direction={"column"}>
              <FormControlLabel
                label="10th"
                control={
                  <Checkbox value="10 th" checked={true} color="primary" />
                }
              />
              <FormControlLabel
                label="12th"
                control={
                  <Checkbox value="12 th" checked={true} color="primary" />
                }
              />
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="subtitle1" color="GrayText">
              Stream Education
            </Typography>
            <Stack direction={"column"}>
              <FormControlLabel
                label="Science"
                control={
                  <Checkbox value="10 th" checked={true} color="primary" />
                }
              />
              <FormControlLabel
                label="Commerce"
                control={
                  <Checkbox value="12 th" checked={true} color="primary" />
                }
              />
              <FormControlLabel
                label="Art"
                control={
                  <Checkbox value="12 th" checked={true} color="primary" />
                }
              />
            </Stack>
            <Stack>
              <Typography variant="subtitle1" color="GrayText">
                Bachelor Education
              </Typography>
              <Stack direction={"column"}>
                <FormControlLabel
                  label="B.S.C."
                  control={
                    <Checkbox value="10 th" checked={true} color="primary" />
                  }
                />
                <FormControlLabel
                  label="B.C.A."
                  control={
                    <Checkbox value="12 th" checked={true} color="primary" />
                  }
                />
                <FormControlLabel
                  label="B.Tech."
                  control={
                    <Checkbox value="12 th" checked={true} color="primary" />
                  }
                />
                <FormControlLabel
                  label="B.Pharmacy"
                  control={
                    <Checkbox value="12 th" checked={true} color="primary" />
                  }
                />
                <FormControlLabel
                  label="B.E."
                  control={
                    <Checkbox value="12 th" checked={true} color="primary" />
                  }
                />
              </Stack>
            </Stack>
            <Stack>
              <Typography variant="subtitle1" color="GrayText">
                Salary
              </Typography>
              <Box sx={{ width: 300, marginX: "1rem" }}>
                <Slider
                  aria-label="Custom marks"
                  defaultValue={10000}
                  getAriaValueText={valuetext}
                  min={10000}
                  max={50000}
                  step={5000}
                  valueLabelDisplay="auto"
                  marks
                />
              </Box>
            </Stack>
            <Stack>
              <Typography variant="subtitle1" color="GrayText">
                Canteen
              </Typography>
              <FormControlLabel
                label="Canteen"
                control={
                  <Checkbox value="12 th" checked={true} color="primary" />
                }
              />
            </Stack>
            <Stack>
              <Typography variant="subtitle1" color="GrayText">
                Leave In
              </Typography>
              <FormControlLabel
                label="Leave In"
                control={
                  <Checkbox value="12 th" checked={true} color="primary" />
                }
              />
            </Stack>
            <Stack>
              <Typography variant="subtitle1" color="GrayText">
                P.F. Facility
              </Typography>
              <FormControlLabel
                label="P.F. Facility"
                control={
                  <Checkbox value="12 th" checked={true} color="primary" />
                }
              />
            </Stack>
            <Stack>
              <Typography variant="subtitle1" color="GrayText">
                Working Month
              </Typography>
              <Box sx={{ width: 300, marginX: "1rem" }}>
                <Slider
                  aria-label="Moth"
                  defaultValue={6}
                  getAriaValueText={valuetext}
                  min={6}
                  max={60}
                  step={6}
                  valueLabelDisplay="auto"
                  marks
                />
              </Box>
            </Stack>
            <Stack>
              <Typography variant="subtitle1" color="GrayText">
                Requrement
              </Typography>
              <FormControlLabel
                label="Immediate"
                control={
                  <Checkbox value="12 th" checked={true} color="primary" />
                }
              />
            </Stack>
          </Stack>
        </Stack>
      </form>
    </div>
  );
};

export default Form;
