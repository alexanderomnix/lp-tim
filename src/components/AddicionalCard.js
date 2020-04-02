import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "./TextInfoContent";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "transparent",
    maxWidth: 204,
    margin: "auto"
  },
  content: {
    margin: "auto",
    textAlign: "center"
  },
  cta: {
    margin: "auto",
    marginTop: 24,
    textTransform: "initial",
    color: "#fff",
    backgroundColor: "#0161CB",
    "&:hover": {
      backgroundColor: "#0050A7"
    },
    fontWeight: "bold"
  },
  marginAutoContainer: {
    width: 500,
    height: 80,
    display: "flex",
    backgroundColor: "gold"
  },
  marginAutoItem: {},
  alignItemsAndJustifyContent: {
    width: "114px",
    height: "100px",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto!important",
    color: "#f22222"
  },
  overline: {
    textAlign: "center",
    color: "#fff"
  }
}));

const NewsCard = props => {
  const { logo, title } = props;
  const styles = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <div className={styles.alignItemsAndJustifyContent}>
        <img src={logo} alt="redes sociais" />
      </div>

      <CardContent className={styles.content}>
        <TextInfoContent classes={styles.content} heading={title} />
        <Button variant="raised" className={styles.cta}>
          Contratar agora
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
