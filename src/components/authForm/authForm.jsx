import React, { memo } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { login, register } from '../../redux/actions/auth';
import { REGISTER_FIELDS, LOGGED_FIELDS, validateUser } from '../../constants';

import useStyles from './style';

function AuthForm() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.modal.modalType);
  const isAuth = modalType === 'SIGN UP';
  const currentFields = isAuth ? REGISTER_FIELDS : LOGGED_FIELDS;
  const classes = useStyles();

  const submitHandler = (values) => {
    if (isAuth) dispatch(register(values));
    else dispatch(login(values));
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: validateUser(),
    onSubmit: submitHandler,
  });
  return (
    <form className={classes.root}>
      {currentFields.map((item) => (
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
          {formik.touched[item.name] && formik.errors[item.name] && (
            <span className={classes.invalid}>{formik.errors[item.name]}</span>
          )}
        </div>
      ))}
      <Button
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
        type="submit"
        onClick={formik.handleSubmit}
      >
        {modalType}
      </Button>
    </form>
  );
}

export default memo(AuthForm);
