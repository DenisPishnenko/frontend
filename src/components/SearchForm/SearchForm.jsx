import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

import { searchNews, putFilterType } from '../../redux/actions/news';

import useStyles from './style';

function SearhForm() {
  const classes = useStyles();
  const [userInput, setUserInput] = useState('');
  const [filterType, setFilterType] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    dispatch(searchNews(event.target.value));
    setUserInput(event.target.value);
  };

  const handleSelectChange = (event) => {
    dispatch(putFilterType(event.target.value));
    setFilterType(event.target.value);
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <TextField
        id="standard-basic"
        label="SEARCH NEWS"
        className={classes.input}
        InputLabelProps={{
          style: { color: '#fff' },
        }}
        value={userInput}
        onChange={handleInputChange}
      />
      <div>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          label="Search"
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon,
            },
          }}
          value={filterType}
          onChange={handleSelectChange}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Author">Author</MenuItem>
          <MenuItem value="Tag">Tag</MenuItem>
        </Select>
      </div>
    </FormControl>
  );
}

export default memo(SearhForm);
