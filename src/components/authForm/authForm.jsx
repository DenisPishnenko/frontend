import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { register } from "../../redux/actions/auth";
import { FORM_FIELDS, validateUser } from "../../constants";

import { useStyles } from "./style";

const AuthForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const submitHandler = (values) => dispatch(register(values));
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: validateUser(),
    onSubmit: submitHandler,
  });
  return (
    <form className={classes.root}>
      {FORM_FIELDS.map((item) => (
        <div key={item.label} className={classes.form}>
          <TextField
            id="standard-basic"
            label={item.label}
            name={item.name}
            type={item.type}
            onChange={formik.handleChange}
            value={formik.values[item.name]}
            error={
              formik.touched[item.name] && Boolean(formik.errors[item.name])
            }
            helperText={formik.touched[item.type] && formik.errors[item.type]}
          />
          {formik.touched[item.name] && formik.errors[item.name] ? (
            <span className={classes.invalid}>{formik.errors[item.name]}</span>
          ) : null}
        </div>
      ))}
      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        type="submit"
        onClick={formik.handleSubmit}
      >
        Submit
      </Button>
    </form>
  );
};

export default AuthForm;
