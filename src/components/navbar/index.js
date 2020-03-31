import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../../assets/logo.png";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    padding: theme.spacing(3)
  }
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar style={{ background: "#004691" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={Logo} alt={"logo TIM"} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Evoluir é fazer diferente!
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
