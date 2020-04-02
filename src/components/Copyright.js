import React from "react";
import { Typography, Link } from "@material-ui/core";

export default function Copyright() {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="#">
          Desevolvido por Omnix Digital Experience
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
