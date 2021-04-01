import { Card, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
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
});

export default function Back() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Button className={classes.btn}>Portfolio</Button>
      <Button className={classes.btn}>About Me</Button>
      <Button className={classes.btn}>Resume</Button>
    </Card>
  );
}
