import React, { memo } from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import useStyles from './style';

function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <CircularProgress />
    </div>
  );
}

export default memo(Loader);
