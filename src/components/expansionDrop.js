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
    maxWidth: 345,
    backgroundImage: "linear-gradient(194deg,#016fe9,#0050a7)"
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
    marginTop: 15,
    color: "#00FF41",
    fontWeight: "700",
    textAlign: "Center",
    letterSpacing: "-2.5px",
    fontSize: "50px"
  },
  spantitle: {
    fontSize: "17px",
    marginRight: "13px",
    verticalAlign: "middle"
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
    textAlign: "center"
  },
  actions: {
    display: "flex"
  },
  expandbar: {
    marginLeft: "auto"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Typography>
        <p className={classes.cardtitle}>
          <span className={classes.spantitle}>até</span>
          <strong>9GB</strong>
        </p>
      </Typography>
      <Typography className={classes.cardsubtitle}>
        4GB <span className={classes.greenspan}>+</span> Até 5GB de bônus
      </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
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
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={classes.cardparagraph}>
            - TIM Banca Light
          </Typography>
          <Typography paragraph className={classes.cardparagraph}>
            - E-Book Light by Skeelo
          </Typography>
          <Typography paragraph className={classes.cardparagraph}>
            - TIM Segurança Digital
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
