import React from 'react';
import { string } from 'prop-types';

import Alert from '@material-ui/lab/Alert';

import useStyles from './style';

function ShowAlert({ severity, message }) {
  const classes = useStyles();
  return (
    <Alert className={classes.container} severity={severity}>
      {message}
    </Alert>
  );
}

ShowAlert.propTypes = {
  severity: string.isRequired,
  message: string,
};
ShowAlert.defaultProps = {
  message: '',
};

export default ShowAlert;
