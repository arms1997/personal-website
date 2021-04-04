import { Card, Button, makeStyles, Typography } from "@material-ui/core";
import { useSpring, animated } from "react-spring";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const useStyles = makeStyles({
  card: {
    height: "80vh",
    width: "60vw",
    display: "flex",
    flexDirection: "column",
    background: "linear-gradient(#3E5151, #DECBA4)",
  },
  btn: {
    height: "100%",
  },
});

export default function Back(flipped) {
  const classes = useStyles();
  const history = useHistory();

  const buttons = ["Portfolio", "About Me", "Resume"];

  const handleClick = (path) => {
    if (flipped) {
      history.push(path);
    }
  };

  return (
    <Card className={classes.card} color="default">
      {buttons.map((button) => (
        <Button
          fullWidth
          className={classes.btn}
          onClick={() => handleClick(`/${button.toLowerCase()}`)}
        >
          <Typography variant="h5">{button}</Typography>
        </Button>
      ))}
    </Card>
  );
}
