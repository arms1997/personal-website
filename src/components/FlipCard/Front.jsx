import { Card, makeStyles } from "@material-ui/core";
import { useState, useEffect } from "react";

import landingPhotoOne from "../../assets/landing_photo.jpeg";
import landingPhotoTwo from "../../assets/landing_photo_2.jpeg";
import landingPhotoThree from "../../assets/landing_photo_3.jpeg";
import landingPhotoFour from "../../assets/landing_photo_4.jpeg";
import landingPhotoFive from "../../assets/landing_photo_5.jpeg";
import landingPhotoSix from "../../assets/landing_photo_6.jpeg";

const imageArray = [
  landingPhotoOne,
  landingPhotoTwo,
  landingPhotoThree,
  landingPhotoFour,
  landingPhotoFive,
  landingPhotoSix,
];

const useStyles = makeStyles({
  card: {
    height: "80vh",
    width: "60vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  img: {
    height: "100%",
  },
});

export default function Front() {
  const [image, setImage] = useState(landingPhotoOne);

  const classes = useStyles();

  useEffect(() => {
    setInterval(() => {
      setImage(imageArray[Math.floor(Math.random() * 6)]);
    }, 5000);
  }, []);

  return (
    <Card className={classes.card}>
      <img className={classes.img} src={image} alt="landing"></img>
    </Card>
  );
}
