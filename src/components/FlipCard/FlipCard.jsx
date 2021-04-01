import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Button, makeStyles, CardActionArea } from "@material-ui/core";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

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
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    overflow: "none",
  },
  parentDiv: {},
  div: {
    position: "absolute",
    cursor: "pointer",
  },
  card: {
    height: "80vh",
    width: "60vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  btn: {
    height: "33%",
  },
  img: {
    height: "100%",
  },
});

export default function FlipCard() {
  const classes = useStyles();
  const history = useHistory();

  const [image, setImage] = useState(landingPhotoOne);
  const [flipped, set] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setImage(imageArray[Math.floor(Math.random() * 6)]);
    }, 3000);
  }, []);

  const props = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const buttonGroup = () => (
    <Card className={classes.card}>
      <Button className={classes.btn}>Portfolio</Button>
      <Button className={classes.btn}>About Me</Button>
      <Button className={classes.btn}>Resume</Button>
    </Card>
  );

  return (
    <div className={classes.root} onClick={() => set((prev) => !prev)}>
      <animated.div
        className={classes.div}
        style={{
          opacity: props.opacity.to((opacity) => 1 - opacity),
          transform: props.transform,
        }}
      >
        <Card className={classes.card}>
          <img className={classes.img} src={image} alt="landing"></img>
        </Card>
      </animated.div>
      <animated.div
        className={classes.div}
        style={{
          opacity: props.opacity,
          transform: props.transform.to(
            (transform) => `${transform} rotateX(180deg)`
          ),
        }}
      >
        {buttonGroup()}
      </animated.div>
    </div>
  );
}
