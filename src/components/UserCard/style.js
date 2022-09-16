import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 'auto',
    padding: 20,
  },
  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: 700,
    height: 350,
  },
  root: {
    width: 800,
    height: 450,
    marginTop: '10vh',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'column',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontSize: 20,
  },
  content: {
    fontSize: 16,
  },
  userName: {
    cursor: 'pointer',
  },
});

export default useStyles;
