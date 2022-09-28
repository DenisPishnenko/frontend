import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginBottom: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    color: 'white',
  },
  select: {
    color: 'white',
    icon: {
      fill: 'white',
    },
  },
}));

export default useStyles;
