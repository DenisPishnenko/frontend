import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { EDIT_FIELDS, validateEditUser } from '../../constants';

import useStyles from './style';
import { fetchUserEdited } from '../../redux/actions/user';

function EditForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const defaultValues = {
    name: user.name,
    image: user.image,
  };
  const { id } = useParams();

  const submitHandler = (values) => {
    const payload = { id, values };
    dispatch(fetchUserEdited(payload));
  };
  const formik = useFormik({
    initialValues: {
      name: '',
      Image: '',
    },
    validationSchema: validateEditUser(),
    onSubmit: submitHandler,
  });
  return (
    <form className={classes.root} noValidate autoComplete="off">
      {EDIT_FIELDS.map((item) => (
        <div className={classes.form}>
          <TextField
            id="standard-basic"
            label={item.label}
            name={item.name}
            type={item.type}
            onChange={formik.handleChange}
            value={defaultValues[item.name]}
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
        Edit
      </Button>
    </form>
  );
}

export default memo(EditForm);
