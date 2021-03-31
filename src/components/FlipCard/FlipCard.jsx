import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Card, Button, makeStyles, CardActionArea } from "@material-ui/core";
import classNames from "classnames";
import { useHistory } from "react-router-dom";

import landingPhoto from "../../assets/landing_photo.jpeg";

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

  const [flipped, set] = useState(false);

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
          <img
            className={classes.img}
            src={landingPhoto}
            alt="landing Photo"
          ></img>
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
