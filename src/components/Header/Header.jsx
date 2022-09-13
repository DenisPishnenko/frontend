import React, { memo } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";

import { useStyles } from "./style";
import { openModal, logout } from "../../redux/actions/auth";

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const classes = useStyles();

  const showLoginModal = () => dispatch(openModal("SIGN IN"));
  const showRegisterModal = () => dispatch(openModal("SIGN UP"));
  const logoutUser = () => dispatch(logout());
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} variant="h6">
            News App
          </Typography>
          {isLoggedIn ? (
            <Button color="inherit" onClick={logoutUser}>
              Logout
            </Button>
          ) : (
            <div>
              <Button color="inherit" onClick={showLoginModal}>
                Login
              </Button>
              <Button color="inherit" onClick={showRegisterModal}>
                Register
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default memo(Header);
