import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  inner: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 20,
  },
  root: {
    width: 350,
    height: 250,
    marginTop: '3vh',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
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
