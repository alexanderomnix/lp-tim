import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: "linear-gradient(194deg,#016fe9,#0050a7)",
    overflow: "initial",
    borderRadius: "8px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginRight: "auto",
    color: "#00FF41",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  cardtitle: {
    color: "#00FF41",
    fontWeight: "700",
    textAlign: "Center",
    fontSize: "50px"
  },
  spantitle: {
    fontSize: "17px",
    marginRight: "13px",
    verticalAlign: "middle",
    letterSpacing: "0.5px"
  },
  cardsubtitle: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold"
  },
  cardparagraph: {
    textAlign: "center",
    color: "#fff",
    fontSize: "15px"
  },
  greenspan: {
    color: "#00ff41",
    fontWeight: "bold"
  },
  collapsebar: {
    fontSize: "17px",
    fontWeight: "bold",
    color: "#fff",
    display: "fixed"
  },
  actions: {
    display: "fixed"
  },
  expandbar: {
    marginLeft: "auto"
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
    opacity: 1,
    padding: "8px 8px 8px",
    width: "157px",
    height: "38px"
  },
  appsrow: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root} elevation={0}>
        <div className={classes.appsrow}>
          <div className={classes.rectangle}>#MinhaOferta</div>
        </div>
        <p className={classes.cardtitle}>
          <span className={classes.spantitle}>até</span>
          <strong>9GB</strong>
        </p>
        <Typography className={classes.cardsubtitle}>
          4GB <span className={classes.greenspan}>+</span> Até 5GB de bônus
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary"></Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <Typography
            className={classes.collapsebar}
            aria-label="Mais benefícios"
          >
            Mais benefícios
          </Typography>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
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
            - TIM Banca Light
          </Typography>
          <Typography paragraph className={classes.cardparagraph}>
            - E-Book Light by Skeelo
          </Typography>
          <Typography paragraph className={classes.cardparagraph}>
            - TIM Segurança Digital
          </Typography>
        </Collapse>

        <Typography paragraph className={classes.cardparagraph}>
          <a className={classes.cardparagraph} href="/">
            Sumário
          </a>{" "}
          e{" "}
          <a className={classes.cardparagraph} href="/">
            regulamento
          </a>{" "}
          <br />
          da oferta Controle
        </Typography>
      </Card>
    </>
  );
}
