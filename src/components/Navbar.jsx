import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import throttle from "lodash/throttle";

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
    width: "100%",
  },
  name: {
    marginLeft: "20px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-evenly",
    width: "20vw",
    marginRight: 8,
  },
}));

const Navbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
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

  return (
    <AppBar className={classes.root} color="inherit" position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.name} variant="h6">
          {data.name}
        </Typography>
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
