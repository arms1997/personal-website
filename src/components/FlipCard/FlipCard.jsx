import { useState } from "react";
import { useSpring, animated } from "react-spring";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  div: {
    position: "absolute",
    cursor: "pointer",
  },
});

export default function FlipCard({ front, back }) {
  const classes = useStyles();
  const [flipped, set] = useState(false);

  const { opacity, transform } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div className={classes.root} onClick={() => set((prev) => !prev)}>
      <animated.div
        className={classes.div}
        style={{
          opacity: opacity.to((opacity) => 1 - opacity),
          transform: transform,
        }}
      >
        {front()}
      </animated.div>
      <animated.div
        className={classes.div}
        style={{
          opacity: opacity,
          transform: transform.to(
            (transform) => `${transform} rotateX(180deg)`
          ),
        }}
      >
        {back(flipped)}
      </animated.div>
    </div>
  );
}
