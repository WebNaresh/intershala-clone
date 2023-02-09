import { Avatar, Card, CardActionArea, CardMedia } from "@mui/material";

export default function AboutCard({ url, type }) {
  return (
    <>
      {type === "catogories" ? (
        <Card>
          <CardActionArea component={"div"}>
            <CardMedia
              component={"img"}
              sx={{ filter: "grayscale(0.7)" }}
              title="CardMedia"
              src={url}
              alt="Cards"
            />
          </CardActionArea>
        </Card>
      ) : (
        <Card elevation={0} sx={{ background: "#363636" }}>
          <CardActionArea component={"div"}>
            <Avatar
              sx={{
                margin: 4,
                width: "20rem",
                height: "20rem",
                filter: "grayscale(1)",
              }}
              alt="Remy Sharp"
              src={url}
            />
          </CardActionArea>
        </Card>
      )}
    </>
  );
}
