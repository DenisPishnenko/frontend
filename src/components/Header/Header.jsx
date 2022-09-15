import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { openModal, logout } from '../../redux/actions/auth';

import useStyles from './style';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const classes = useStyles();

  const openAuthModal = (type) => dispatch(openModal(type));
  const logoutUser = () => dispatch(logout());

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} variant="h6">
            News App
          </Typography>
          {isLoggedIn ? (
            <div>
              <Button color="inherit" onClick={logoutUser}>
                Logout
              </Button>
            </div>
          ) : (
            <div>
              <Button color="inherit" onClick={() => openAuthModal('SIGN IN')}>
                Login
              </Button>
              <Button color="inherit" onClick={() => openAuthModal('SIGN UP')}>
                Register
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default memo(Header);
