import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import BannerLogin from "../assets/bannerlogin.png";
// import Hidden from "@material-ui/core/Hidden";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

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
  },
  typography: {
    fontFamily: "TIM Sans"
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": "TIM Sans"
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    background: "linear-gradient(90deg,#1f617f,#1f607e)!important",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
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
    top: "147px",
    left: "632px",
    width: "247px",
    height: "293px",
    background: `transparent url(${BannerLogin}) 0% 0% no-repeat padding-box`
  },
  Title: {
    marginTop: 120,
    marginBottom: 12,
    color: "#00FF41!important",
    width: "80%"
  },
  input: {
    color: "white",
    fontSize: "20px"
  },
  Subtitle: {
    color: "#fff"
  }
}));

export default function SignInLp() {
  const classes = useStyles();
  const [input, setinput] = useState();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Grid container component="main" direction="row" alignItems="center">
          <div className={classes.paper}>
            <Grid item xs={12} sm={8} elevation={6}>
              <Typography component="h1" variant="h4" className={classes.Title}>
                <strong>TIM Controle</strong>
              </Typography>
              <Typography
                component="h1"
                variant="h4"
                className={classes.Subtitle}
              >
                Esclareça todas as dúvidas sobre o seu novo plano, mas para
                isso, <strong>insira abaixo seu novo número TIM.</strong>
              </Typography>
            </Grid>
            <Grid item lg={2} md={4} xs={12} className={classes.paper}>
              <form className={classes.form} noValidate>
                <TextField
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
                  onChange={e => setinput(e.target.value)}
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
              <div className={classes.banner}></div>
            </Grid>
          </div>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
