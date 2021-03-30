import { Card, makeStyles } from "@material-ui/core";
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

const Landing = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <img
          className={classes.img}
          src={landingPhoto}
          alt={landingPhoto}
        ></img>
      </Card>
    </div>
  );
};

export default Landing;
