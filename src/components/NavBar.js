import React from "react";
import Logo from "../assets/logo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  NavTitle: {
    color: "#fff",
    marginLeft: 20,
    fontSize: "0.8rem",
    fontWeight: "bold"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <img src={Logo} alt={"logo TIM"} style={{ maxWidth: "5.25rem" }} />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.NavTitle}
          >
            EVOLUIR É FAZER DIFERENTE!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
