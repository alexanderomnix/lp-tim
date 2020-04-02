import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo.png";

const useStyles = makeStyles(theme => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1,
    fontSize: "10px"
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#fff"
  }
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img src={Logo} alt={"logo TIM"} style={{ maxWidth: "5.25rem" }} />
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            EVOLUIR É FAZER DIFERENTE!
          </Typography>
          <nav>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              2ªVia
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="#"
              className={classes.link}
            >
              Cobertura
            </Link>
          </nav>
          <Button
            href="#"
            color="primary"
            variant="outlined"
            className={classes.link}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

import React from "react";
import Logo from "../assets/logo.png";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  NavTitle: {
    color: "#fff"
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbarTitle: {
    flexGrow: 1,
    marginLeft: 20,
    fontSize: "0.8rem",
    fontWeight: "bold"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <AppBar elevation={0} className={classes.appBar} position="static">
        <Toolbar>
          <img src={Logo} alt={"logo TIM"} style={{ maxWidth: "5.25rem" }} />
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            EVOLUIR É FAZER DIFERENTE!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
