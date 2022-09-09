import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { register } from "../../redux/actions/auth";

import { useStyles } from "./style";

const AuthForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => dispatch(register(values)),
  });
  return (
    <form
      className={classes.root}
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        id="standard-basic"
        label="Email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <TextField
        id="standard-basic"
        label="Password"
        name="password"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
};

export default AuthForm;
