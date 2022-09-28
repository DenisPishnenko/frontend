import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  headerGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    objectFit: 'cover',
    cursor: 'pointer',
  },
}));

export default useStyles;
