import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import ExpansionDrop from "./expansionDrop";
import CardModel from "./card";
import CardNews from "./cardnews";
import CardLigacoes from "./cardsligacoes.js";

const useStyles = makeStyles(theme => ({
  InfoContainer: { backgroundColor: "#E0E7F2" },
  headertext: {
    letterSpacing: "-0.64px",
    textAlign: "center",
    textColor: "#00FF41"
  },
  heroContent: {
    padding: theme.spacing(15, 0, 6)
  },
  CardBody: {
    backgroundImage: "linear-gradient(194deg,#016fe9,#0050a7)"
  },
  cardContainer: {
    marginTop: 30,
    marginBottom: 30,
    flexGrow: 1
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  }
}));

const footers = [];

export default function Pricing() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.InfoContainer}>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            variant="h5"
            align="center"
            component="p"
            color="secondary"
            className={classes.headertext}
          >
            Consultar as informações sobre o seu plano está muito mais{" "}
            <strong>simples, fácil e melhor para você</strong>. Veja as{" "}
            <strong>vantagens de ser TIM</strong>!
          </Typography>
        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={4}>
            <Grid item key={1} xs={12} sm={6} md={4}>
              <CardModel />
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={4}>
              <ExpansionDrop />
            </Grid>
            <Grid item key={1} xs={12} sm={6} md={4}>
              <CardLigacoes />
            </Grid>
          </Grid>
        </Container>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            variant="h5"
            align="center"
            component="p"
            color="secondary"
            className={classes.headertext}
          >
            <strong>Ofertas</strong> Para o seu plano tim Controle
          </Typography>
          <Container maxWidth="md" component="main">
            <Grid
              container
              spacing={2}
              direction="row"
              justify="center"
              alignItems="center"
              className={classes.cardContainer}
            >
              <Grid item key={1} xs={12} sm={12} md={4}>
                <CardNews />
              </Grid>
              <Grid item key={2} xs={12} sm={12} md={4}>
                <CardNews />
              </Grid>
              <Grid item key={1} xs={12} sm={12} md={4}>
                <CardNews />
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map(footer => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map(item => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>{/* <Copyright /> */}</Box>
      </Container>
    </>
  );
}
