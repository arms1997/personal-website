import { Container, Icon, makeStyles, Typography } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import SearchIcon from "@material-ui/icons/Search";
import WorkIcon from "@material-ui/icons/Work";

import spriteWave from "../assets/sprite-wave.gif";
import data from "../data.js";
import Projects from "./Projects";

const useStyles = makeStyles({
  root: {},
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "50px 0px",
  },
  headerImg: {
    height: "30vh",
  },
  content: {
    display: "flex",
    flexDirection: "column",
  },
  headerBottom: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
  },
  textIcon: {
    display: "flex",
    width: "40%",
    alignItems: "center",
    margin: "2px 0px",
  },
  span: {
    marginLeft: 10,
  },
});

export default function Portfolio(props) {
  const classes = useStyles();

  const header = () => (
    <Container>
      <div className={classes.header}>
        <div className={classes.content}>
          <Typography variant="h3">{`YO, my name is ${data.name}, WELCOME TO ME WEBSITE`}</Typography>
          <div className={classes.headerBottom}>
            <Typography variant="h6" className={classes.textIcon}>
              <CodeIcon />
              <span className={classes.span}>Full Stack Developer</span>
            </Typography>
            <Typography variant="h6" className={classes.textIcon}>
              <WorkIcon />
              <span className={classes.span}>
                Jr. Full Stack Engineer - BrokerBay
              </span>
            </Typography>
          </div>
        </div>
        <img className={classes.headerImg} src={spriteWave} />
      </div>
    </Container>
  );

  // const projects = () => (

  // )

  return (
    <div>
      {header()}
      <Projects />
    </div>
  );
}
