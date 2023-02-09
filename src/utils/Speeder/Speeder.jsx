import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { Badge } from "@mui/material";
import {
  AccountCircleOutlined,
  Diversity1,
  Home,
  Search,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const actions = [
  {
    icon: (
      <Link to={"/"}>
        {" "}
        <Home />{" "}
      </Link>
    ),
    name: "Home",
  },
  {
    icon: (
      <Link to={"/about"}>
        {" "}
        <Diversity1 />{" "}
      </Link>
    ),
    name: "About",
  },
  {
    icon: (
      <Link to={"/profile"}>
        {" "}
        <AccountCircleOutlined />{" "}
      </Link>
    ),
    name: "Profile",
  },
  {
    icon: (
      <Link to={"/result"}>
        {" "}
        <Search />{" "}
      </Link>
    ),
    name: "Find",
  },
];

export default function Speeder() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{ position: "fixed", bottom: "4rem", right: "2rem" }}
      icon={
        <Badge sx={{ padding: 1 }} badgeContent={4} color="error">
          <SpeedDialIcon />{" "}
        </Badge>
      }
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  );
}
