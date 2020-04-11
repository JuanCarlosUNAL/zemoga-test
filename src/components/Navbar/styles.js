import withStyles from 'react-jss';

export default withStyles({
  container: {
    position: 'absolute',
    background: 'linear-gradient(to bottom, rgb(0,0,0), rgb(255,255,255,0) )',
    width: 'var(--xl-container-width)',
  },
  nav: {
    margin: '0rem var(--margin-horizontal)',
    width: '100%',
    alignItems: 'center',
    height: 'var(--navbar-height)',
    justifyContent: 'space-between',
    '& *': {
      color: 'white',
      listStyle: 'none',
      textDecoration: 'none',
    },
  },
  ul: {
    justifyContent: 'space-evenly',
    width: '27rem',
    padding: 0,
  },
});
