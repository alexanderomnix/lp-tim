import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import ConversationIco from "../assets/icn_chat.svg";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: "linear-gradient(194deg,#016fe9,#0050a7)",
    alignItems: "center",
    padding: "42px 0",
    borderRadius: "8px",
    top: "360px",
    left: "798px",
    height: "371px"
  },
  cardtitle: {
    marginTop: 30,
    color: "#00FF41",
    fontWeight: "700",
    textAlign: "Center",
    letterSpacing: "-2.5px",
    fontSize: "50px"
  },
  spantitle: {
    fontSize: "17px",
    marginRight: "13px"
  },
  cardsubtitle: {
    textAlign: "center",
    color: "#fff",
    letterSpacing: "-0.38px"
  },
  greenspan: {
    color: "#00ff41",
    fontWeight: "bold"
  },
  appbanner: {
    height: "47px",
    width: "auto"
  },
  appsico: {
    width: "38px",
    height: "38px"
  },
  appsrow: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
    marginTop: "5px"
  },
  cardparagraph: {
    textAlign: "center",
    color: "#fff",
    fontSize: "15px"
  }
}));

const CardPlano = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.appsrow}>
        <img src={ConversationIco} alt="Nuvem com simbolo de mais"></img>
      </div>
      <Typography className={classes.cardsubtitle}>
        <strong>ligações ilimitadas</strong> <br />
        para qualquer operadora
        <br /> do Brasil c/ DDD TIM 41
      </Typography>
      <Typography className={classes.cardsubtitle}>
        <span className={classes.greenspan}>+</span>
      </Typography>{" "}
      <Typography paragraph className={classes.cardsubtitle}>
        <strong>SMS ilimitado </strong> <br />
        para TIM+ 100 para <br />
        outras operadoras
      </Typography>
    </Card>
  );
};

export default CardPlano;
