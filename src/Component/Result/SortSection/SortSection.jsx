import React from "react";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box, Slider, Stack } from "@mui/material";
import SwipeableEdgeDrawer from "./Sort";
// import { SwipeableEdgeDrawer } from "./Sort";

const SortSection = () => {
  return (
    <div>
      <SwipeableEdgeDrawer />
    </div>
  );
};

export default SortSection;
