import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
  },
});

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
