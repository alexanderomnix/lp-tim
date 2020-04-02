import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Card, CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "./TextInfoContent";
import { useN01TextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/n01";
import { useBouncyShadowStyles } from "@mui-treasury/styles/shadow/bouncy";
import imageLogoCard from "../assets/socialApps/socialapps.png";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "transparent",
    maxWidth: 204,
    margin: "auto"
  },
  content: {},
  cta: {
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
    alignItems: "center",
    justifyContent: "center",
    margin: "0 15px!important"
  }
}));

const NewsCard = props => {
  const styles = useStyles();
  const textCardContentStyles = useN01TextInfoContentStyles();
  const shadowStyles = useBouncyShadowStyles();

  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardHeader
        avatar={
          <div className={styles.alignItemsAndJustifyContent}>
            <img src={imageLogoCard} alt="redes sociais" />
          </div>
        }
      />
      <CardContent className={styles.content}>
        <TextInfoContent classes={textCardContentStyles} body="Teste" />
        <Button variant="raised" className={styles.cta}>
          Contratar agora
        </Button>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
