import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import TopResult from "./topResult/TopResult";

const Popular = () => {
  let job = {
    companyName: "Nipro India Corporation",
    jobName: "Operator",
    status: "green",
    contractorName: "S.P.Bhande",
    duration: "6 month",
    salary: 1400,
    companyLogo: "http://ssgmkhandala.org/images/gallery/1.jpg",
    contractorLogo: "http://ssgmkhandala.org/images/gallery/2.jpg",
  };
  return (
    <div>
      <Typography
        my={5}
        gutterBottom
        variant="h3"
        sx={{ color: "primary.main", textAlign: "center" }}
        component="div"
      >
        Popular Result
      </Typography>
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
      <TopResult job={job} />
    </div>
  );
};

export default Popular;
