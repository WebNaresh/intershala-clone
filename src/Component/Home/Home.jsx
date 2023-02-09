import { Button, Stack } from "@mui/material";
import React from "react";
import Coursel from "../../utils/coursel/Coursel";
import Catogories from "./Catogories/Catogories";
import Popular from "./Catogories/Popular/Popular";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Coursel />
      <Catogories heading={"Our Supporter"} type={"supporter"} />
      <Catogories heading={"Catogories"} type={"catogories"} />
      <Popular />
      <Stack>
        <Link style={{ width: "100%", display: "flex" }} to={"/result"}>
          <Button
            variant="contained"
            sx={{ width: "30%", margin: "1rem auto" }}
            color="error"
          >
            Show More
          </Button>
        </Link>
      </Stack>
    </>
  );
};

export default Home;
