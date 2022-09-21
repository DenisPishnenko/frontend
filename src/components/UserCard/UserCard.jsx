import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import { shape, bool } from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import defaultImage from '../../assets/user.png';
import { openEditModal } from '../../redux/actions/user';

import useStyles from './style';

function UserCard({ user, isAuth }) {
  const classes = useStyles();


  const dispatch = useDispatch();
  
  const userImage = user?.image?.url ? `${process.env.REACT_APP_API_URL}/${user.image.url}` : defaultImage;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.inner}>
        <div className={classes.wrapper}>
          <img
            src={userImage}
            alt="user"
            className={classes.avatar}
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
          </div>
        </div>
        {isAuth && (
        <div className={classes.buttons}>
          <Button variant="outlined" color="primary">
            CREATE NEWS
          </Button>
          <Button variant="outlined" color="primary" onClick={() => dispatch(openEditModal())}>
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
  isAuth: bool,
};
UserCard.defaultProps = {
  user: null,
  isAuth: false,
};

export default memo(UserCard);
