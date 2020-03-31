import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        style={{
          background:
            "linear-gradient(180deg, #016FE9 0%, #0161CB 51%, #0050A7 100%) 0% 0% no-repeat padding-box",
          height: "100vh"
        }}
      >
        <Typography />
      </Container>
    </React.Fragment>
  );
}
