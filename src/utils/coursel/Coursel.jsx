import React from "react";
import { Button, Paper, Stack } from "@mui/material";
import Carousel from "react-material-ui-carousel";
const Coursel = () => {
  let items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "https://th.bing.com/th/id/R.92adbf72a21107cfa0ef442aedd674e7?rik=ZoikswHzmpd5ag&riu=http%3a%2f%2fwww.nursekeith.com%2fwp-content%2fuploads%2f2017%2f10%2fDepositphotos_70613989_m-2015.jpg&ehk=MaPjAccR9t5n86F3btXJOJActUF%2bYdYjTq6tlRrKjKM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "https://th.bing.com/th/id/OIP.5nwt55KMKMd5g-UD_Lxp5QHaDQ?pid=ImgDet&rs=1",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "https://th.bing.com/th/id/R.92adbf72a21107cfa0ef442aedd674e7?rik=ZoikswHzmpd5ag&riu=http%3a%2f%2fwww.nursekeith.com%2fwp-content%2fuploads%2f2017%2f10%2fDepositphotos_70613989_m-2015.jpg&ehk=MaPjAccR9t5n86F3btXJOJActUF%2bYdYjTq6tlRrKjKM%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      url: "https://th.bing.com/th/id/R.92adbf72a21107cfa0ef442aedd674e7?rik=ZoikswHzmpd5ag&riu=http%3a%2f%2fwww.nursekeith.com%2fwp-content%2fuploads%2f2017%2f10%2fDepositphotos_70613989_m-2015.jpg&ehk=MaPjAccR9t5n86F3btXJOJActUF%2bYdYjTq6tlRrKjKM%3d&risl=&pid=ImgRaw&r=0",
    },
  ];
  function Item(props) {
    return (
      <Stack>
        <Button
          size="large"
          sx={{
            position: "absolute",
            top: "50% ",
            left: "40%",
            color: "white",
            backdropFilter: "blur(2)",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
          variant="text"
          color="inherit"
        >
          {" "}
          {props.item.name}
        </Button>
        <Paper
          elevation={24}
          component={"img"}
          style={{
            display: "flex",
            height: "60vh",
            objectFit: "cover",
            justifyContent: "center",
            margin: "2%",
            borderRadius: "2%",
          }}
          src={props.item.url}
          alt={props.item.description}
        />
      </Stack>
    );
  }

  return (
    <Stack sx={{ background: "#363636" }}>
      <Carousel
        autoPlay={"true"}
        indicators={"true"}
        swipe={"true"}
        navButtonsAlwaysVisible={"true"}
        animation="slide"
        duration={1800}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Stack>
  );
};

export default Coursel;
