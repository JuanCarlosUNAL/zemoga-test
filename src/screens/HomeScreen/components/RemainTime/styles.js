import { createUseStyles } from 'react-jss';

export default createUseStyles({
  remainTime: {
    height: '2.5rem',
    marginTop: 'auto',
    '& div': {
      alignItems: 'center',
      padding: '0rem 0.75rem',
    },
  },
  gradient: {
    width: '32%',
    background: 'linear-gradient(to left, rgb(0,0,0,.3), rgba(255,255,255,0))',
    justifyContent: 'flex-end',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '1.8rem',
    opacity: 0.8,
    width: '68%',
  },
});
