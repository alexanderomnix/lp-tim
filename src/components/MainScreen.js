import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import MinhaOfertaCard from "./MinhaOfertaCard";
import InternetCard from "./InternetCard";
import AddicionalCard from "./AddicionalCard";
import LigacoesCard from "./LigacoesCard.js";
import ReactGA from "react-ga";
import DeezerIco from "../assets/Deezer.png";
import imageLogoCard from "../assets/socialApps/socialapps.png";
import FaqComponent from "./faq";
import APPMeuTim from "../assets/APPMeuTim.svg";
import AppStoreIco from "../assets/appstore.png";
import PlayStoreIco from "../assets/playstore.png";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import Fab from "@material-ui/core/Fab";

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
  AppTIMtitle: {
    padding: 10,
    fontSize: "29px",
    fontWeight: "bold",
    color: "#044491",
    textAlign: "center",
    textColor: "#00FF41"
  },
  footer: {
    // borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6)
    }
  },
  footerrow: {
    padding: "15px 15px 15px"
  }
}));
const GAAction = (ctg, act) => {
  ReactGA.event({
    category: ctg,
    action: act
  });
};

export default function Pricing() {
  const classes = useStyles();
  const [feedbackButton, setFeedbackButton] = React.useState(false);

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
              <MinhaOfertaCard />
            </Grid>
            <Grid item key={2} xs={12} sm={6} md={4}>
              <InternetCard />
            </Grid>
            <Grid item key={3} xs={12} sm={6} md={4}>
              <LigacoesCard />
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
            <strong>Ofertas</strong> para o seu plano TIM Controle
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
                <AddicionalCard
                  logo={imageLogoCard}
                  title="Redes sociais"
                  subtitle="Recorrente"
                  url="https://wcad.tim.com.br/"
                />
              </Grid>
              <Grid item key={2} xs={12} sm={12} md={4}>
                <AddicionalCard
                  logo={imageLogoCard}
                  title="Redes Sociais"
                  subtitle="Avulso"
                  url="https://wcad.tim.com.br/"
                />
              </Grid>
              <Grid item key={3} xs={12} sm={12} md={4}>
                <AddicionalCard
                  logo={DeezerIco}
                  title="TIM Music by Deezer"
                  url="http://bit.ly/2G2eHOa"
                />
              </Grid>
            </Grid>
          </Container>
        </Container>
      </div>
      <Container maxWidth="md" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          <FaqComponent />
        </Grid>
        <Box mt={5}>
          <Grid
            container
            className={classes.footerrow}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <img src={APPMeuTim} alt="Ney tim" />
            </Grid>
            <Grid item>
              <Typography className={classes.AppTIMtitle}>
                Aplicativo Meu TIM
              </Typography>
            </Grid>
          </Grid>
          <Typography color="textSecondary" align="center">
            Nunca foi tão fácil acompanhar o seu consumo de internet, baixar
            faturas,
            <br /> saber os valores do seu plano e aproveitar todos os seus
            serviços TIM. Baixe agora!
          </Typography>
          <Grid
            container
            className={classes.footerrow}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Grid item>
              <img
                src={PlayStoreIco}
                alt="Meu tim Play Store link"
                onClick={() => {
                  GAAction("Meu Tim", "Acesso PlayStore");
                  window.open(
                    "https://play.google.com/store/apps/details?id=br.com.timbrasil.meutim"
                  );
                }}
              />
            </Grid>
            <Grid item>
              <img
                onClick={() => {
                  GAAction("Meu Tim", "Acesso AppStore");
                  window.open(
                    "https://apps.apple.com/br/app/%CE%BCeu-tim/id668591218"
                  );
                }}
                src={AppStoreIco}
                alt="Meu TIM App Store link"
              />
            </Grid>
          </Grid>
          <Grid
            container
            className={classes.footerrow}
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
            <Typography>Este guia é útil?</Typography>
            <Grid item>
              <Fab
                color="primary"
                onClick={() => setFeedbackButton(true)}
                disabled={feedbackButton}
                aria-label="Deslike"
              >
                <ThumbUpAltIcon
                  alt="Like"
                  onClick={() => {
                    GAAction("Guia", "Like");
                  }}
                />
              </Fab>
            </Grid>
            <Grid item>
              <Fab
                color="primary"
                onClick={() => setFeedbackButton(true)}
                disabled={feedbackButton}
                aria-label="Deslike"
              >
                <ThumbDownAltIcon
                  onClick={() => {
                    GAAction("Guia", "Deslike");
                  }}
                  alt="Deslike"
                />
              </Fab>
            </Grid>
          </Grid>
          {!feedbackButton ? (
            ""
          ) : (
            <Typography align="center">
              Obrigado por participar de nossa pesquisa!
            </Typography>
          )}
        </Box>
      </Container>
    </>
  );
}
