import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },
  root: {
    width: 350,
    height: 250,
    marginTop: "10vh",
    margin: "auto",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 16,
  },
});

const MainCard = ({ title, content }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
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

export default MainCard;
