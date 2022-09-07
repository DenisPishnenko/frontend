import React from "react";
import PropTypes from "prop-types";

import Alert from "@material-ui/lab/Alert";

import { useStyles } from "./style";

const ShowAlert = ({ severity, message }) => {
  const classes = useStyles();
  return (
    <Alert className={classes.container} severity={severity}>
      {message}
    </Alert>
  );
};

ShowAlert.propTypes = {
  severity: PropTypes.string,
  message: PropTypes.string,
};

export default ShowAlert;
