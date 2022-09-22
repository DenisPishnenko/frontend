import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { openModal, logout } from '../../redux/actions/auth';
import { checkUser } from '../../redux/actions/user';
import { SIGN_UP, SIGN_IN } from '../../constants';

import useStyles from './style';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const imageUrl = useSelector((state) => state.auth.user?.image.url);
  const user = useSelector((state) => state.auth.user);
  const avatar = imageUrl != null && `${process.env.REACT_APP_API_URL}/${imageUrl}`;
  const classes = useStyles();

  const navigate = useNavigate();
  const getUserPage = () => navigate(`user/${user.id}`);

  const openModals = (type) => dispatch(openModal(type));
  const logoutUser = () => dispatch(logout());

  useEffect(() => {
    if (isLoggedIn) dispatch(checkUser());
  }, [isLoggedIn]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} variant="h6">
            <Link to="/" className={classes.link}>News App</Link>
          </Typography>
          {isLoggedIn ? (
            <div className={classes.headerGroup}>
              <Button color="inherit" onClick={logoutUser}>
                Logout
              </Button>
              <div onClick={getUserPage} role="presentation">
                {avatar ? (<img src={avatar} alt="user" className={classes.userImage} />) : (<AccountCircleIcon />)}
              </div>
            </div>
          ) : (
            <div>
              <Button color="inherit" onClick={() => openModals(SIGN_IN)}>
                Login
              </Button>
              <Button color="inherit" onClick={() => openModals(SIGN_UP)}>
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
