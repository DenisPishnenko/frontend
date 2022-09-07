import React from "react";
import { memo } from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./style";

const MainCard = ({ title, content }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.inner}>
          <Typography className={classes.title} variant="h5" component="h2">
            {title}
          </Typography>
          <Typography className={classes.content} variant="body2" component="p">
            {content}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

MainCard.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default memo(MainCard);
