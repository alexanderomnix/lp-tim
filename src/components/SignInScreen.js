import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import BannerLogin from "../assets/bannerlogin.png";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import InputMask from "react-input-mask";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    background:
      "linear-gradient(153deg, rgba(32,97,127,1) 0%, rgba(103,166,184,1) 100%)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    height: "100%",
    width: "100%"
  },
  banner: {
    bottom: 0,
    top: "147px",
    left: "532px",
    height: "97%",
    backgroundRepeat: "no-repeat",
    resize: "both",
    backgroundSize: "contain",
    alignContent: "center",
    backgroundImage: `url("${BannerLogin}")`
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  wrapper: {
    margin: "0 auto",
    width: "100%"
  },
  fixedHeight: {
    height: 500
  },
  Title: {
    marginBottom: 12,
    color: "#00FF41!important",
    width: "80%"
  },
  Subtitle: {
    marginBottom: 30,
    color: "#fff"
  },
  submit: {
    marginTop: "20px",
    fontSize: "0.8rem",
    width: "184px",
    height: "48px",
    color: "#0058c5",
    fontWeight: "600",
    textAlign: "center"
  },
  InputField: {
    borderWidth: "1px",
    borderColor: "white !important",
    color: "white",
    textAlign: "center"
  },
  inputmask: { textAlign: "center" }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [telefone, setTelefone] = React.useState();
  let history = useHistory();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* 1 */}
            <Grid item xs={12} sm={7} md={7} lg={7}>
              <div className={fixedHeightPaper}>
                <Typography
                  component="h1"
                  variant="h4"
                  className={classes.Title}
                >
                  <strong>TIM Controle</strong>
                </Typography>
                <Typography
                  component="h1"
                  variant="h5"
                  className={classes.Subtitle}
                  style={{ marginLeft: 0, marginRight: 0 }}
                >
                  Esclareça todas as dúvidas <br />
                  sobre o seu novo plano, <br />
                  mas para isso,
                  <strong>
                    {" "}
                    insira abaixo
                    <br /> seu número TIM.
                  </strong>
                </Typography>

                <form
                  className={classes.form}
                  noValidate
                  onSubmit={e => {
                    e.preventDefault();
                    return history.push(
                      `/plano?${
                        telefone ? telefone.replace(/[^0-9]/g, "") : ""
                      }`
                    );
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <InputMask
                        onChange={event => {
                          setTelefone(event.target.value);
                        }}
                        mask="(99) 99999-9999"
                        className={classes.inputmask}
                      >
                        {() => (
                          <TextField
                            variant="outlined"
                            required
                            id="telefone"
                            name="telefone"
                            autoComplete="telefone"
                            placeholder="(11) 111111-1111"
                            InputProps={{
                              className: classes.InputField,
                              classes: {
                                notchedOutline: classes.InputField
                              },
                              endAdornment: (
                                <InputAdornment position="start">
                                  <SearchIcon fontSize="large" />
                                </InputAdornment>
                              )
                            }}
                          />
                        )}
                      </InputMask>
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    className={classes.submit}
                  >
                    Consultar agora
                  </Button>
                </form>
              </div>
            </Grid>
            {/* 2 */}
            <Hidden xsDown>
              <Grid item xs={12} sm={5} md={5} lg={5}>
                <Box className={classes.banner}></Box>
              </Grid>
            </Hidden>
          </Grid>
        </Container>
      </main>
    </div>
  );
}
