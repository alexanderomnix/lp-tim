import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo.png";
import ReactGA from "react-ga";
// import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flexGrow: 1,
    marginLeft: 20,
    fontSize: "14px",
    padding: 10,
    alignItems: "center",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: "#fff",
  },
  topnavRight: {
    float: "right",
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const { subtitle } = props;
  const GAAction = (ctg, act) => {
    ReactGA.event({
      category: ctg,
      action: act,
      value: 1,
    });
  };

  return (
    <>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Grid justify="space-between" container spacing={24}>
            <Grid item>
              <img
                src={Logo}
                alt={"logo TIM"}
                style={{ maxWidth: "5.25rem" }}
              />
            </Grid>
            {subtitle ? (
              ""
            ) : (
              <Grid item>
                <Link
                  variant="button"
                  color="textPrimary"
                  onClick={() => {
                    GAAction("2via", "Acesso2via");
                    window.open(
                      "https://meutim.tim.com.br/menu/servicos-de-conta/conta-online"
                    );
                  }}
                  className={classes.link}
                >
                  2ª Via de Conta{" "}
                </Link>{" "}
                <Link
                  variant="button"
                  color="textPrimary"
                  onClick={() => {
                    GAAction("Cobertura", "AcessoCobertura");
                    window.open(
                      "https://www.tim.com.br/sp/para-voce/cobertura-e-roaming/mapa-de-cobertura"
                    );
                  }}
                  className={classes.link}
                >
                  {" "}
                  Cobertura
                </Link>{" "}
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
