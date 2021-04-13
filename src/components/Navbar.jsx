import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import throttle from "lodash/throttle";
import classNames from "classnames";
import "../styles/bttn.min.css";

import data from "../data.js";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
    width: "100%",
  },
  spriteGroup: {
    display: "flex",
    alignItems: "center",
    width: "30%",
    marginLeft: "20px",
  },
  sprite: {
    height: "50px",
    margin: "0px 10px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "20vw",
    marginRight: 8,
  },
  buttonSelected: {},
}));

const Navbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const classes = useStyles();

  function throttleHandleWindowResize() {
    return throttle(() => setIsMobile(window.innerWidth < 480), 200);
  }

  useEffect(() => {
    window.addEventListener("resize", throttleHandleWindowResize);

    return window.removeEventListener("resize", throttleHandleWindowResize);
  }, []);

  if (location.pathname === "/") {
    return null;
  }

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <AppBar className={classes.root} color="inherit" position="sticky">
      <Toolbar className={classes.toolbar}>
        <div
          className={classes.spriteGroup}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Typography className={classes.name} variant="h6">
            {data.name}
          </Typography>
        </div>
        <div className={classes.buttonGroup}>
          <Button
            className="bttn-minimal bttn-md"
            disabled={location.pathname === "/portfolio"}
          >
            Portfolio
          </Button>
          <Button
            className="bttn-minimal bttn-md"
            disabled={location.pathname === "/about me"}
          >
            About Me
          </Button>
          <Button
            className="bttn-minimal bttn-md"
            disabled={location.pathname === "/resume"}
          >
            Resume
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
