import React, { memo } from 'react';
import { string, number } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';

function UserCard({ id, name, email }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.inner}>
        <Typography className={classes.title} variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.content} variant="body2" component="p">
          {email}
        </Typography>
        <Typography className={classes.content} variant="body2" component="p">
          {id}
        </Typography>
      </CardContent>
    </Card>
  );
}

UserCard.propTypes = {
  name: string,
  email: string,
  id: number,
};
UserCard.defaultProps = {
  name: '',
  email: '',
  id: null,
};

export default memo(UserCard);
