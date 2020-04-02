import React from "react";
import AppBar from "@material-ui/core/AppBar";
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
    flexWrap: "wrap",
    padding: 10
  },
  toolbarTitle: {
    flexGrow: 1,
    marginLeft: 20,
    fontSize: "16px",
    padding: 10,
    alignItems: "center"
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
              href="https://meutim.tim.com.br/menu/servicos-de-conta/conta-online"
              className={classes.link}
            >
              2ªVia
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              href="https://www.tim.com.br/sp/para-voce/cobertura-e-roaming/mapa-de-cobertura"
              className={classes.link}
            >
              Cobertura
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
