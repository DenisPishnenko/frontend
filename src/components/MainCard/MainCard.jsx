import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { string, shape } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';

function MainCard({ title, content, user }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const getUserPage = () => navigate(`user/${user.id}`);
  return (
    <Card className={classes.root}>
      <CardContent className={classes.inner}>
        <Typography className={classes.title} variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.content} variant="body2" component="p">
          {content}
        </Typography>
        {user && (
          <div>
            <Typography className={classes.content} variant="body2" component="p">
              <span>Author: </span>
              <span
                className={classes.userName}
                onClick={getUserPage}
                role="presentation"
              >
                {user.name}
              </span>
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

MainCard.propTypes = {
  title: string,
  content: string,
  user: shape(),
};
MainCard.defaultProps = {
  title: '',
  content: '',
  user: null,
};

export default memo(MainCard);
