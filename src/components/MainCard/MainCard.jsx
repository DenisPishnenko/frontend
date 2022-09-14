import React, { memo } from 'react';
import { string } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';

function MainCard({ title, content }) {
  const classes = useStyles();
  return (
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
  );
}

MainCard.propTypes = {
  title: string,
  content: string,
};
MainCard.defaultProps = {
  title: '',
  content: '',
};

export default memo(MainCard);
