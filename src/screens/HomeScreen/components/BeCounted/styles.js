import { createUseStyles } from 'react-jss';

export default createUseStyles({
  container: {
    margin: '1.5rem var(--margin-horizontal)',
  },
  beCounted: {
    alignItems: 'center',
    backgroundColor: '#ebebeb',
    padding: '1rem',
    width: '100%',
    '& p': {
      fontSize: '.75rem',
      marginRight: '0.5rem',
      width: '38rem',
    },
    '& h3': {
      flexDirection: 'column',
      fontSize: '1.7rem',
      width: '10rem',
    },
    '& small': {
      fontSize: '1rem',
    },
    '& button': {
      '&:hover': {
        backgroundColor: 'rgb(255,255,255,0.3)',
      },
      '&:active': {
        backgroundColor: 'rgb(255,255,255,0.6)',
      },
      outline: 'none',
      border: 0,
      backgroundColor: 'rgb(255,255,255,0)',
    },
  },
});
