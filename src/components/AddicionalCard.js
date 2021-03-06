import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "./TextInfoContent";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import ReactGA from "react-ga";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "transparent",
    maxWidth: 204,
    margin: "auto",
  },
  content: {
    margin: "auto",
    textAlign: "center",
    color: "#01508C",
  },
  cta: {
    margin: "auto",
    marginTop: 24,
    textTransform: "initial",
    color: "#fff",
    backgroundColor: "#0161CB",
    "&:hover": {
      backgroundColor: "#0050A7",
    },
    fontWeight: "bold",
  },
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: "flex",
    backgroundColor: "gold",
  },
  marginAutoItem: {},
  alignItemsAndJustifyContent: {
    width: "114px",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto!important",
    color: "#f22222",
  },
  overline: {
    textAlign: "center",
    color: "#fff",
  },
}));
const GAAction = (ctg, act) => {
  ReactGA.event({
    category: ctg,
    action: act,
    value: 1,
  });
};

const NewsCard = (props) => {
  const { logo, title, url, subtitle } = props;
  const styles = useStyles();
  const shadowStyles = useBouncyShadowStyles();

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <div className={styles.alignItemsAndJustifyContent}>
        <img src={logo} alt="redes sociais" />
      </div>

      <CardContent className={styles.content}>
        <TextInfoContent
          classes={styles.content}
          heading={title}
          body={subtitle}
        />
        <Button
          variant="text"
          className={styles.cta}
          onClick={() => {
            GAAction("Adquirir", title);
            window.open(url);
          }}
        >
          Contratar agora
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
