import { Typography } from "@mui/material";
import React from "react";
import GridStack from "./GridStack/GridStack";
import GridStack2 from "./GridStack/GridStack2";

const Catogories = ({ heading, type }) => {
  return (
    <div>
      <Typography
        my={5}
        gutterBottom
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center" }}
        component="div"
      >
        {heading}
      </Typography>
      {type === "catogories" ? (
        <GridStack type={type} />
      ) : (
        <GridStack2 type={type} />
      )}
    </div>
  );
};

export default Catogories;
