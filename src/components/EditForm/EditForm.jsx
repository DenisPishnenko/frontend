import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import { fetchUserEdited } from '../../redux/actions/user';

import useStyles from './style';

function EditForm() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { name, id } = useSelector((state) => state.user.user);

  const [image, setImage] = useState(null);

  const submitHandler = (values) => {
    dispatch(fetchUserEdited({ id, values, image }));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: submitHandler,
  });

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.form}>
        <TextField
          id="standard-basic"
          label={name}
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={
              formik.touched.name && Boolean(formik.errors.name)
            }
          helperText={formik.touched.type && formik.errors.type}
        />
        {formik.touched.name && formik.errors.name && (
        <span className={classes.invalid}>{formik.errors.name}</span>
        )}
      </div>
      <div>
        <label htmlFor="icon-button-photo">
          <IconButton
            color="primary"
            component="span"
          >
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-photo"
              onChange={handleChange}
              type="file"
            />
            <AddAPhotoIcon />
          </IconButton>
        </label>
      </div>
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
