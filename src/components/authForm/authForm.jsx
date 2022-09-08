import React from "react";
import { useFormik } from "formik";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useStyles } from "./style";

const authForm = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
    },
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
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
      <TextField
        id="standard-basic"
        label="Password"
        name="email"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
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

export default authForm;
