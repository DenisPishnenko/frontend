import React, { memo } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";

import { useStyles } from "./style";
import { openModal } from "../../redux/actions/auth";

const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolBar}>
          <Typography className={classes.title} variant="h6">
            News App
          </Typography>
          <Button color="inherit" onClick={() => dispatch(openModal())}>
            Login
          </Button>
          <Button color="inherit" onClick={() => dispatch(openModal())}>
            Register
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default memo(Header);
