import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { shape } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import useStyles from './style';
import defaultImage from '../../assets/user.png';

function UserCard({ user }) {
  const classes = useStyles();
  const userImage = user?.image?.url ? `${process.env.REACT_APP_API_URL}/${user.image.url}` : defaultImage;

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Card className={classes.root}>
      <CardContent className={classes.inner}>
        <div className={classes.wrapper}>
          <img
            src={userImage}
            alt="user"
          />
          <div className={classes.inner}>
            <Typography className={classes.title} variant="h5" component="h2">
              Author:
              {user.name}
            </Typography>
            <Typography className={classes.content} variant="body2" component="p">
              Email:
              {user.email}
            </Typography>
            <Typography className={classes.content} variant="body2" component="p">
              Author ID:
              {user.id}
            </Typography>
          </div>
        </div>
        {isLoggedIn && (
        <div className={classes.buttons}>
          <Button variant="outlined" color="primary">
            CREATE NEWS
          </Button>
          <Button variant="outlined" color="primary">
            EDIT PROFILE
          </Button>
        </div>
        )}
      </CardContent>
    </Card>
  );
}

UserCard.propTypes = {
  user: shape(),
};
UserCard.defaultProps = {
  user: null,
};

export default memo(UserCard);
