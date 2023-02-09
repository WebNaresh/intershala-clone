import React from "react";
import { Stack, Paper, IconButton, Tooltip } from "@mui/material";
import { FilterAlt, Sort } from "@mui/icons-material";
import ResultSection from "./ResultSection/ResultSection";
import SwipeableEdgeDrawer from "./SortSection/Sort";

const Result = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Stack width={"100%"} direction={"row"}>
      <Tooltip title="Filter">
        <IconButton
          onClick={toggleDrawer(true)}
          // color="primary"
          sx={{
            position: "fixed",
            right: "2rem",
            background: "#646464",
            ":hover": { background: "#28587e" },
          }}
          size={"10rem"}
          aria-label="sortButton"
        >
          <FilterAlt fontSize="10rem" />
        </IconButton>
      </Tooltip>

      <Stack width={"100%"}>
        <ResultSection />
      </Stack>
      <SwipeableEdgeDrawer open={open} setOpen={setOpen} />
    </Stack>
  );
};

export default Result;
