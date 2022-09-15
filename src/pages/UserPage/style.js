import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: 150,
    width: 550,
    margin: 'auto',
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default useStyles;
