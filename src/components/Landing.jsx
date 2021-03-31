import { Card, makeStyles } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

import landingPhoto from "../assets/landing_photo.jpeg";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
  },
  card: {
    height: "80%",
  },
  img: {
    height: "100%",
  },
});

const Landing = () => {
  const classes = useStyles();
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className={classes.root} style={props}>
      <Card className={classes.card}>
        <img
          className={classes.img}
          src={landingPhoto}
          alt={landingPhoto}
        ></img>
      </Card>
    </animated.div>
  );
};

export default Landing;
