import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  invalid: {
    color: 'red',
    fontSize: 12,
  },
  input: {
    display: 'none',
  },
}));

export default useStyles;
