import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

import throttle from "lodash/throttle";

import "../styles/bttn.min.css";
import data from "../data.js";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    width: "60vw",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "20vw",
  },
}));

const Navbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const classes = useStyles();

  function throttleHandleWindowResize() {
    return throttle(() => setIsMobile(window.innerWidth < 480), 200);
  }

  useEffect(() => {
    window.addEventListener("resize", throttleHandleWindowResize);

    return window.removeEventListener("resize", throttleHandleWindowResize);
  }, []);

  return (
    <AppBar className={classes.root} color="inherit">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">{data.name}</Typography>
        <div className={classes.buttonGroup}>
          <button class="bttn-minimal bttn-md">Portfolio</button>
          <button class="bttn-minimal bttn-md">About Me</button>
          <button class="bttn-minimal bttn-md">Resume</button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
