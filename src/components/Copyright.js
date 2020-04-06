import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.tim.com.br">
          TIM
        </Link>{" "}
        2014-{new Date().getFullYear()}
        {". "}
        <Link
          color="inherit"
          href="https://www.tim.com.br/sp/sobre-a-tim/institucional/seguranca/politica-de-privacidade"
        >
          Política de privacidade
        </Link>{" "}
      </Typography>
    </div>
  );
}
