import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';

import { NEWS_FIELDS, validateUserNews } from '../../constants';
import { fetchUserNews } from '../../redux/actions/news';

import useStyles from './style';

function NewsForm() {
  const classes = useStyles();
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.user.user);

  const submitHandler = (values) => {
    dispatch(fetchUserNews({ id, values, image }));
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
      tag: '',
    },
    validationSchema: validateUserNews(),
    onSubmit: submitHandler,
  });

  const handleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={classes.root}>
      {NEWS_FIELDS.map((item) => (
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
      <div className={classes.form}>
        <label htmlFor="icon-button-photo">
          <IconButton
            color="primary"
            component="span"
          >
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-photo"
              onChange={handleChangeImage}
              type="file"
            />
            <AddAPhotoIcon />
          </IconButton>
        </label>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={formik.handleSubmit}
        >
          ADD NEWS
        </Button>
      </div>
    </div>
  );
}

export default memo(NewsForm);
