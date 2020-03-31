import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import Persona from "../assets/persona-banner-5-fs@2x.png";
import InputAdornment from "@material-ui/core/InputAdornment";
import Hidden from "@material-ui/core/Hidden";
import SearchIcon from "@material-ui/icons/Search";
// import InputMask from "react-input-mask";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#eceff1",
      main: "#eceff1",
      dark: "#eceff1",
      contrastText: "#000"
    },
    secondary: {
      light: "#ff7961",
      main: "#eceff1",
      dark: "#eceff1",
      contrastText: "#000"
    }
  },
  status: {
    danger: "orange"
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    background:
      "linear-gradient(180deg, #016FE9 0%, #0161CB 51%, #0050A7 100%) 0% 0% no-repeat padding-box",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100vh",
    width: "100%"
  },
  paper: {
    margin: theme.spacing(2, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "left"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  banner: {
    position: "absolute",
    bottom: 0,
    right: "30px",
    height: "598px"
  },
  MainText: {
    marginTop: 120,
    color: "#fff"
    // width: "50%"
  },
  input: {
    color: "white",
    fontSize: "20px"
    // width: 400
  }
}));

// const celMask = cel => {
//   cel = cel.replace(/D/g, "").replace(/^(d{2})(d)/g, "($1) $2").replace(/(d)(d{4})$/, "$1-$2")
//   cel = cel.replace(/^(d{2})(d)/g, "($1) $2")
//   cel = cel.replace(/(d)(d{4})$/, "$1-$2")
//   return cel;
// };

export default function SignInLp() {
  const classes = useStyles();
  const [input, setinput] = useState();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        component="main"
        className={classes.root}
        direction="row"
        alignItems="center"
      >
        <div className={classes.paper}>
          <Grid item xs={12} sm={8} elevation={6} square>
            <Typography
              component="h1"
              variant="h4"
              className={classes.MainText}
            >
              Esclareça todas as dúvidas sobre o seu novo plano, mas para isso,{" "}
              <strong>insira abaixo seu novo número TIM.</strong>
            </Typography>
          </Grid>
          <Grid item lg={2} md={4} xs={12} className={classes.paper}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                required={true}
                autoFocus
                maxLength="14"
                InputProps={{
                  className: classes.input,
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
                value={input}
                onChange={e =>
                  setinput(
                    e.target.value
                      .replace(/D/g, "")
                      .replace(/^(d{2})(d)/g, "($1) $2")
                      .replace(/(d)(d{4})$/, "$1-$2")
                  )
                }
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className={classes.submit}
                style={{ fontSize: "15px" }}
              >
                Consultar agora
              </Button>
            </form>
          </Grid>
          <Hidden smDown>
            <img
              className={classes.banner}
              src={Persona}
              alt="Moça em selfie"
            ></img>
          </Hidden>
        </div>
      </Grid>
    </ThemeProvider>
  );
}
