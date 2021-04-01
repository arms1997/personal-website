import { makeStyles } from "@material-ui/core";
import { useSpring, animated } from "react-spring";

import FlipCard from "./FlipCard/FlipCard";
import Front from "./FlipCard/Front";
import Back from "./FlipCard/Back";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(
      https://www.transparenttextures.com/patterns/food.png
    )`,
  },
});

const Landing = () => {
  const classes = useStyles();
  const props = useSpring({
    opacity: 1,
    transform: `scale(1)`,
    from: { opacity: 0, transform: `scale(2)` },
  });

  return (
    <animated.div className={classes.root} style={props}>
      <FlipCard front={Front} back={Back} />
    </animated.div>
  );
};

export default Landing;
