import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  panel: {
    backgroundColor: "#f4f4f4",
    textAlign: "center",
    margin: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    alignSelf: "center",
    margin: "auto"
  },
  expandIcon: {
    color: "#2d7fe1"
  },
  align: {
    display: "block",
    textAlign: "center!important",
    margin: "auto"
  }
}));

export default function SimpleExpansionPanel() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel className={classes.panel}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon className={classes.expandIcon} />}
          aria-controls="panel1a-content"
        >
          <Typography className={classes.heading}>
            Regulamentos e sumários da oferta TIM Controle
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography className={classes.align}>
            <Link
              color="inherit"
              variant="body2"
              href="https://www.tim.com.br/Portal_Conteudo/_staticfiles/para-voce/planos/Controle/pdf/Regulamentos/202002/Regulamento_Oferta_Controle_Promo_Internet_4GB_12M.pdf"
            >
              Regulamento Oferta Bônus 4GB Controle Smart Fatura
            </Link>
            <br />
            <Link
              color="inherit"
              variant="body2"
              href="https://www.tim.com.br/Portal_Conteudo/_staticfiles/para-voce/planos/Controle/pdf/Regulamentos/202002/Regulamento_Oferta_Controle_Promo_Internet_4GB_12M.pdf"
            >
              Regulamento Oferta Bônus 4GB Controle Smart Fatura Não Fidelizado
            </Link>
            <br />
            <Link
              color="inherit"
              variant="body2"
              href="https://www.tim.com.br/Portal_Conteudo/_staticfiles/para-voce/planos/Controle/pdf/Regulamentos/202002/Regulamento_Oferta_Controle_Promo_Internet_4GB_12M.pdf"
            >
              Regulamento Oferta Bônus 4GB Controle Redes Sociais Fidelizado
            </Link>
            <br />
            <Link
              color="inherit"
              variant="body2"
              href="https://www.tim.com.br/Portal_Conteudo/_staticfiles/para-voce/planos/Controle/pdf/Regulamentos/202002/Regulamento_Oferta_Controle_Promo_Internet_4GB_12M.pdf"
            >
              Regulamento Oferta Bônus 4GB Controle Redes Sociais Não Fidelizado
            </Link>
            <br />
            <Link
              color="inherit"
              variant="body2"
              href="https://www.tim.com.br/Portal_Conteudo/_staticfiles/para-voce/planos/Controle/pdf/Regulamentos/202002/Regulamento_Oferta_Controle_Promo_Internet_4GB_12M.pdf"
            >
              Regulamento Oferta Bonus 4GB TIM Controle GIGA B PROMO EXPRESS
            </Link>
            <br />
            <Link
              color="inherit"
              variant="body2"
              href="https://www.tim.com.br/Portal_Conteudo/_staticfiles/para-voce/planos/Controle/pdf/Regulamentos/202002/Regulamento_Oferta_Controle_Promo_Internet_4GB_12M.pdf"
            >
              Regulamento Oferta Bonus 4GB TIM Controle C Express <br />
            </Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
