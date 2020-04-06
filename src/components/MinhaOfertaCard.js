import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Card, Link } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ReactGA from "react-ga";

//display: block;
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: "linear-gradient(194deg,#016fe9,#0050a7)",
    overflow: "initial",
    borderRadius: "8px",
    top: "360px",
    left: "798px",
    height: "371px",
  },
  expand: {
    fontSize: "3px",
    transform: "rotate(0deg)",
    marginRight: "auto",
    color: "#00FF41",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  cardtitle: {
    color: "#00FF41",
    fontWeight: "700",
    textAlign: "center",
    fontSize: "58px",
    letterSpacing: "-1.62px",
    margin: "0!important",
  },
  spantitle: {
    fontSize: "17px",
    marginRight: "13px",
    verticalAlign: "middle",
    letterSpacing: "0.5px",
    fontWeight: "bold",
  },
  cardsubtitle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
  },
  cardparagraph: {
    textAlign: "center",
    color: "#CBECFD",
    fontSize: "12px",
    marginTop: "2px",
    marginBottom: "2px",
    letterSpacing: "-0.3px",
  },
  greenspan: {
    color: "#00ff41",
    fontWeight: "bold",
  },
  collapsebar: {
    fontSize: "17px",
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  actions: {
    textAlign: "center",
    display: "block",
  },
  expandbar: {
    marginLeft: "auto",
  },
  rectangle: {
    margin: "-5% 12px 0",
    position: "sticker",
    color: "#01508c",
    top: "-25px",
    background: "#00FF41 0% 0% no-repeat padding-box",
    fontWeight: "700",
    borderRadius: "8px",
    textAlign: "center",
    fontSize: "16px",
    padding: "8px 8px 8px",
    width: "157px",
    height: "38px",
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  appsrow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  disclaimer: {
    fontSize: "14px",
    fontWeight: "300",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const GAAction = (ctg, act) => {
    ReactGA.event({
      category: ctg,
      action: act,
      value: 1,
    });
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root} elevation={0}>
        <div className={classes.appsrow}>
          <div className={classes.rectangle}>#MINHAOFERTA</div>
        </div>

        <p className={classes.cardtitle}>
          {/* <span className={classes.spantitle}>até</span> */}
          <strong>4GB</strong>
        </p>

        <Typography className={classes.cardsubtitle}>
          4GB <span className={classes.greenspan}>+</span> Até 1.5GB de bônus
          <br />
          <span className={classes.disclaimer}>
            *contratando débito automático
            <br /> e conta online
          </span>
        </Typography>
        <CardActions className={classes.actions}>
          <Typography
            className={classes.collapsebar}
            aria-label="Mais benefícios"
          >
            Mais benefícios
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Mais benefícios"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto">
          <Typography paragraph className={classes.cardparagraph}>
            - TIM Bancas Jornais
          </Typography>
          <Typography paragraph className={classes.cardparagraph}>
            - TIM Globo Livros
          </Typography>
        </Collapse>

        <Typography paragraph className={classes.cardparagraph}>
          <Link
            onClick={() => {
              GAAction("Sumário", "AcessoSumário");
              window.open(
                "https://www.tim.com.br/sp/para-voce/planos/controle/sumarios/tim-controle-smart"
              );
            }}
            className={classes.cardparagraph}
          >
            Sumário
          </Link>{" "}
          e{" "}
          <Link
            className={classes.cardparagraph}
            onClick={() => {
              GAAction("Regulamento", "AcessoRegulamento");
              window.open(
                "https://www.tim.com.br/Portal_Conteudo/_staticfiles/para-voce/planos/Controle/pdf/Regulamentos/31122019/Regulamento_TIM_Controle_Smart_Express201219.pdf"
              );
            }}
          >
            regulamento
          </Link>{" "}
          <br />
          da oferta Controle
        </Typography>
      </Card>
    </>
  );
}
